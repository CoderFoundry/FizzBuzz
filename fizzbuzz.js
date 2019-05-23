//Traditional Solve Fizz Buzz with a for loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1;i <=100;i++){
        if (i%value1 == 0 && i%value2 == 0){
            returnValue += 'FizzBuzz ';      
        } 
        else if (i%value1 == 0) {
            returnValue +='Fizz ';
        }
        else if (i%value2 == 0) {
            returnValue +='Buzz ';
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}
//Another way to follow DRY (don't repeat yourself)
function FizzBuzzB(value1, value2){
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for (let i =1;i<=100;i++){
        Fizz = i%value1 == 0;        
        Buzz = i%value2 == 0;        
        switch(true){
            case Fizz && Buzz : {
                returnValue += 'FizzBuzz '; 
                break;
            }
            case Fizz: {
                returnValue += 'Fizz '; 
                break;
            }
            case Buzz: {
                returnValue += 'Buzz '; 
                break;
            }
            default : {
                returnValue += i + ' '; 
                break;
            }
        }
        return returnValue;
        }
    
    }
 //Not traditonal approach
function FizzBuzzC(val1,val2){
        let returnValue = "";
        for(let i=1;i<=100;i++){
            returnValue += ((i%val1==0 ? 'Fizz' : '') + (i%val2==0 ? 'Buzz' : '') || i) + ' ';
        }
        return returnValue;
}

 //return an array of values instead of a string
function FizzBuzzD(val1,val2){
        let returnArray = [];
        for(let i=1;i<=100;i++){
            returnArray[i] = ((i%val1 == 0 ? 'Fizz' : '' ) + (i%val2 == 0 ? 'Buzz' : '') || i);                   
        }
        return returnArray;
}



//Call and use it
function buzzIt(){
    let output = "";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzC(val1,val2);
    document.getElementById('results').innerHTML = output;
}

//Call and use it output to a template
function buzzItTemplate(){
    //Grab our template from the HTML document
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');
    
    var templateHTML = rowTemplate.innerHTML;
    var resultsHTML = headTemplate.innerHTML;
    //Get the values we want to use
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    //Call our Fizz Buzz Function
    output = FizzBuzzD(val1,val2);
    for(i=1; i<output.length; i+=5){
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
            .replace('{{val2}}', output[i + 1])
            .replace('{{val3}}', output[i + 2])
            .replace('{{val4}}', output[i + 3])
            .replace('{{val5}}', output[i + 4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;
}

