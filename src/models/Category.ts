export class Category {
    id: number;
    categoryName: string;
    hide: boolean;

    constructor(id: number, categoryName: string, hide: boolean) {
        this.id = id;
        this.categoryName = categoryName;
        this.hide = hide;
    }
}
