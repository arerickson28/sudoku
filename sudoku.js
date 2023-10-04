"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridGrouping_1 = require("./GridGrouping");
var LaneGrouping_1 = require("./LaneGrouping");
var testGrid = [
    [0, 0, 0, 5, 1, 0, 8, 0, 3],
    [0, 0, 5, 0, 6, 4, 0, 9, 0],
    [9, 0, 0, 7, 0, 2, 0, 0, 6],
    [8, 0, 3, 0, 4, 5, 6, 0, 0],
    [2, 0, 9, 0, 0, 0, 4, 0, 7],
    [0, 0, 4, 6, 2, 0, 9, 0, 8],
    [7, 0, 0, 1, 0, 3, 0, 0, 4],
    [0, 3, 0, 2, 9, 0, 1, 0, 0],
    [1, 0, 2, 0, 7, 8, 0, 0, 0],
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
var emptyGrid = [
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
var easyGrid = [
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 8, 0, 0, 0, 7, 0, 9, 0],
    [6, 0, 2, 0, 0, 0, 5, 0, 0],
    [0, 7, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 9, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 4, 0],
    [0, 0, 5, 0, 0, 0, 6, 0, 3],
    [0, 9, 0, 4, 0, 0, 0, 7, 0],
    [0, 0, 6, 0, 0, 0, 0, 0, 0],
];
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
function beginGame(selectedGrid) {
    var row0 = new GridGrouping_1.default(0, "row", selectedGrid);
    var row1 = new GridGrouping_1.default(1, "row", selectedGrid);
    var row2 = new GridGrouping_1.default(2, "row", selectedGrid);
    var row3 = new GridGrouping_1.default(3, "row", selectedGrid);
    var row4 = new GridGrouping_1.default(4, "row", selectedGrid);
    var row5 = new GridGrouping_1.default(5, "row", selectedGrid);
    var row6 = new GridGrouping_1.default(6, "row", selectedGrid);
    var row7 = new GridGrouping_1.default(7, "row", selectedGrid);
    var row8 = new GridGrouping_1.default(8, "row", selectedGrid);
    var col0 = new GridGrouping_1.default(0, "col", selectedGrid);
    var col1 = new GridGrouping_1.default(1, "col", selectedGrid);
    var col2 = new GridGrouping_1.default(2, "col", selectedGrid);
    var col3 = new GridGrouping_1.default(3, "col", selectedGrid);
    var col4 = new GridGrouping_1.default(4, "col", selectedGrid);
    var col5 = new GridGrouping_1.default(5, "col", selectedGrid);
    var col6 = new GridGrouping_1.default(6, "col", selectedGrid);
    var col7 = new GridGrouping_1.default(7, "col", selectedGrid);
    var col8 = new GridGrouping_1.default(8, "col", selectedGrid);
    var box0 = new GridGrouping_1.default(0, "box", selectedGrid);
    var box1 = new GridGrouping_1.default(1, "box", selectedGrid);
    var box2 = new GridGrouping_1.default(2, "box", selectedGrid);
    var box3 = new GridGrouping_1.default(3, "box", selectedGrid);
    var box4 = new GridGrouping_1.default(4, "box", selectedGrid);
    var box5 = new GridGrouping_1.default(5, "box", selectedGrid);
    var box6 = new GridGrouping_1.default(6, "box", selectedGrid);
    var box7 = new GridGrouping_1.default(7, "box", selectedGrid);
    var box8 = new GridGrouping_1.default(8, "box", selectedGrid);
    // // row lanes
    // let row0A = row0.spaceCoor.slice(0, 3)
    // let row0B = row0.spaceCoor.slice(3, 6)
    // let row0C = row0.spaceCoor.slice(6, 9)
    // let row1A = row1.spaceCoor.slice(0, 3)
    // let row1B = row1.spaceCoor.slice(3, 6)
    // let row1C = row1.spaceCoor.slice(6, 9)
    // let row2A = row2.spaceCoor.slice(0, 3)
    // let row2B = row2.spaceCoor.slice(3, 6)
    // let row2C = row2.spaceCoor.slice(6, 9)
    // let row3A = row3.spaceCoor.slice(0, 3)
    // let row3B = row3.spaceCoor.slice(3, 6)
    // let row3C = row3.spaceCoor.slice(6, 9)
    // let row4A = row4.spaceCoor.slice(0, 3)
    // let row4B = row4.spaceCoor.slice(3, 6)
    // let row4C = row4.spaceCoor.slice(6, 9)
    // let row5A = row5.spaceCoor.slice(0, 3)
    // let row5B = row5.spaceCoor.slice(3, 6)
    // let row5C = row5.spaceCoor.slice(6, 9)
    // let row6A = row6.spaceCoor.slice(0, 3)
    // let row6B = row6.spaceCoor.slice(3, 6)
    // let row6C = row6.spaceCoor.slice(6, 9)
    // let row7A = row7.spaceCoor.slice(0, 3)
    // let row7B = row7.spaceCoor.slice(3, 6)
    // let row7C = row7.spaceCoor.slice(6, 9)
    // let row8A = row8.spaceCoor.slice(0, 3)
    // let row8B = row8.spaceCoor.slice(3, 6)
    // let row8C = row8.spaceCoor.slice(6, 9)
    // //col lanes
    // let col0A = col0.spaceCoor.slice(0, 3)
    // let col0B = col0.spaceCoor.slice(3, 6)
    // let col0C = col0.spaceCoor.slice(6, 9)
    // let col1A = col1.spaceCoor.slice(0, 3)
    // let col1B = col1.spaceCoor.slice(3, 6)
    // let col1C = col1.spaceCoor.slice(6, 9)
    // let col2A = col2.spaceCoor.slice(0, 3)
    // let col2B = col2.spaceCoor.slice(3, 6)
    // let col2C = col2.spaceCoor.slice(6, 9)
    // let col3A = col3.spaceCoor.slice(0, 3)
    // let col3B = col3.spaceCoor.slice(3, 6)
    // let col3C = col3.spaceCoor.slice(6, 9)
    // let col4A = col4.spaceCoor.slice(0, 3)
    // let col4B = col4.spaceCoor.slice(3, 6)
    // let col4C = col4.spaceCoor.slice(6, 9)
    // let col5A = col5.spaceCoor.slice(0, 3)
    // let col5B = col5.spaceCoor.slice(3, 6)
    // let col5C = col5.spaceCoor.slice(6, 9)
    // let col6A = col6.spaceCoor.slice(0, 3)
    // let col6B = col6.spaceCoor.slice(3, 6)
    // let col6C = col6.spaceCoor.slice(6, 9)
    // let col7A = col7.spaceCoor.slice(0, 3)
    // let col7B = col7.spaceCoor.slice(3, 6)
    // let col7C = col7.spaceCoor.slice(6, 9)
    // let col8A = col8.spaceCoor.slice(0, 3)
    // let col8B = col8.spaceCoor.slice(3, 6)
    // let col8C = col8.spaceCoor.slice(6, 9)
    // row lanes
    var row0A = new LaneGrouping_1.default(row0, "A");
    var row0B = new LaneGrouping_1.default(row0, "B");
    var row0C = new LaneGrouping_1.default(row0, "C");
    var row1A = new LaneGrouping_1.default(row1, "A");
    var row1B = new LaneGrouping_1.default(row1, "B");
    var row1C = new LaneGrouping_1.default(row1, "C");
    var row2A = new LaneGrouping_1.default(row2, "A");
    var row2B = new LaneGrouping_1.default(row2, "B");
    var row2C = new LaneGrouping_1.default(row2, "C");
    var row3A = new LaneGrouping_1.default(row3, "A");
    var row3B = new LaneGrouping_1.default(row3, "B");
    var row3C = new LaneGrouping_1.default(row3, "C");
    var row4A = new LaneGrouping_1.default(row4, "A");
    var row4B = new LaneGrouping_1.default(row4, "B");
    var row4C = new LaneGrouping_1.default(row4, "C");
    var row5A = new LaneGrouping_1.default(row5, "A");
    var row5B = new LaneGrouping_1.default(row5, "B");
    var row5C = new LaneGrouping_1.default(row5, "C");
    var row6A = new LaneGrouping_1.default(row6, "A");
    var row6B = new LaneGrouping_1.default(row6, "B");
    var row6C = new LaneGrouping_1.default(row6, "C");
    var row7A = new LaneGrouping_1.default(row7, "A");
    var row7B = new LaneGrouping_1.default(row7, "B");
    var row7C = new LaneGrouping_1.default(row7, "C");
    var row8A = new LaneGrouping_1.default(row8, "A");
    var row8B = new LaneGrouping_1.default(row8, "B");
    var row8C = new LaneGrouping_1.default(row8, "C");
    //col lanes
    var col0A = new LaneGrouping_1.default(col0, "A");
    var col0B = new LaneGrouping_1.default(col0, "B");
    var col0C = new LaneGrouping_1.default(col0, "C");
    var col1A = new LaneGrouping_1.default(col1, "A");
    var col1B = new LaneGrouping_1.default(col1, "B");
    var col1C = new LaneGrouping_1.default(col1, "C");
    var col2A = new LaneGrouping_1.default(col2, "A");
    var col2B = new LaneGrouping_1.default(col2, "B");
    var col2C = new LaneGrouping_1.default(col2, "C");
    var col3A = new LaneGrouping_1.default(col3, "A");
    var col3B = new LaneGrouping_1.default(col3, "B");
    var col3C = new LaneGrouping_1.default(col3, "C");
    var col4A = new LaneGrouping_1.default(col4, "A");
    var col4B = new LaneGrouping_1.default(col4, "B");
    var col4C = new LaneGrouping_1.default(col4, "C");
    var col5A = new LaneGrouping_1.default(col5, "A");
    var col5B = new LaneGrouping_1.default(col5, "B");
    var col5C = new LaneGrouping_1.default(col5, "C");
    var col6A = new LaneGrouping_1.default(col6, "A");
    var col6B = new LaneGrouping_1.default(col6, "B");
    var col6C = new LaneGrouping_1.default(col6, "C");
    var col7A = new LaneGrouping_1.default(col7, "A");
    var col7B = new LaneGrouping_1.default(col7, "B");
    var col7C = new LaneGrouping_1.default(col7, "C");
    var col8A = new LaneGrouping_1.default(col8, "A");
    var col8B = new LaneGrouping_1.default(col8, "B");
    var col8C = new LaneGrouping_1.default(col8, "C");
    var rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8];
    var cols = [col0, col1, col2, col3, col4, col5, col6, col7, col8];
    var boxs = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
    var groupingTypes = [rows, cols, boxs];
    var laneRelations = {
        'row0': [row0A, row0B, row0C],
        'row1': [row1A, row1B, row1C],
        'row2': [row2A, row2B, row2C],
        'row3': [row3A, row3B, row3C],
        'row4': [row4A, row4B, row4C],
        'row5': [row5A, row5B, row5C],
        'row6': [row6A, row6B, row6C],
        'row7': [row7A, row7B, row7C],
        'row8': [row8A, row8B, row8C],
        'col0': [col0A, col0B, col0C],
        'col1': [col1A, col1B, col1C],
        'col2': [col2A, col2B, col2C],
        'col3': [col3A, col3B, col3C],
        'col4': [col4A, col4B, col4C],
        'col5': [col5A, col5B, col5C],
        'col6': [col6A, col6B, col6C],
        'col7': [col7A, col7B, col7C],
        'col8': [col8A, col8B, col8C],
    };
    var coorRelations = {
        '0,0': [row0, col0, box0],
        '0,1': [row0, col1, box0],
        '0,2': [row0, col2, box0],
        '0,3': [row0, col3, box1],
        '0,4': [row0, col4, box1],
        '0,5': [row0, col5, box1],
        '0,6': [row0, col6, box2],
        '0,7': [row0, col7, box2],
        '0,8': [row0, col8, box2],
        '1,0': [row1, col0, box0],
        '1,1': [row1, col1, box0],
        '1,2': [row1, col2, box0],
        '1,3': [row1, col3, box1],
        '1,4': [row1, col4, box1],
        '1,5': [row1, col5, box1],
        '1,6': [row1, col6, box2],
        '1,7': [row1, col7, box2],
        '1,8': [row1, col8, box2],
        '2,0': [row2, col0, box0],
        '2,1': [row2, col1, box0],
        '2,2': [row2, col2, box0],
        '2,3': [row2, col3, box1],
        '2,4': [row2, col4, box1],
        '2,5': [row2, col5, box1],
        '2,6': [row2, col6, box2],
        '2,7': [row2, col7, box2],
        '2,8': [row2, col8, box2],
        '3,0': [row3, col0, box3],
        '3,1': [row3, col1, box3],
        '3,2': [row3, col2, box3],
        '3,3': [row3, col3, box4],
        '3,4': [row3, col4, box4],
        '3,5': [row3, col5, box4],
        '3,6': [row3, col6, box5],
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
    // for(let groupingType of groupingTypes) {
    //     for(let grouping of groupingType) {
    //         let numNeeded = grouping.numbersNeeded
    //         for (let num of numNeeded) {
    //             checkGroupingForNumber(row0, num)
    //         }
    //     }
    // }
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
    //check is grid finished
    //check is grid stuck
    // function gridAndPop(coor: String, number: number) {
    //     let row = parseInt(coor.split(",")[0])
    //     let col = parseInt(coor.split(",")[1])
    //      selectedGrid[row][col] = number
    //      for(let relation of coorRelations[`${coor}`]) {
    //         relation.spaceCoorAvail.pop(relation.spaceCoorAvail.getIndex(coor))
    //         relation.numbersNeeded.pop(relation.numbersNeeded.getIndex(number))
    //     }
    // }
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
    function adjustRelations(relationList, number, bingoCoor) {
        for (var _i = 0, relationList_1 = relationList; _i < relationList_1.length; _i++) {
            var relation = relationList_1[_i];
            relation.numbersFulfilled.push(number);
            relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number);
            relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor);
        }
    }
    //take number, check all spaces in that row
    function checkGroupingForNumber(grouping, number) {
        console.log("checking ".concat(grouping.name, " for ").concat(number));
        for (var _i = 0, _a = grouping.spaceCoorAvail; _i < _a.length; _i++) {
            var space = _a[_i];
            checkSpaceForNumber(space, number);
        }
        console.log("spaceIsAvailableForNumberBooleanList", spaceIsAvailbleForNumberBooleansList);
        console.log("spaceIsAvailForNumberBooleanListDISTINCT", getDistincts(spaceIsAvailbleForNumberBooleansList));
        if (getDistincts(spaceIsAvailbleForNumberBooleansList).length == 1) {
            //fill space with that number, yay!
            bingoFoundForFullScan = true;
            var bingoCoor = spaceIsAvailbleForNumberBooleansList[0];
            fulfillGridWithBingoCoor(bingoCoor, number);
            console.log("fullScan technique: ".concat(grouping.name, " fulfills space: ").concat(bingoCoor, " with number: ").concat(number));
            // console.log(grid)
            var relationList = coorRelations["".concat(bingoCoor)];
            adjustRelations(relationList, number, bingoCoor);
            // for(let relation of relationList) {
            //     relation.numbersFulfilled.push(number)
            //     relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)
            //     relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
            // }
            spaceIsAvailbleForNumberBooleansList = [];
        }
        else {
            console.log("".concat(grouping.name, ", is inconclusive for number: ").concat(number));
            spaceIsAvailbleForNumberBooleansList = [];
        }
        // CHECK IF NUM CAN BE ADDED TO A LANE
        if (grouping.groupingType == "box" && (spaceIsAvailbleForNumberBooleansList.length == 2 || spaceIsAvailbleForNumberBooleansList.length == 3)) {
            //get lane for those two coor
            //if all coors have same row (first digit) then get all lanes of type row
            //find lane of type row that has those coor
            // ELSE IF all coors have same col (second digit) then get all lanes of type col
            //(can also filter by lane type A, B, or C)
            //put number in that lane.numsInLane
            console.log("POSSIBLE LANE PLACEMENT");
        }
    }
    function checkSpaceForNumber(coor, number) {
        // console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
        // console.log(`checking coor: ${coor} for number: ${number}`)
        var relationList = coorRelations["".concat(coor)];
        //-----
        // Gathering lanes to check
        //lane cannot include current coor
        // let laneList: LaneGrouping[] = []
        // for (let relation of relationList) {
        //     for(let lane of laneRelations[`${relation.name}`]) {
        //         if (!lane.spaceCoor.includes(`${coor}`)) {
        //             laneList.push(lane)
        //         }
        //     }
        // }
        //-----
        // console.log(relationList)
        var canPushCoor = true;
        for (var _i = 0, relationList_2 = relationList; _i < relationList_2.length; _i++) {
            var relation = relationList_2[_i];
            if (relation.numbersFulfilled.includes(number)) {
                canPushCoor = false;
            }
        }
        //--------
        //Check lanes
        // for (let lane of laneList) {
        //     if (lane.numsInLane.includes(number)) {
        //         canPushCoor = false
        //     }
        // }
        //--------
        if (canPushCoor) {
            spaceIsAvailbleForNumberBooleansList.push(coor);
            // console.log("pushed", coor)
        }
        return;
    }
    // console.log(grid)
    // let numNeeded = row0.numbersNeeded
    // // console.log(numNeeded)
    // // console.log(spaceCoorAvail)
    // for (let num of numNeeded) {
    //     checkGroupingForNumber(row0, num)
    // }
    // numNeeded = row0.numbersNeeded
    // for (let num of numNeeded) {
    //     checkGroupingForNumber(row0, num)
    // }
    var gridLock = false;
    var bingoFoundForFullScan = false;
    var bingoFoundForEightOfNine = false;
    function checkEightOfNine() {
        bingoFoundForEightOfNine = false;
        for (var _i = 0, groupingTypes_1 = groupingTypes; _i < groupingTypes_1.length; _i++) {
            var groupingType = groupingTypes_1[_i];
            for (var _a = 0, groupingType_1 = groupingType; _a < groupingType_1.length; _a++) {
                var grouping = groupingType_1[_a];
                if (grouping.spaceCoorAvail.length == 1 && grouping.numbersNeeded.length == 1) {
                    var bingoCoor = grouping.spaceCoorAvail[0];
                    var relationList = coorRelations["".concat(bingoCoor)];
                    var number = grouping.numbersNeeded[0];
                    adjustRelations(relationList, number, bingoCoor);
                    fulfillGridWithBingoCoor(bingoCoor, number);
                    console.log("eightOfNine technique: ".concat(grouping.name, " fulfills space: ").concat(bingoCoor, " with number: ").concat(number));
                    bingoFoundForEightOfNine = true;
                }
            }
        }
        // shouldReRun()
    }
    function fulfillGridWithBingoCoor(bingoCoor, number) {
        var coordinateA = parseInt(bingoCoor.split(",")[0]);
        var coordinateB = parseInt(bingoCoor.split(",")[1]);
        selectedGrid[coordinateA][coordinateB] = number;
    }
    // function checkEightOutOfNddine(grouping: GridGrouping) {
    //     if (grouping.spaceCoor.length == 1 && grouping.numbersNeeded.length == 1) {
    //         adjustRelations
    //         gridAndPop(grouping.spaceCoor[0], grouping.numbersNeeded[0])
    //    }
    //    return
    // }
    function fullScan() {
        bingoFoundForFullScan = false;
        for (var _i = 0, groupingTypes_2 = groupingTypes; _i < groupingTypes_2.length; _i++) {
            var groupingType = groupingTypes_2[_i];
            for (var _a = 0, groupingType_2 = groupingType; _a < groupingType_2.length; _a++) {
                var grouping = groupingType_2[_a];
                var numNeeded = grouping.numbersNeeded;
                for (var _b = 0, numNeeded_1 = numNeeded; _b < numNeeded_1.length; _b++) {
                    var num = numNeeded_1[_b];
                    checkGroupingForNumber(grouping, num);
                }
            }
        }
        // shouldReRun()
    }
    // function shouldReRun() {
    //     if (bingoFoundForFullScan) {
    //         console.log("RERUN STARTED")
    //         fullScan()
    //     } else {
    //         gridLock = true
    //         console.log("gridlock")
    //     }
    // }
    // console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
    console.log("grid", selectedGrid);
    fullScan();
    console.log("grid", selectedGrid);
    checkEightOfNine();
    console.log("grid", selectedGrid);
    // checkSpaceForNumber("0", 1)
    // checkGroupingForNumber(row0, 1)
    // console.log(grid2)
    function fascilitate() {
        while (!gridLock) {
            // do {
            fullScan();
            // }
            // while(bingoFoundForFullScan)
            if (!bingoFoundForFullScan) {
                checkEightOfNine();
                if (bingoFoundForEightOfNine) {
                    fullScan();
                }
                else {
                    gridLock = true;
                    console.log("GRIDLOCK");
                    return;
                }
            }
            // do {
            //     checkEightOfNine()
            // } while(bingoFoundForEightOfNine)
            // if(!bingoFoundForFullScan && !bingoFoundForEightOfNine) {
            //     gridLock = true
            //     console.log("GRIDLOCK")
            //     return
            // }
        }
    }
    // fascilitate()
}
beginGame(otherGrid);
//run full scan
//if number found, run full scan again
//if  no numbers found, run checkEightOfNine
//if number found, run full scan
//if no number found, gridlock
// Can only add to lanes when checking boxes...I think
// Case for a lane spanding two boxes??
//What's with the spaceIsAbvailableForNumberBooleanListDISTINCT....why distinct?
