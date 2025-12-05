import Sudoku from "./sudoku"
import GridGrouping from "./GridGrouping"

// WHAT THIS ALGORITHM DOES -- OVERVIEW

// Techniques implemented in this algorithm:
// -- What I call the groupings technique

// can go row by row
// can go column by column
// can go box by box

// for each grouping type (rows, boxes, columns)
// -- for each grouping of that type (row, col, box)
// ---- see which spaces are available
// ---- see which numbers are needed
// ---- for each number needed
// ------- for each space available
// --------- for each grouping relationshp of that space
// ----------- is that number availabe?
// ----------- if yes, put the space you're testing in a holding list of posible spaces for that number
// ----------- if, after checking all spaces for that number, there is only one space in the hold, put that number in that space, update grid, update all relations for that coorinate

// sample grid (easy, this algorithm solves in one full scan through)
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

// sample grid (hard, this algorithm at this point is unable to solve)
let ourGrid: number[][] = [
    [0, 3, 0, 7, 0, 5, 2, 0, 1],
    [2, 0, 0, 1, 3, 0, 4, 7, 0],
    [0, 0, 7, 0, 2, 0, 0, 0, 0],
    [3, 0, 0, 0, 9, 0, 0, 5, 0],
    [6, 0, 0, 0, 5, 1, 0, 0, 0],
    [4, 0, 5, 2, 7, 0, 0, 0, 8],
    [0, 2, 3, 0, 8, 7, 0, 4, 0],
    [7, 0, 0, 5, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0],
]

// print out inital grid
console.log(otherGrid)

//-----------------------------------------------------------------------------------------------

// when a number fulfills a need for a grouping (box, col, row)
// keep the same list of needed numbers excuding the number that was just fulfilled
function numbersNeededArrayExcludingNumber(arr: number[], numberToRemove: number) {
    return arr.filter(item => item != numberToRemove)
}

// when a space/coordinate for a grouping is fulfilled with a number
// keep the same list of spaces/coorinates needing numbers excluding the space that now has a number
function spaceCoorAvailArrayExcludingBingoCoor(arr: String[], bingoCoorToRemove: String) {
    return arr.filter(item => item != bingoCoorToRemove)
}

// after a space/coordinate has been fulfulled with a number on the grid
// the groupings related to that space need to be updated to know about it
function adjustRelations(relationList: GridGrouping[], number: number, bingoCoor: String) {
    for (let relation of relationList) {
        relation.numbersFulfilled.push(number)
        relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)
        relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
    }
}

// "bingo coor" refers to saying bingo with excitment
// when a space/coordinate on the grid can be fulfilled with a number
// this function places the discovered number in the appropriate place on the grid
function fulfillGridWithBingoCoor(sudoku:Sudoku, bingoCoor: String, number: number) {
    let coordinateA = parseInt(bingoCoor.split(",")[0])
    let coordinateB = parseInt(bingoCoor.split(",")[1])
    sudoku.rawGrid[coordinateA][coordinateB] = number
}

// need this function because algorithm may register the coordinate
// as available for say, number 5, multiple times
function getDistincts(arr: String[]) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

function checkSpaceForNumber(sudoku: Sudoku, coor: String, number: number) {

    // retrieve the box, column, row groupings related to this space
    const relationList = sudoku.coorRelations[`${coor}`]

    // start by assuming the space could be fulfulled with the number in question
    let canPushCoor: boolean = true

    // for the space and number in consideration,
    // if the box, row, or column the space belongs to already contains that number,
    // the space in consideration cannot be fulfilled with the number in consideration
    for(let relation of relationList) {
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false
        } 
    }

    // if the space can still be considered for the number,
    // add it to the list of possible numbers for that space
    if (canPushCoor) {
        sudoku.spaceIsAvailbleForNumberBooleansList.push(coor)
    }

    return
}

//take number, check all spaces in the given grouping (either box, row, column)
function checkGroupingForNumber(sudoku: Sudoku, grouping: GridGrouping, number: number) {
    console.log(`checking ${grouping.name} for ${number}`)
  
    for(let space of grouping.spaceCoorAvail) {
        checkSpaceForNumber(sudoku, space, number)
    }

    if (getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        sudoku.bingoFoundForFullScan = true
        const bingoCoor = sudoku.spaceIsAvailbleForNumberBooleansList[0]

        fulfillGridWithBingoCoor(sudoku, bingoCoor, number)

        console.log(`fullScan technique: ${grouping.name} fulfills space: ${bingoCoor} with number: ${number}`)

        const relationList = sudoku.coorRelations[`${bingoCoor}`]

        adjustRelations(relationList, number, bingoCoor)

        sudoku.spaceIsAvailbleForNumberBooleansList = []
    } else {
        console.log(`${grouping.name}, is inconclusive for number: ${number}`)
        sudoku.spaceIsAvailbleForNumberBooleansList = []
    }
}


function fullGroupingScan(sudoku: Sudoku) {
    for (let groupingType of sudoku.groupingTypes) {
        for (let grouping of groupingType) {
            let numNeeded = grouping.numbersNeeded
            for (let num of numNeeded) {
                checkGroupingForNumber(sudoku, grouping, num)
            }
        }
    }
}

function beginGame(selectedGrid: number[][]) {
    let sudoku = new Sudoku(selectedGrid)

    let scanCount : number = 0

    // continue to run the groupings technique until it
    // no longer can logically fulfill numbers
    do {
        sudoku.bingoFoundForFullScan = false
        console.log(`scanCount: ${scanCount ++}`)
        fullGroupingScan(sudoku)
    } while (sudoku.bingoFoundForFullScan)

    // this prints out the result
    console.log(sudoku.rawGrid)

}

// run the procedure on the given grid
beginGame(ourGrid)

