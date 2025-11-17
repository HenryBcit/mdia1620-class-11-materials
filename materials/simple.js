//the purpose
function TempConversionCalcuation(temperature, type){
    //convert from celcius to farenheit
    //convert from celcius to Kelvin

    let converted = 0;
    //if we need kelvin
    if(type === "farenheit"){    
        converted = CovertCelciusToFarenheit(temperature);
    }

    //if we need farenheit
    if(type === "kelvin"){
        converted = ConvertCelciusToKelvin(temperature);
    }

    //utility

    return converted;
}

function ValidateTemperature(temperature){
    //checks if the temperature is a number
    if(typeof temperature === "number"){
        //??
    } else {
        //it's not a number??
    }
}

function CovertCelciusToFarenheit(temperature){
    //calculates celcius to farenheit

    return temperature * 1.8 + 32;
}

function ConvertCelciusToKelvin(temperature){
    //calcuates celcius to Kelvin

    return temperature + 273.15;
}

function DisplayResults(newTemperature, originalTemperature){
    //display the value of the conversion and the origina celcius
    console.log("The converted temperature is "+newTemperature+". The original is "+originalTemperature);
}

//simulate someone using your product

let celciusTemperature = 10;

ValidateTemperature(celciusTemperature);
// let farenheitTemperature = TempConversionCalcuation(celciusTemperature, "farenheit");
// let kelvinTemperature = TempConversionCalcuation(celciusTemperature, "kelvin");
// DisplayResults(farenheitTemperature, celciusTemperature);
// DisplayResults(kelvinTemperature, celciusTemperature);
