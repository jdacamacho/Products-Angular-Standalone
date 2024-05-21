import { Seller } from "./Seller";

export class Product {
    code!: number;
    name!: string;
    price!: number;
    stock!: number;
    seller!: Seller;
}
