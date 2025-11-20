import { Product } from "../../models/Product";
import my_request from "./Request";



let link: string = "http://localhost:8080/products";

async function getproduct(link: string): Promise<Product[]> {
    //Tạo mảng để lưu trữ các sản phẩm
    const listProduct: Product[] = [];
    //Gọi API để lấy dữ liệu
    const response = await my_request(link);
    //Lấy dữ liệu từ API
    const responseData = response._embedded.products;
    //Duyệt qua mảng dữ liệu và thêm vào mảng listProduct
    for (const data of responseData) {
        listProduct.push(new Product(data.id, data.productCode, data.productName,
            data.description, data.priceOrigin, data.price, data.amount, data.sold, data.hide));
    }
    return listProduct as Product[];
}


export async function getAllProduct(): Promise<Product[]> {
    return getproduct(link);
}


export async function get3Product(): Promise<Product[]> {
    return getproduct(link + "?size=3");
}


export async function getProductPage(page: number, size: number): Promise<Product[]> {
    let BaseLink: string = link + "?page=" + page + "&size=" + size;
    return getproduct(BaseLink);
}

export async function getTotalPage(): Promise<number> {
    const response = await my_request(link);
    const totalPage = response.page.totalPages;
    return totalPage;
}