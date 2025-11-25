import { Thumbnail } from "../../models/Thumbnail";
import my_request from "./Request";

const link: string = `http://localhost:8080/products/`;


export async function getAllThumbnailForOneProduct(id: number): Promise<Thumbnail[]> {
    // Tạo mảng để lưu trữ các thumbnail
    const listThumbnail: Thumbnail[] = [];
    // Gọi API để lấy dữ liệu
    const response = await my_request(link + id + "/thumbnails");
    // Lấy dữ liệu từ API
    const responseData = response._embedded.thumbnails;
    // Duyệt qua mảng dữ liệu và thêm vào mảng listThumbnail
    for (const data of responseData) {
        listThumbnail.push(new Thumbnail(data.id, data.thumbnailName, data.icon, data.link, data.data));
    }
    return listThumbnail as Thumbnail[];
}



