import type { Thumbnail } from "../../models/Thumbnail";
import my_request from "./Request";

export async function getAllThumbnail(id: number): Promise<Thumbnail[]> {
    // Tạo mảng để lưu trữ các thumbnail
    const link: string = `http://localhost:8080/products/${id}/thumbnails`;
    const listThumbnail: Thumbnail[] = [];
    // Gọi API để lấy dữ liệu
    const response = await my_request(link);
    // Lấy dữ liệu từ API
    const responseData = response._embedded.thumbnails;
    // Duyệt qua mảng dữ liệu và thêm vào mảng listThumbnail
    for (const thumbnail of responseData) {
        listThumbnail.push(thumbnail);
    }
    return listThumbnail as Thumbnail[];
}