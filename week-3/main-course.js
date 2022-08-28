//Import Product object from js file.
import { Product } from "./product.js";

//export MainCourse class, using product parameters.
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}