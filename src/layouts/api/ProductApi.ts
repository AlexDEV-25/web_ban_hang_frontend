import { Product } from "../../models/Product";
import my_request from "./Request";



let link: string = "http://localhost:8080/products";

async function getManyProduct(link: string): Promise<Product[]> {
    //Tạo mảng để lưu trữ các sản phẩm
    const listProduct: Product[] = [];
    //Gọi API để lấy dữ liệu
    const response = await my_request(link);
    //Lấy dữ liệu từ API
    const responseData = response._embedded.products;
    //Duyệt qua mảng dữ liệu và thêm vào mảng listProduct
    for (const data of responseData) {
        listProduct.push(new Product(data.id, data.productCode, data.productName,
            data.description, data.productImage, data.priceOrigin, data.price, data.amount, data.sold, data.hide));
    }
    return listProduct as Product[];
}


export async function getAllProduct(): Promise<Product[]> {
    return getManyProduct(link);
}


export async function get3Product(): Promise<Product[]> {
    return getManyProduct(link + "?size=3");
}


export async function getProductPage(page: number, size: number): Promise<Product[]> {
    let BaseLink: string = link + "?page=" + page + "&size=" + size;
    return getManyProduct(BaseLink);
}

export async function findProductByName(name: string): Promise<Product[]> {
    if (name === "") {
        return getAllProduct();
    }
    return getManyProduct(link + "/search/findByProductNameContaining?&size=6&page=0&productName=" + name);
}

export async function getProductByCategory(id: number): Promise<Product[]> {
    if (id === 0) {
        return getAllProduct();
    }
    return getManyProduct(link + "/search/findByCategories_Id?categoryId=" + id + "&size=6&page=0");
}

export async function getProductById(id: number): Promise<Product | null> {
    try {
        const data = await my_request(link + "/" + id);

        const product: Product = new Product(data.id, data.productCode, data.productName,
            data.description, data.productImage, data.priceOrigin, data.price, data.amount, data.sold, data.hide);
        return product;
    } catch {
        return null;
    }

}


export async function getTotalPage(): Promise<number> {
    const response = await my_request(link);
    const totalPage = response.page.totalPages;
    return totalPage;
}