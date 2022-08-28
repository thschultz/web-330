//Add import statement for product class from product.js
import {
    Product
}

from "./product.js";


//Create Beverage class. Export class.
export class Beverage extends Product {
    constructor(name, price) {
        //Create super function to pass parameters through parent (Product) class.
        super(name, price);
    }
}