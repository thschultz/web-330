// Create the Product class and export it
export class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}