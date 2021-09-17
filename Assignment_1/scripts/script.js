'use strict'


document.addEventListener("DOMContentLoaded", setup)




function setup() {


    const rowInputField = document.querySelector("#rowField")
    const columnInputField = document.querySelector("#columnField")
    const tableButton = document.querySelector("#createTableButton")
    // createTable(25,25)
    
    tableButton.addEventListener("click", function() { createTable(rowInputField.value,columnInputField.value) } )

}




function createTable(numberRows, numberColumns) {

    const oddColourInput = document.querySelector("#oddColourField");
    const evenColourInput = document.querySelector("#evenColourField");

    // console.log(rowInputField.checkValidity())
    console.log(`createTable initiated:  Row input: ${numberRows}, Column input: ${numberColumns}, Colour 1: ${oddColourInput.value}, Colour 2: ${evenColourInput.value}`)
    let table = document.querySelector("table")
    const tableSection = document.querySelector("#tableHere")
    //creates a <table> if a table does not already exist. if exists, wipes out existing table
    if (table) {
        console.log("table already exists; removing existing one")
        table.textContent = undefined
    } else {
        console.log("Creating table...")
        table = document.createElement("table")
    }
        

    for (let i = 0; i < numberRows; i++) {

        //each iteration of the outer loop creates a new row and appends to table
        let newRow = document.createElement("tr")
        table.appendChild(newRow)

        for (let j = 0; j < numberColumns; j++) {

            //each iteraton of the inner for loop create a new cell (td) and appends to the current tr
            let newCell = document.createElement("td")
            newRow.appendChild(newCell)
            newCell.textContent=`${i} , ${j}`

            //if the current number of cells is even, set it to the even colour input, else set it to the odd colour input.
            if ((i+j) % 2 == 0) {
                newCell.style.backgroundColor= oddColourInput.value
            } else {
                newCell.style.backgroundColor= evenColourInput.value
            }
        }
    }

    tableSection.appendChild(table)
}
