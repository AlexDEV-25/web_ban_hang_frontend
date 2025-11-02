import { Product } from "../../models/Product";
import my_request from "./Request";


const link: string = "http://localhost:8080/products";

export async function getAllProduct(): Promise<Product[]> {
    // Tạo mảng để lưu trữ các sản phẩm
    const listProduct: Product[] = [];
    // Gọi API để lấy dữ liệu
    const response = await my_request(link);
    // Lấy dữ liệu từ API
    const responseData = response._embedded.products;
    // Duyệt qua mảng dữ liệu và thêm vào mảng listProduct
    for (const product of responseData) {
        listProduct.push(product);
    }
    return listProduct as Product[];
}