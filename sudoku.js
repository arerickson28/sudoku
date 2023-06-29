"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridGrouping_1 = require("./GridGrouping");
var grid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
];
var grid2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var testGrid = [
    0, 2, 3, 4, 5, 6, 7, 8, 9,
    4, 5, 6, 0, 0, 0, 0, 0, 0,
    7, 8, 9, 0, 0, 0, 0, 0, 0,
    2, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 0, 0, 0, 0, 0, 0, 0, 0,
    6, 0, 0, 0, 0, 0, 0, 0, 0,
    8, 0, 0, 0, 0, 0, 0, 0, 0,
    9, 0, 0, 0, 0, 0, 0, 0, 0,
];
var testGrid2 = [
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
var row0 = new GridGrouping_1.default(0, "row", testGrid2);
var col0 = new GridGrouping_1.default(1, "col", testGrid2);
var box0 = new GridGrouping_1.default(0, "box", testGrid2);
console.log(row0);
console.log(col0);
console.log(box0);
console.log("hi");
// function getGridRows(grid) {
//     for(let i=0; i<=9; i++) {
//     }
// }
// let rowAA = new GridGrouping("rowA", grid[0], getNumbersNeeded(grid2[0]), getNumbersFulfilled(grid2[0]))
// let rowBB = new GridGrouping("rowB", grid[1], getNumbersNeeded(grid2[1]), getNumbersFulfilled(grid2[1]))
// let colAA = new GridGrouping("rowA", getCol(1, grid))
var groupingExample = {
    "space": "number"
};
var rowAAA = {
    "name": "rowA",
    "spaces": {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0
    },
    "spacesAvailable": [],
    "numbersNeeded": [],
    "numbersFulfilled": []
};
var rowA = {
    "name": "rowA",
    "spaces": [0, 1, 2, 3, 4, 5, 6, 7, 8],
    "spacesAvailable": [0, 1, 2, 3, 4, 5, 6, 7, 8],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowB = {
    "name": "rowB",
    "spaces": [9, 10, 11, 12, 13, 14, 15, 16, 17],
    "spacesAvailable": [9, 10, 11, 12, 13, 14, 15, 16, 17],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowC = {
    "name": "rowC",
    "spaces": [18, 19, 20, 21, 22, 23, 24, 25, 26],
    "spacesAvailable": [18, 19, 20, 21, 22, 23, 24, 25, 26],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowD = {
    "spaces": [27, 28, 29, 30, 31, 32, 33, 34, 35],
    "spacesAvailable": [27, 28, 29, 30, 31, 32, 33, 34, 35],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowE = {
    "spaces": [36, 37, 38, 39, 40, 41, 42, 43, 44],
    "spacesAvailable": [36, 37, 38, 39, 40, 41, 42, 43, 44],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowF = {
    "spaces": [45, 46, 47, 48, 49, 50, 51, 52, 53],
    "spacesAvailable": [45, 46, 47, 48, 49, 50, 51, 52, 53],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowG = {
    "spaces": [54, 55, 56, 57, 58, 59, 60, 61, 62],
    "spacesAvailable": [54, 55, 56, 57, 58, 59, 60, 61, 62],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowH = {
    "spaces": [63, 64, 65, 66, 67, 68, 69, 70, 71],
    "spacesAvailable": [63, 64, 65, 66, 67, 68, 69, 70, 71],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rowI = {
    "spaces": [72, 73, 74, 75, 76, 77, 78, 79, 80],
    "spacesAvailable": [72, 73, 74, 75, 76, 77, 78, 79, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colA = {
    "spaces": [0, 9, 18, 27, 36, 45, 54, 63, 72],
    "spacesAvailable": [0, 9, 18, 27, 36, 45, 54, 63, 72],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colB = {
    "spaces": [1, 10, 19, 28, 37, 46, 55, 64, 73],
    "spacesAvailable": [1, 10, 19, 28, 37, 46, 55, 64, 73],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colC = {
    "numbers": [2, 11, 20, 29, 38, 47, 56, 65, 74],
    "spacesAvailable": [2, 11, 20, 29, 38, 47, 56, 65, 74],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colD = {
    "numbers": [3, 12, 21, 30, 39, 48, 57, 66, 75],
    "spacesAvailable": [3, 12, 21, 30, 39, 48, 57, 66, 75],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colE = {
    "numbers": [4, 13, 22, 31, 40, 49, 58, 67, 76],
    "spacesAvailable": [4, 13, 22, 31, 40, 49, 58, 67, 76],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colF = {
    "numbers": [5, 14, 23, 32, 41, 50, 59, 68, 77],
    "spacesAvailable": [5, 14, 23, 32, 41, 50, 59, 68, 77],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colG = {
    "numbers": [6, 15, 24, 33, 42, 51, 60, 69, 78],
    "spacesAvailable": [6, 15, 24, 33, 42, 51, 60, 69, 78],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colH = {
    "numbers": [7, 16, 25, 34, 43, 52, 61, 70, 79],
    "spacesAvailable": [7, 16, 25, 34, 43, 52, 61, 70, 79],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var colI = {
    "numbers": [8, 17, 26, 35, 44, 53, 62, 71, 80],
    "spacesAvailable": [8, 17, 26, 35, 44, 53, 62, 71, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxA = {
    "numbers": [0, 1, 2, 9, 10, 11, 18, 19, 20],
    "spacesAvailable": [0, 1, 2, 9, 10, 11, 18, 19, 20],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxB = {
    "numbers": [3, 4, 5, 12, 13, 14, 21, 22, 23],
    "spacesAvailable": [3, 4, 5, 12, 13, 14, 21, 22, 23],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxC = {
    "numbers": [6, 7, 8, 15, 16, 17, 24, 25, 26],
    "spacesAvailable": [6, 7, 8, 15, 16, 17, 24, 25, 26],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxD = {
    "spaces": [27, 28, 29, 36, 37, 38, 45, 46, 47],
    "spacesAvailable": [27, 28, 29, 36, 37, 38, 45, 46, 47],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxE = {
    "spaces": [30, 31, 32, 39, 40, 41, 48, 49, 50],
    "spacesAvailable": [30, 31, 32, 39, 40, 41, 48, 49, 50],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxF = {
    "spaces": [33, 34, 35, 42, 43, 44, 51, 52, 53],
    "spacesAvailable": [33, 34, 35, 42, 43, 44, 51, 52, 53],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxG = {
    "spaces": [54, 55, 56, 63, 64, 65, 72, 73, 74],
    "spacesAvailable": [54, 55, 56, 63, 64, 65, 72, 73, 74],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxH = {
    "spaces": [57, 58, 59, 66, 67, 68, 75, 76, 77],
    "spacesAvailable": [57, 58, 59, 66, 67, 68, 75, 76, 77],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var boxI = {
    "spaces": [60, 61, 62, 69, 70, 71, 78, 79, 80],
    "spacesAvailable": [60, 61, 62, 69, 70, 71, 78, 79, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
};
var rows = [rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI];
var cols = [colA, colB, colC, colD, colE, colF, colG, colH, colI];
var boxes = [boxA, boxB, boxC, boxD, boxE, boxF, boxG, boxH, boxI];
var indexRelations = {
    "0": [rowA, colA, boxA],
    "1": [rowA, colB, boxA],
    "2": [rowA, colC, boxA],
    "3": [rowA, colD, boxB],
    "4": [rowA, colE, boxB],
    "5": [rowA, colF, boxB],
    "6": [rowA, colG, boxC],
    "7": [rowA, colH, boxC],
    "8": [rowA, colI, boxC],
    "9": [rowB, colA, boxA],
    "10": [rowB, colB, boxA],
    "11": [rowB, colC, boxA],
    "12": [rowB, colD, boxB],
    "13": [rowB, colE, boxB],
    "14": [rowB, colF, boxB],
    "15": [rowB, colG, boxC],
    "16": [rowB, colH, boxC],
    "17": [rowB, colI, boxC],
    "18": [rowC, colA, boxA],
    "19": [rowC, colB, boxA],
    "20": [rowC, colC, boxA],
    "21": [rowC, colD, boxB],
    "22": [rowC, colE, boxB],
    "23": [rowC, colF, boxB],
    "24": [rowC, colG, boxC],
    "25": [rowC, colH, boxC],
    "26": [rowC, colI, boxC],
    "27": [rowD, colA, boxD],
    "28": [rowD, colB, boxD],
    "29": [rowD, colC, boxD],
    "30": [rowD, colD, boxE],
    "31": [rowD, colE, boxE],
    "32": [rowD, colF, boxE],
    "33": [rowD, colG, boxF],
    "34": [rowD, colH, boxF],
    "35": [rowD, colI, boxF],
    "36": [rowE, colA, boxD],
    "37": [rowE, colB, boxD],
    "38": [rowE, colC, boxD],
    "39": [rowE, colD, boxE],
    "40": [rowE, colE, boxE],
    "41": [rowE, colF, boxE],
    "42": [rowE, colG, boxF],
    "43": [rowE, colH, boxF],
    "44": [rowE, colI, boxF],
    "45": [rowF, colA, boxD],
    "46": [rowF, colB, boxD],
    "47": [rowF, colC, boxD],
    "48": [rowF, colD, boxE],
    "49": [rowF, colE, boxE],
    "50": [rowF, colF, boxE],
    "51": [rowF, colG, boxF],
    "52": [rowF, colH, boxF],
    "53": [rowF, colI, boxF],
    "54": [rowG, colA, boxG],
    "55": [rowG, colB, boxG],
    "56": [rowG, colC, boxG],
    "57": [rowG, colD, boxH],
    "58": [rowG, colE, boxH],
    "59": [rowG, colF, boxH],
    "60": [rowG, colG, boxI],
    "61": [rowG, colH, boxI],
    "62": [rowG, colI, boxI],
    "63": [rowH, colA, boxG],
    "64": [rowH, colB, boxG],
    "65": [rowH, colC, boxG],
    "66": [rowH, colD, boxH],
    "67": [rowH, colE, boxH],
    "68": [rowH, colF, boxH],
    "69": [rowH, colG, boxI],
    "70": [rowH, colH, boxI],
    "71": [rowH, colI, boxI],
    "72": [rowI, colA, boxG],
    "73": [rowI, colB, boxG],
    "74": [rowI, colC, boxG],
    "75": [rowI, colD, boxH],
    "76": [rowI, colE, boxH],
    "77": [rowI, colF, boxH],
    "78": [rowI, colG, boxI],
    "79": [rowI, colH, boxI],
    "80": [rowI, colI, boxI]
};
// call row, columns, and boxes "indicie groupings"
//can go row by row
//can go column by column
//can go box by box
// for each grouping type
// -- for each grouping of that type
//--see which spaces are available
//--see which numbers are needed
//for each number needed
//--for each space available
//----for each grouping relationshp of that space
//------is that number availabe?
//---------if yes, put the space you're testing in a holding list of posible spaces for that number
//     if, after checking all spaces for that number, there is only one space in the hold, put that number in that space, update grid, update all relations for that indicie
// let holdSpace = []
// forEach(rows, columns, boxes)
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
// function checkEightOutOfNine(grouping) {
//     if (grouping.spacesAvailale.lengh == 1 && grouping.numbersNeeded == 1) {
//         gridAndPop(grouping.spacesAvailable[0], grouping.numbersNeeded[0])
//    }
// }
// function gridAndPop(index, number) {
//      grid[index] = number
//      for(relation of indexRelations[index]) {
//         relation.spacesAvailable.pop(getIndex(index))
//         relation.numbersNeeded.pop(getIndex(number))
//     }
// }
var spaceIsAvailbleForNumberBooleansList = [];
//funtion to take in available spaces and available numbers
//funtion that takes in a space and a number and the space relation list
//take number, check all spaces in that row
// function checkGroupingForNumber(grouping, number) {
//     console.log(`grouping: ${grouping.name}`)
//     for(space of grouping.spacesAvailable) {
//         checkSpaceForNumber(space, number)
//     }
//     if (spaceIsAvailbleForNumberBooleansList.length == 1) {
//         //fill space with that number, yay!
//         console.log(`grouping: ${grouping.name} fulfills space: ${space} with number: ${number}`)
//     } else {
//         console.log(`grouping: ${grouping.name}, is inconclusive for number: ${number}`)
//     }
// }
// function checkSpaceForNumber(space, number) {
//     console.log(`checking space: ${space} for number: ${number}`)
//     const relationList = indexRelations[parseInt(space)]
//     // console.log(relationList)
//     // let spaceIsAvailbleForNumberBooleansList = []
//     for(relation of relationList) {
//         if (!relation.numbersFulfilled.includes(number)) {
//             spaceIsAvailbleForNumberBooleansList.push(space)
//         }
//     }
//     return
// }
// checkSpaceForNumber("0", 1)
// checkGroupingForNumber(rowA, 1)
// console.log(grid2)
