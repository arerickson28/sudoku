"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = require("./sudoku");
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
console.log(otherGrid);
function beginGame(selectedGrid) {
    var sudoku = new sudoku_1.default(selectedGrid);
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
    console.log(sudoku.rawGrid);
}
//-----------------------------------------------------------------------------------------------
function fulfillGridWithBingoCoor(sudoku, bingoCoor, number) {
    var coordinateA = parseInt(bingoCoor.split(",")[0]);
    var coordinateB = parseInt(bingoCoor.split(",")[1]);
    sudoku.rawGrid[coordinateA][coordinateB] = number;
}
//take number, check all spaces in that row
function checkGroupingForNumber(sudoku, grouping, number) {
    console.log("checking ".concat(grouping.name, " for ").concat(number));
    for (var _i = 0, _a = grouping.spaceCoorAvail; _i < _a.length; _i++) {
        var space = _a[_i];
        checkSpaceForNumber(sudoku, space, number);
    }
    console.log("spaceIsAvailForNumberBooleanListDISTINCT", getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList));
    if (getDistincts(sudoku.spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        sudoku.bingoFoundForFullScan = true;
        var bingoCoor = sudoku.spaceIsAvailbleForNumberBooleansList[0];
        fulfillGridWithBingoCoor(sudoku, bingoCoor, number);
        console.log("fullScan technique: ".concat(grouping.name, " fulfills space: ").concat(bingoCoor, " with number: ").concat(number));
        // console.log(grid)
        var relationList = sudoku.coorRelations["".concat(bingoCoor)];
        adjustRelations(relationList, number, bingoCoor);
        // for(let relation of relationList) {
        //     relation.numbersFulfilled.push(number)
        //     relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)
        //     relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
        // }
        sudoku.spaceIsAvailbleForNumberBooleansList = [];
    }
    else {
        console.log("".concat(grouping.name, ", is inconclusive for number: ").concat(number));
        sudoku.spaceIsAvailbleForNumberBooleansList = [];
    }
    // console.log(grouping)
}
function getDistincts(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
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
function checkSpaceForNumber(sudoku, coor, number) {
    // console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
    // console.log(`checking coor: ${coor} for number: ${number}`)
    var relationList = sudoku.coorRelations["".concat(coor)];
    // console.log(relationList)
    var canPushCoor = true;
    for (var _i = 0, relationList_2 = relationList; _i < relationList_2.length; _i++) {
        var relation = relationList_2[_i];
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false;
        }
    }
    if (canPushCoor) {
        sudoku.spaceIsAvailbleForNumberBooleansList.push(coor);
        // console.log("pushed", coor)
    }
    return;
}
function fullScan(sudoku) {
    sudoku.bingoFoundForFullScan = false;
    for (var _i = 0, _a = sudoku.groupingTypes; _i < _a.length; _i++) {
        var groupingType = _a[_i];
        for (var _b = 0, groupingType_2 = groupingType; _b < groupingType_2.length; _b++) {
            var grouping = groupingType_2[_b];
            var numNeeded = grouping.numbersNeeded;
            for (var _c = 0, numNeeded_2 = numNeeded; _c < numNeeded_2.length; _c++) {
                var num = numNeeded_2[_c];
                checkGroupingForNumber(sudoku, grouping, num);
            }
        }
    }
    // shouldReRun()
}
beginGame(otherGrid);
