//Create Bill class.
export class Bill
{
    //Create four class properties and assign them to empty array.
    constructor(_beverages, _desserts, _mainCourses, _appetizers){
        this._beverages = [];
        this._desserts = [];
        this._mainCourses = [];
        this._appetizers = [];
    }


//Create function addBeverage w/ one parameter of type of beverage. 
addBeverage(beverage)
{
    //Takes this beverage and pushes it to empty beverages array
    this._beverages.push(beverage);
}
//Create same function for dessert with one parameter for dessert type.
addDessert(dessert)
{
    this._desserts.push(dessert);
}
//Create function for main course.
addMainCourse(mainCourse)
{
    this._mainCourses.push(mainCourse);
}
//And one last class for appetizers.
addAppetizer(appetizer)
{
    this._appetizers.push(appetizer);
}
//Create getTotal function, using parseFloat for each of the 4 food categories.
getTotal()
{
    let total = 0;//Start total value of 0.00.

    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price); //Increase the total by each beverage price.
    });

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    });

    //Return the updated total with addition of each category and fix to 2 decimals places.
    return total.toFixed(2);
}
}