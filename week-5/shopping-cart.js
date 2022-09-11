// Create the CartComponent class and export it.
export class ShoppingCart
{
    constructor()
    {
        // Create an empty array named _products.
        this._products = [];

        
    }

    // Call the count function.
    count()
        {
            // Return the length of the _products array.
            return this._products.length;
        }

        // Call the add function.
        add(product)
        {
            // Push the product into the _products array.
            this._products.push(product);
        }

        // Create an Iterator.
        *[Symbol.iterator]()
        {   
            // Iterate over each object in the _products array.
            for(let product of this._products)
            {   
                // Pause at each item and return the product.
                yield product;
            }
        }
}