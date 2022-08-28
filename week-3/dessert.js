
//Import statement for product object.
import { Product } from "./product.js";

//Create Dessert class, inherit Product object.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}