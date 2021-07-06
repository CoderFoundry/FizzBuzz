function getValues() {

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //check for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //we call generateNumbers
        let fbData = FizzBuzzA(fizzValue, buzzValue);
        //we call displayNumbers
        displayData(fbData);

    } else {
        alert("You must enter integers");
    }

}

//Traditional Solve Fizz Buzz with a for loop
function FizzBuzzA(value1, value2) {
    let returnArray = [];
    for (let i = 1; i <= 92; i++) {
        if (i % value1 == 0 && i % value2 == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % value1 == 0) {
            returnArray.push('Fizz');
        } else if (i % value2 == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}
//Another way to follow DRY (don't repeat yourself)
function FizzBuzzB(value1, value2) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;
    for (let i = 1; i <= 100; i++) {
        Fizz = i % value1 == 0;
        Buzz = i % value2 == 0;
        switch (true) {
            case Fizz && Buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
        return returnArray;
    }

}

//return an array using a tienary operator
function FizzBuzzC(val1, val2) {
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {
        let value = ((i % val1 == 0 ? 'Fizz' : '') + (i % val2 == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

function displayData(fbData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}




