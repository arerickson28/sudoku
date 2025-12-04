"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = require("./sudoku");
// WHAT THIS ALGORITHM DOES -- OVERVIEW
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
var otherGrid = [
    [0, 5, 2, 0, 0, 6, 0, 0, 0],
    [1, 6, 0, 9, 0, 0, 0, 0, 4],
    [0, 4, 9, 8, 0, 3, 6, 2, 0],
    [4, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 8, 3, 2, 0, 1, 5, 9, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 2],
    [0, 9, 7, 3, 0, 5, 2, 4, 0],
    [2, 0, 0, 0, 0, 9, 0, 5, 6],
    [0, 0, 0, 1, 0, 0, 9, 7, 0],
];
var ourGrid = [
    [0, 3, 0, 7, 0, 5, 2, 0, 1],
    [2, 0, 0, 1, 3, 0, 4, 7, 0],
    [0, 0, 7, 0, 2, 0, 0, 0, 0],
    [3, 0, 0, 0, 9, 0, 0, 5, 0],
    [6, 0, 0, 0, 5, 1, 0, 0, 0],
    [4, 0, 5, 2, 7, 0, 0, 0, 8],
    [0, 2, 3, 0, 8, 7, 0, 4, 0],
    [7, 0, 0, 5, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0],
];
console.log(otherGrid);
//-----------------------------------------------------------------------------------------------
function numbersNeededArrayExcludingNumber(arr, numberToRemove) {
    return arr.filter(function (item) { return item != numberToRemove; });
}
function spaceCoorAvailArrayExcludingBingoCoor(arr, bingoCoorToRemove) {
    return arr.filter(function (item) { return item != bingoCoorToRemove; });
}
function adjustRelations(relationList, number, bingoCoor) {
    for (var _i = 0, relationList_1 = relationList; _i < relationList_1.length; _i++) {
        var relation = relationList_1[_i];
        relation.numbersFulfilled.push(number);
        relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number);
        relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor);
    }
}
// "bingo coor" refers to saying bingo with exceitment
// when a space/coordinate on the grid can be fulfilled with a number
// this function places the discovered number in the appropriate place on the grid
function fulfillGridWithBingoCoor(sudoku, bingoCoor, number) {
    var coordinateA = parseInt(bingoCoor.split(",")[0]);
    var coordinateB = parseInt(bingoCoor.split(",")[1]);
    sudoku.rawGrid[coordinateA][coordinateB] = number;
}
// need this function because algorithm may register the coordinate
//  as available for say, number 5, multiple times
function getDistincts(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
function checkSpaceForNumber(sudoku, coor, number) {
    // retrieve the box, column, row groupings related to this space
    var relationList = sudoku.coorRelations["".concat(coor)];
    // start by assuming the space could be fulfulled with the number in question
    var canPushCoor = true;
    // for the space and number in consideration,
    // if the box, row, or column the space belongs to already contains that number,
    // the space in consideration cannot be fulfilled with the number in consideration
    for (var _i = 0, relationList_2 = relationList; _i < relationList_2.length; _i++) {
        var relation = relationList_2[_i];
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false;
        }
    }
    // if the space can still be considered for the number,
    // add it to the list of possible numbers for that space
    if (canPushCoor) {
        sudoku.spaceIsAvailbleForNumberBooleansList.push(coor);
    }
    return;
}
//take number, check all spaces in the given grouping (either box, row, column)
function checkGroupingForNumber(sudoku, grouping, number) {
    console.log("checking ".concat(grouping.name, " for ").concat(number));
    for (var _i = 0, _a = grouping.spaceCoorAvail; _i < _a.length; _i++) {
        var space = _a[_i];
        checkSpaceForNumber(sudoku, space, number);
    }
    if (getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        sudoku.bingoFoundForFullScan = true;
        var bingoCoor = sudoku.spaceIsAvailbleForNumberBooleansList[0];
        fulfillGridWithBingoCoor(sudoku, bingoCoor, number);
        console.log("fullScan technique: ".concat(grouping.name, " fulfills space: ").concat(bingoCoor, " with number: ").concat(number));
        // console.log(grid)
        var relationList = sudoku.coorRelations["".concat(bingoCoor)];
        adjustRelations(relationList, number, bingoCoor);
        sudoku.spaceIsAvailbleForNumberBooleansList = [];
    }
    else {
        console.log("".concat(grouping.name, ", is inconclusive for number: ").concat(number));
        sudoku.spaceIsAvailbleForNumberBooleansList = [];
    }
}
function fullGroupingScan(sudoku) {
    for (var _i = 0, _a = sudoku.groupingTypes; _i < _a.length; _i++) {
        var groupingType = _a[_i];
        for (var _b = 0, groupingType_1 = groupingType; _b < groupingType_1.length; _b++) {
            var grouping = groupingType_1[_b];
            var numNeeded = grouping.numbersNeeded;
            for (var _c = 0, numNeeded_1 = numNeeded; _c < numNeeded_1.length; _c++) {
                var num = numNeeded_1[_c];
                checkGroupingForNumber(sudoku, grouping, num);
            }
        }
    }
}
function beginGame(selectedGrid) {
    var sudoku = new sudoku_1.default(selectedGrid);
    var scanCount = 0;
    do {
        sudoku.bingoFoundForFullScan = false;
        console.log("scanCount: ".concat(scanCount++));
        fullGroupingScan(sudoku);
    } while (sudoku.bingoFoundForFullScan);
    // this prints out the result
    console.log(sudoku.rawGrid);
}
// run the procedure on the given grid
beginGame(ourGrid);
