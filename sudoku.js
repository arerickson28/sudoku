"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridGrouping_1 = require("./GridGrouping");
var Sudoku = /** @class */ (function () {
    function Sudoku(selectedGrid) {
        this.spaceIsAvailbleForNumberBooleansList = [];
        this.gridLock = false;
        this.bingoFoundForFullScan = false;
        this.bingoFoundForEightOfNine = false;
        this.row0 = new GridGrouping_1.default(0, "row", selectedGrid);
        this.row1 = new GridGrouping_1.default(1, "row", selectedGrid);
        this.row2 = new GridGrouping_1.default(2, "row", selectedGrid);
        this.row3 = new GridGrouping_1.default(3, "row", selectedGrid);
        this.row4 = new GridGrouping_1.default(4, "row", selectedGrid);
        this.row5 = new GridGrouping_1.default(5, "row", selectedGrid);
        this.row6 = new GridGrouping_1.default(6, "row", selectedGrid);
        this.row7 = new GridGrouping_1.default(7, "row", selectedGrid);
        this.row8 = new GridGrouping_1.default(8, "row", selectedGrid);
        this.col0 = new GridGrouping_1.default(0, "col", selectedGrid);
        this.col1 = new GridGrouping_1.default(1, "col", selectedGrid);
        this.col2 = new GridGrouping_1.default(2, "col", selectedGrid);
        this.col3 = new GridGrouping_1.default(3, "col", selectedGrid);
        this.col4 = new GridGrouping_1.default(4, "col", selectedGrid);
        this.col5 = new GridGrouping_1.default(5, "col", selectedGrid);
        this.col6 = new GridGrouping_1.default(6, "col", selectedGrid);
        this.col7 = new GridGrouping_1.default(7, "col", selectedGrid);
        this.col8 = new GridGrouping_1.default(8, "col", selectedGrid);
        this.box0 = new GridGrouping_1.default(0, "box", selectedGrid);
        this.box1 = new GridGrouping_1.default(1, "box", selectedGrid);
        this.box2 = new GridGrouping_1.default(2, "box", selectedGrid);
        this.box3 = new GridGrouping_1.default(3, "box", selectedGrid);
        this.box4 = new GridGrouping_1.default(4, "box", selectedGrid);
        this.box5 = new GridGrouping_1.default(5, "box", selectedGrid);
        this.box6 = new GridGrouping_1.default(6, "box", selectedGrid);
        this.box7 = new GridGrouping_1.default(7, "box", selectedGrid);
        this.box8 = new GridGrouping_1.default(8, "box", selectedGrid);
        this.rows = [this.row0, this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7, this.row8];
        this.cols = [this.col0, this.col1, this.col2, this.col3, this.col4, this.col5, this.col6, this.col7, this.col8];
        this.boxs = [this.box0, this.box1, this.box2, this.box3, this.box4, this.box5, this.box6, this.box7, this.box8];
        this.groupingTypes = [this.rows, this.cols, this.boxs];
        this.coorRelations = {
            '0,0': [this.row0, this.col0, this.box0],
            '0,1': [this.row0, this.col1, this.box0],
            '0,2': [this.row0, this.col2, this.box0],
            '0,3': [this.row0, this.col3, this.box1],
            '0,4': [this.row0, this.col4, this.box1],
            '0,5': [this.row0, this.col5, this.box1],
            '0,6': [this.row0, this.col6, this.box2],
            '0,7': [this.row0, this.col7, this.box2],
            '0,8': [this.row0, this.col8, this.box2],
            '1,0': [this.row1, this.col0, this.box0],
            '1,1': [this.row1, this.col1, this.box0],
            '1,2': [this.row1, this.col2, this.box0],
            '1,3': [this.row1, this.col3, this.box1],
            '1,4': [this.row1, this.col4, this.box1],
            '1,5': [this.row1, this.col5, this.box1],
            '1,6': [this.row1, this.col6, this.box2],
            '1,7': [this.row1, this.col7, this.box2],
            '1,8': [this.row1, this.col8, this.box2],
            '2,0': [this.row2, this.col0, this.box0],
            '2,1': [this.row2, this.col1, this.box0],
            '2,2': [this.row2, this.col2, this.box0],
            '2,3': [this.row2, this.col3, this.box1],
            '2,4': [this.row2, this.col4, this.box1],
            '2,5': [this.row2, this.col5, this.box1],
            '2,6': [this.row2, this.col6, this.box2],
            '2,7': [this.row2, this.col7, this.box2],
            '2,8': [this.row2, this.col8, this.box2],
            '3,0': [this.row3, this.col0, this.box3],
            '3,1': [this.row3, this.col1, this.box3],
            '3,2': [this.row3, this.col2, this.box3],
            '3,3': [this.row3, this.col3, this.box4],
            '3,4': [this.row3, this.col4, this.box4],
            '3,5': [this.row3, this.col5, this.box4],
            '3,6': [this.row3, this.col6, this.box5],
            '3,7': [this.row3, this.col7, this.box5],
            '3,8': [this.row3, this.col8, this.box5],
            '4,0': [this.row4, this.col0, this.box3],
            '4,1': [this.row4, this.col1, this.box3],
            '4,2': [this.row4, this.col2, this.box3],
            '4,3': [this.row4, this.col3, this.box4],
            '4,4': [this.row4, this.col4, this.box4],
            '4,5': [this.row4, this.col5, this.box4],
            '4,6': [this.row4, this.col6, this.box5],
            '4,7': [this.row4, this.col7, this.box5],
            '4,8': [this.row4, this.col8, this.box5],
            '5,0': [this.row5, this.col0, this.box3],
            '5,1': [this.row5, this.col1, this.box3],
            '5,2': [this.row5, this.col2, this.box3],
            '5,3': [this.row5, this.col3, this.box4],
            '5,4': [this.row5, this.col4, this.box4],
            '5,5': [this.row5, this.col5, this.box4],
            '5,6': [this.row5, this.col6, this.box5],
            '5,7': [this.row5, this.col7, this.box5],
            '5,8': [this.row5, this.col8, this.box5],
            '6,0': [this.row6, this.col0, this.box6],
            '6,1': [this.row6, this.col1, this.box6],
            '6,2': [this.row6, this.col2, this.box6],
            '6,3': [this.row6, this.col3, this.box7],
            '6,4': [this.row6, this.col4, this.box7],
            '6,5': [this.row6, this.col5, this.box7],
            '6,6': [this.row6, this.col6, this.box8],
            '6,7': [this.row6, this.col7, this.box8],
            '6,8': [this.row6, this.col8, this.box8],
            '7,0': [this.row7, this.col0, this.box6],
            '7,1': [this.row7, this.col1, this.box6],
            '7,2': [this.row7, this.col2, this.box6],
            '7,3': [this.row7, this.col3, this.box7],
            '7,4': [this.row7, this.col4, this.box7],
            '7,5': [this.row7, this.col5, this.box7],
            '7,6': [this.row7, this.col6, this.box8],
            '7,7': [this.row7, this.col7, this.box8],
            '7,8': [this.row7, this.col8, this.box8],
            '8,0': [this.row8, this.col0, this.box6],
            '8,1': [this.row8, this.col1, this.box6],
            '8,2': [this.row8, this.col2, this.box6],
            '8,3': [this.row8, this.col3, this.box7],
            '8,4': [this.row8, this.col4, this.box7],
            '8,5': [this.row8, this.col5, this.box7],
            '8,6': [this.row8, this.col6, this.box8],
            '8,7': [this.row8, this.col7, this.box8],
            '8,8': [this.row8, this.col8, this.box8]
        };
        this.rawGrid = selectedGrid;
    }
    return Sudoku;
}());
exports.default = Sudoku;
