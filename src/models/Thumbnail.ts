export class Thumbnail {
    id: number;
    thumbnailName?: string;
    icon?: boolean;
    link?: string;
    data?: string;

    constructor(id: number, thumbnailName?: string, icon?: boolean, link?: string, data?: string) {
        this.id = id;
        this.thumbnailName = thumbnailName;
        this.icon = icon;
        this.link = link;
        this.data = data;
    }
}