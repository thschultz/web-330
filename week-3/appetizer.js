//Import Product object.
import { Product } from "./product.js";

//Create Appetizer class to inherit Product object. Export the class. 
export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}