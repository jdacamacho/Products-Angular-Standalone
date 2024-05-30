import { Seller } from "../Objects/seller";

export class Product {
    code!: number;
    name!: string;
    price!: number;
    category!:string;
    stock!: number;
    seller!: Seller;
}
