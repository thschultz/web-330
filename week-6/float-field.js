//Create a class names FloatField
export class FloatField 
{
    //2 parameters name and field, set to class properties.
    constructor(name, field){
        this.name = name;
        this.field= field;
    }

    //Create a validate function
    validate(){
        //Return true if you can parseFloat or this.field isNAN.
        return !isNaN(parseFloat(this.field));        
    }

    //Create a getMessage function, return string message.
    getMessage(){
        return (this.name +' must be a float value. You entered '+ this.field);
    }
}

//Export class