import { Seller } from "../Objects/seller";

export class Product {
    code!: number;
    name!: string;
    price!: number;
    stock!: number;
    seller!: Seller;
}
