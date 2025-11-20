import { Category } from "../../models/Category";
import my_request from "./Request";


let link: string = "http://localhost:8080/categories";

export async function getCategory(link: string): Promise<Category[]> {
    // Tạo mảng để lưu trữ các danh mục
    const listCategory: Category[] = [];
    // Gọi API để lấy dữ liệu
    const response = await my_request(link);
    // Lấy dữ liệu từ API
    const responseData = response._embedded.productCategoties;
    // Duyệt qua mảng dữ liệu và thêm vào mảng listCategory
    for (const data of responseData) {
        listCategory.push(new Category(data.id, data.categoryName, data.hide));
    }
    return listCategory as Category[];
}

export async function getAllCategory(): Promise<Category[]> {
    return getCategory(link);
}