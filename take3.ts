import Sudoku from "./sudoku"
import GridGrouping from "./GridGrouping"

let otherGrid: number[][] = [
    [0, 5, 2, 0, 0, 6, 0, 0, 0],
    [1, 6, 0, 9, 0, 0, 0, 0, 4],
    [0, 4, 9, 8, 0, 3, 6, 2, 0],
    [4, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 8, 3, 2, 0, 1, 5, 9, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 2],
    [0, 9, 7, 3, 0, 5, 2, 4, 0],
    [2, 0, 0, 0, 0, 9, 0, 5, 6],
    [0, 0, 0, 1, 0, 0, 9, 7, 0],
]

console.log(otherGrid)


function beginGame(selectedGrid: number[][]) {
    let sudoku = new Sudoku(selectedGrid)

      //can go row by row
//can go column by column
//can go box by box

// for each grouping type
// -- for each grouping of that type (row, col, box)
    //--see which spaces are available
    //--see which numbers are needed
    //for each number needed
    //--for each space available
    //----for each grouping relationshp of that space
    //------is that number availabe?
    //---------if yes, put the space you're testing in a holding list of posible spaces for that number
    //     if, after checking all spaces for that number, there is only one space in the hold, put that number in that space, update grid, update all relations for that indicie

    for(let groupingType of sudoku.groupingTypes) {
        for(let grouping of groupingType) {
            let numNeeded = grouping.numbersNeeded
            for (let num of numNeeded) {
                checkGroupingForNumber(sudoku, grouping, num)
            }
        }
    }

    console.log(sudoku.rawGrid)

}


//-----------------------------------------------------------------------------------------------


function fulfillGridWithBingoCoor(sudoku:Sudoku, bingoCoor: String, number: number) {
    let coordinateA = parseInt(bingoCoor.split(",")[0])
    let coordinateB = parseInt(bingoCoor.split(",")[1])
    sudoku.rawGrid[coordinateA][coordinateB] = number
}

//take number, check all spaces in that row
function checkGroupingForNumber(sudoku: Sudoku, grouping: GridGrouping, number: number) {
    console.log(`checking ${grouping.name} for ${number}`)
  
    for(let space of grouping.spaceCoorAvail) {
        checkSpaceForNumber(sudoku, space, number)
    }

    console.log("spaceIsAvailForNumberBooleanListDISTINCT", getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList))

    if (getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        sudoku.bingoFoundForFullScan = true
        const bingoCoor = sudoku.spaceIsAvailbleForNumberBooleansList[0]

        fulfillGridWithBingoCoor(sudoku, bingoCoor, number)

        console.log(`fullScan technique: ${grouping.name} fulfills space: ${bingoCoor} with number: ${number}`)
        // console.log(grid)

        const relationList = sudoku.coorRelations[`${bingoCoor}`]

        adjustRelations(relationList, number, bingoCoor)

        // for(let relation of relationList) {

        //     relation.numbersFulfilled.push(number)

        //     relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)

        //     relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
        // }

        sudoku.spaceIsAvailbleForNumberBooleansList = []
    } else {
        console.log(`${grouping.name}, is inconclusive for number: ${number}`)
        sudoku.spaceIsAvailbleForNumberBooleansList = []
    }
    // console.log(grouping)
}

function getDistincts(arr: String[]) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

function numbersNeededArrayExcludingNumber(arr: number[], numberToRemove: number) {
    return arr.filter(item => item != numberToRemove)
}

function spaceCoorAvailArrayExcludingBingoCoor(arr: String[], bingoCoorToRemove: String) {
    return arr.filter(item => item != bingoCoorToRemove)
}

function adjustRelations(relationList: GridGrouping[], number: number, bingoCoor: String) {
    for(let relation of relationList) {

        relation.numbersFulfilled.push(number)

        relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)

        relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
    }
}

function checkSpaceForNumber(sudoku: Sudoku, coor: String, number: number) {
    // console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
    // console.log(`checking coor: ${coor} for number: ${number}`)
    const relationList = sudoku.coorRelations[`${coor}`]
    // console.log(relationList)
    let canPushCoor: boolean = true
    for(let relation of relationList) {
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false
        } 
    }

    if(canPushCoor) {
        sudoku.spaceIsAvailbleForNumberBooleansList.push(coor)
        // console.log("pushed", coor)
    }

    return
}

function fullScan(sudoku: Sudoku) {
    sudoku.bingoFoundForFullScan = false
    for(let groupingType of sudoku.groupingTypes) {
        for(let grouping of groupingType) {
            let numNeeded = grouping.numbersNeeded
            for (let num of numNeeded) {
                checkGroupingForNumber(sudoku, grouping, num)
            }
        }
    }
    // shouldReRun()
}


beginGame(otherGrid)