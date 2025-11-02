import { Category } from "../../models/Category";
import my_request from "./Request";


const link: string = "http://localhost:8080/categories";

export async function getAllCategory(): Promise<Category[]> {
    // Tạo mảng để lưu trữ các danh mục
    const listCategory: Category[] = [];
    // Gọi API để lấy dữ liệu
    const response = await my_request(link);
    // Lấy dữ liệu từ API
    const responseData = response._embedded.productCategoties;
    // Duyệt qua mảng dữ liệu và thêm vào mảng listCategory
    for (const category of responseData) {
        listCategory.push(category);
    }
    return listCategory as Category[];
}