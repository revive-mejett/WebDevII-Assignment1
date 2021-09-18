'use strict'


/**This is an application that generates tables. It has a form which allows users to input # of rows and columns, the colours as well as the pattern.
 * The table is generated using this script by the click of a button which has a look based on the form inputs.
 * 
 * @author Kyle Veloso
 * 9/18/2021
 */


document.addEventListener("DOMContentLoaded", setup)


function setup() {

    const rowInputField = document.querySelector("#rowField")
    const columnInputField = document.querySelector("#columnField")
    const tableButton = document.querySelector("#createTableButton")

    
    tableButton.addEventListener("click", function() { createTable(rowInputField.value,columnInputField.value) } )

}


/**Create a <table> if it does not exist yet
 * 
 * @param {number} numberRows number of rows as input
 * @param {number} numberColumns number of columns as input
 */
function createTable(numberRows, numberColumns) {

    console.log("createTable")
    const tableSection = document.querySelector("#tableHere")
    let table = document.querySelector("table")

    //creates a <table> if a table does not already exist. if exists, wipes out existing table's contents
    if (table) {
        console.log("table already exists; removing existing one")
        table.textContent = undefined
    } else {
        console.log("Creating table...")
        table = document.createElement("table")
    }
        
    tableSection.appendChild(table)

    //checks if both inputs are valid, otherwise do not create the rows.
    if (document.querySelector("#columnField").checkValidity() && document.querySelector("#rowField").checkValidity()) {
        createRowsColumns(numberRows, numberColumns)
    }
    
    
}


/**Creates rows and columns <tr> and <td> to the table.
 * 
 * @param {number} numberRows the number of rows
 * @param {number} numberColumns the number of columns
 */
function createRowsColumns(numberRows, numberColumns) {

    const oddColourInput = document.querySelector("#oddColourField")
    const evenColourInput = document.querySelector("#evenColourField")
    const table = document.querySelector("table")

    console.log(`Creating rows and columns. Row input: ${numberRows} Column input: ${numberColumns}, Colour 1: ${oddColourInput.value}, Colour 2: ${evenColourInput.value}`)
    
    for (let i = 0; i < numberRows; i++) {

        //each iteration of the outer loop creates a new row <tr> and appends to table
        let newRow = document.createElement("tr")
        table.appendChild(newRow)

        for (let j = 0; j < numberColumns; j++) {

            //each iteraton of the inner for loop create a new cell <td> and appends to the current <tr>
            let newCell = document.createElement("td")
            newRow.appendChild(newCell)

            //do not add cell numbers for tables becoming too wide
            if (numberColumns <= 30) {
                newCell.textContent=`${i} , ${j}`
            }

            colourCell(newCell, i, j)
        }
    }
}


/**Colour the table cell based on the user's pattern choice and the row/column number this cell is positioned.
 * 
 * @param {HTMLTableCellElement} newCell the table cell as input
 * @param {number} rowNumber the current row number
 * @param {number} columnNumber the current column number
 */
function colourCell(newCell, rowNumber, columnNumber) {
    const patternCheckerSelected = document.querySelector("#checkerboard").checked
    const patternRowsAlternateSelected = document.querySelector("#rowsAlternate").checked
    const patternColumnsAlternateSelected = document.querySelector("#columnsAlternate").checked
    const oddColourInput = document.querySelector("#oddColourField")
    const evenColourInput = document.querySelector("#evenColourField")

    if (patternCheckerSelected) {
        //if user selected checker pattern, odd and even cells are coloured
        if ((rowNumber+columnNumber) % 2 == 0) {
            newCell.style.backgroundColor= evenColourInput.value
        } else {
            newCell.style.backgroundColor= oddColourInput.value
        }
    } else if (patternRowsAlternateSelected) {
        //if user selected rows alternate, colour the rows alternatively
        if (rowNumber % 2 == 0) {
            newCell.style.backgroundColor= evenColourInput.value
        } else {
            newCell.style.backgroundColor= oddColourInput.value
        }
    } else if (patternColumnsAlternateSelected) {
        //if user selected columns alternate, colour the columns alternatively
        if (columnNumber % 2 == 0) {
            newCell.style.backgroundColor= evenColourInput.value
        } else {
            newCell.style.backgroundColor= oddColourInput.value
        }
    }
    
}
