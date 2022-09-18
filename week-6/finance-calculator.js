//Create FinanceCalculator class.
export class FinanceCalculator
{
    //Create static variable equal to 12 months in the year.
    static MONTHS_IN_YEAR = 12;

   //Create static function with 3 parameters
   static calculateFutureValue(monthlyPayment, rate, years)
   {
       this.monthlyPayment = monthlyPayment;
       this.rate = rate;
       this.years = years;

       
   //Create months variable equal to MONTHS_IN_YEAR times parameter years.
   let months = years * FinanceCalculator.MONTHS_IN_YEAR;
   
    //Create interest rate variable.
    let interestRate = 1 + rate / 100;

    //Create presentValue variable assign it monthlyPayment times months variable.
    let presentValue = monthlyPayment * months;

    //Create futureValue variable and assign it calculation presentValue * (Math.pow(interestRate, months))
    let futureValue = presentValue * (Math.pow(interestRate, months));

   //Return futureValue to 2 decimal places.
    return futureValue.toFixed(2);
    }
    //Create a static function convertToCurrency with single parameter name field.
    static convertToCurrency(field)
    {      
        //Create variable and use built in International Number Formatter. 
        let currencyFormatter = new Intl.NumberFormat("en-US", 
        {
            //Set currency style to USD.
            style: "currency",
            currency: "USD"
        });
        
        //Return function passing in field parameter.
        return currencyFormatter.format(field);
    }
}
//Export the field.