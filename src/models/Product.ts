export class Product {
    id: number;
    productCode?: string;
    productName?: string;
    description?: string;
    priceOrigin?: number;
    price?: number;
    amount?: number;
    sold?: number;
    hide?: boolean;

    constructor(id: number, productCode?: string, productName?: string, description?: string, priceOrigin?: number, price?: number, amount?: number, sold?: number, hide?: boolean) {
        this.id = id;
        this.productCode = productCode;
        this.productName = productName;
        this.description = description;
        this.priceOrigin = priceOrigin;
        this.price = price;
        this.amount = amount;
        this.sold = sold;
        this.hide = hide;
    }
}
