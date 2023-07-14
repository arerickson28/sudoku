"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridGrouping_1 = require("./GridGrouping");
var testGrid = [
    [0, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
];
var grid = [
    [0, 0, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
];
var row0 = new GridGrouping_1.default(0, "row", grid);
var row1 = new GridGrouping_1.default(1, "row", grid);
var row2 = new GridGrouping_1.default(2, "row", grid);
var row3 = new GridGrouping_1.default(3, "row", grid);
var row4 = new GridGrouping_1.default(4, "row", grid);
var row5 = new GridGrouping_1.default(5, "row", grid);
var row6 = new GridGrouping_1.default(6, "row", grid);
var row7 = new GridGrouping_1.default(7, "row", grid);
var row8 = new GridGrouping_1.default(8, "row", grid);
var col0 = new GridGrouping_1.default(0, "col", grid);
var col1 = new GridGrouping_1.default(1, "col", grid);
var col2 = new GridGrouping_1.default(2, "col", grid);
var col3 = new GridGrouping_1.default(3, "col", grid);
var col4 = new GridGrouping_1.default(4, "col", grid);
var col5 = new GridGrouping_1.default(5, "col", grid);
var col6 = new GridGrouping_1.default(6, "col", grid);
var col7 = new GridGrouping_1.default(7, "col", grid);
var col8 = new GridGrouping_1.default(8, "col", grid);
var box0 = new GridGrouping_1.default(0, "box", grid);
var box1 = new GridGrouping_1.default(1, "box", grid);
var box2 = new GridGrouping_1.default(2, "box", grid);
var box3 = new GridGrouping_1.default(3, "box", grid);
var box4 = new GridGrouping_1.default(4, "box", grid);
var box5 = new GridGrouping_1.default(5, "box", grid);
var box6 = new GridGrouping_1.default(6, "box", grid);
var box7 = new GridGrouping_1.default(7, "box", grid);
var box8 = new GridGrouping_1.default(8, "box", grid);
var rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8];
var cols = [col0, col1, col2, col3, col4, col5, col6, col7, col8];
var boxs = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
var coorRelations = {
    '0,0': [row0, col0, box0],
    '0,1': [row0, col1, box0],
    '0,2': [row0, col2, box0],
    '0,3': [row0, col3, box1],
    '0,4': [row0, col4, box1],
    '0,5': [row0, col5, box1],
    '0,6': [row0, col6, box1],
    '0,7': [row0, col7, box2],
    '0,8': [row0, col8, box2],
    '1,0': [row1, col0, box0],
    '1,1': [row1, col1, box0],
    '1,2': [row1, col2, box0],
    '1,3': [row1, col3, box1],
    '1,4': [row1, col4, box1],
    '1,5': [row1, col5, box1],
    '1,6': [row1, col6, box1],
    '1,7': [row1, col7, box2],
    '1,8': [row1, col8, box2],
    '2,0': [row2, col0, box0],
    '2,1': [row2, col1, box0],
    '2,2': [row2, col2, box0],
    '2,3': [row2, col3, box1],
    '2,4': [row2, col4, box1],
    '2,5': [row2, col5, box1],
    '2,6': [row2, col6, box1],
    '2,7': [row2, col7, box2],
    '2,8': [row2, col8, box2],
    '3,0': [row3, col0, box3],
    '3,1': [row3, col1, box3],
    '3,2': [row3, col2, box3],
    '3,3': [row3, col3, box1],
    '3,4': [row3, col4, box1],
    '3,5': [row3, col5, box1],
    '3,6': [row3, col6, box1],
    '3,7': [row3, col7, box5],
    '3,8': [row3, col8, box5],
    '4,0': [row4, col0, box3],
    '4,1': [row4, col1, box3],
    '4,2': [row4, col2, box3],
    '4,3': [row4, col3, box4],
    '4,4': [row4, col4, box4],
    '4,5': [row4, col5, box4],
    '4,6': [row4, col6, box5],
    '4,7': [row4, col7, box5],
    '4,8': [row4, col8, box5],
    '5,0': [row5, col0, box3],
    '5,1': [row5, col1, box3],
    '5,2': [row5, col2, box3],
    '5,3': [row5, col3, box4],
    '5,4': [row5, col4, box4],
    '5,5': [row5, col5, box4],
    '5,6': [row5, col6, box5],
    '5,7': [row5, col7, box5],
    '5,8': [row5, col8, box5],
    '6,0': [row6, col0, box6],
    '6,1': [row6, col1, box6],
    '6,2': [row6, col2, box6],
    '6,3': [row6, col3, box7],
    '6,4': [row6, col4, box7],
    '6,5': [row6, col5, box7],
    '6,6': [row6, col6, box8],
    '6,7': [row6, col7, box8],
    '6,8': [row6, col8, box8],
    '7,0': [row7, col0, box6],
    '7,1': [row7, col1, box6],
    '7,2': [row7, col2, box6],
    '7,3': [row7, col3, box7],
    '7,4': [row7, col4, box7],
    '7,5': [row7, col5, box7],
    '7,6': [row7, col6, box8],
    '7,7': [row7, col7, box8],
    '7,8': [row7, col8, box8],
    '8,0': [row8, col0, box6],
    '8,1': [row8, col1, box6],
    '8,2': [row8, col2, box6],
    '8,3': [row8, col3, box7],
    '8,4': [row8, col4, box7],
    '8,5': [row8, col5, box7],
    '8,6': [row8, col6, box8],
    '8,7': [row8, col7, box8],
    '8,8': [row8, col8, box8]
};
// call row, columns, and boxs "indicie groupings"
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
// let holdSpace = []
// forEach(rows, columns, box4s)
//forEach(row)
//get spaces availabe
//get numbers needed
//forEach(number)
//forEach(space)
//forEach(spaceRelation(box, row, col with that space))
//if(number isAvailabe)
//add space to hold
//if(holdSpace.lengh == 1)
//grid[space] = number
//forEach(spaceRelation)
//spaceAvailable.pop(space)
//numbersAbvailable.pop(getIndex(number))
function checkEightOutOfNine(grouping) {
    if (grouping.spaceCoor.length == 1 && grouping.numbersNeeded.length == 1) {
        gridAndPop(grouping.spaceCoor[0], grouping.numbersNeeded[0]);
    }
}
function gridAndPop(coor, number) {
    var row = parseInt(coor.split(",")[0]);
    var col = parseInt(coor.split(",")[1]);
    grid[row][col] = number;
    for (var _i = 0, _a = coorRelations["".concat(coor)]; _i < _a.length; _i++) {
        var relation = _a[_i];
        relation.spaceCoorAvail.pop(relation.spaceCoorAvail.getIndex(coor));
        relation.numbersNeeded.pop(relation.numbersNeeded.getIndex(number));
    }
}
var spaceIsAvailbleForNumberBooleansList = [];
// console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
function getDistincts(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
function numbersNeededArrayExcludingNumber(arr, numberToRemove) {
    return arr.filter(function (item) { return item != numberToRemove; });
}
function spaceCoorAvailArrayExcludingBingoCoor(arr, bingoCoorToRemove) {
    return arr.filter(function (item) { return item != bingoCoorToRemove; });
}
//take number, check all spaces in that row
function checkGroupingForNumber(grouping, number) {
    console.log(grouping);
    for (var _i = 0, _a = grouping.spaceCoorAvail; _i < _a.length; _i++) {
        var space = _a[_i];
        checkSpaceForNumber(space, number);
    }
    console.log("spaceIsAvailForNumberBooleanListDISTINCT", getDistincts(spaceIsAvailbleForNumberBooleansList));
    if (getDistincts(spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        var bingoCoor = spaceIsAvailbleForNumberBooleansList[0];
        var coordinateA = parseInt(bingoCoor.split(",")[0]);
        var coordinateB = parseInt(bingoCoor.split(",")[1]);
        grid[coordinateA][coordinateB] = number;
        console.log("grouping: ".concat(grouping.name, " fulfills space: ").concat(bingoCoor, " with number: ").concat(number));
        // console.log(grid)
        var relationList = coorRelations["".concat(bingoCoor)];
        for (var _b = 0, relationList_1 = relationList; _b < relationList_1.length; _b++) {
            var relation = relationList_1[_b];
            relation.numbersFulfilled.push(number);
            relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number);
            relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor);
        }
        spaceIsAvailbleForNumberBooleansList = [];
    }
    else {
        console.log("grouping: ".concat(grouping.name, ", is inconclusive for number: ").concat(number));
        spaceIsAvailbleForNumberBooleansList = [];
    }
    console.log(grouping);
}
function checkSpaceForNumber(coor, number) {
    console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList);
    console.log("checking coor: ".concat(coor, " for number: ").concat(number));
    var relationList = coorRelations["".concat(coor)];
    // console.log(relationList)
    var canPushCoor = true;
    for (var _i = 0, relationList_2 = relationList; _i < relationList_2.length; _i++) {
        var relation = relationList_2[_i];
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false;
        }
    }
    if (canPushCoor) {
        spaceIsAvailbleForNumberBooleansList.push(coor);
        console.log("pushed", coor);
    }
    return;
}
console.log(grid);
var numNeeded = row0.numbersNeeded;
var spaceCoorAvail = row0.spaceCoorAvail;
// console.log(numNeeded)
// console.log(spaceCoorAvail)
for (var _i = 0, numNeeded_1 = numNeeded; _i < numNeeded_1.length; _i++) {
    var num = numNeeded_1[_i];
    checkGroupingForNumber(row0, num);
}
numNeeded = row0.numbersNeeded;
for (var _a = 0, numNeeded_2 = numNeeded; _a < numNeeded_2.length; _a++) {
    var num = numNeeded_2[_a];
    checkGroupingForNumber(row0, num);
}
console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList);
console.log(grid);
// checkSpaceForNumber("0", 1)
// checkGroupingForNumber(row0, 1)
// console.log(grid2)
