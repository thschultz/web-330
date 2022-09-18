//Create FloatMaxField
export class FloatMinField
{
    //3 parameters set to class properties.
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }

    //Create validate function.
    validate(){
      //Boolean value will return true if value of parseFloat(field) is greater than min value.
      let floatField = parseFloat(this.field);
      return floatField > this.min;
    }
    
    //Create getMessage function return string.
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}
//Export class.