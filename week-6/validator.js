import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from  "./float-max-field.js";

export class Validator 
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    //Create two class properties validators and messages, set them equal to empty array.
        this.validators = [];
        this.messages = [];
    }

    /*Create a function addRequiredField() in the body push a new instance of the RequiredField class
    to validators array using the name and field as parameters.*/
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));        
    }
    //Create addRequiredFloatField in the body push new instance of class to the validators array.
    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }
    //Create addFloatMinField function push to validators array using name, field, min as parameters.
    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    //Create addFloatMaxField with parameter max, push to validators array.
    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //Create validate function.
    validate()
    {
    ///Iterate through each object (RequiredField, FloatField, Min and Max) of validators array.
        for (let validator of this.validators)
        {
            //Call RequiredField.validate()--this should return true or false value.
            if(!validator.validate())
            {
            //If RequireField validate returns false,push iterated.getMessage() to message array.
                    //Push iterated object getMessages to the messages array.
                    this.messages.push(validator.getMessage());
                    return false;
                }
            }
        return true;
    }
}

//Export the class.