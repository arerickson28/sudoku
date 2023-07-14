"use strict";
// class GridGrouping {
//     constructor(name, spaces, spacesAvailable, numbersNeeded, numbersFulfilled) {
//         this.name = name
//         this.spaces = spaces
//         this.spacesAvailable = spacesAvailable
//         this.numbersNeeded = numbersNeeded
//         this.numbersFulfilled = numbersFulfilled
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// import { group } from "console";
var GridGrouping = /** @class */ (function () {
    function GridGrouping(groupingNum, groupingType, grid) {
        this.name = groupingType + groupingNum;
        this.spaceCoor = this.getSpaces("coor", groupingNum, groupingType, grid);
        this.spaceCoorAvail = this.getSpaceCoorAvail(this.spaceCoor, grid);
        this.spaceValues = this.getSpaces("values", groupingNum, groupingType, grid);
        this.numbersNeeded = this.getNumbersNeeded(this.spaceValues);
        this.numbersFulfilled = this.getNumbersFulfilled(this.spaceValues);
    }
    GridGrouping.prototype.getSpaces = function (valuesOrCoor, groupingNum, groupingType, grid) {
        switch (groupingType) {
            case "row":
                return this.getRowSpaces(valuesOrCoor, groupingNum, grid);
            case "col":
                return this.getColSpaces(valuesOrCoor, groupingNum, grid);
            case "box":
                return this.getBoxSpaces(valuesOrCoor, groupingNum, grid);
            default:
                return [];
        }
        // if(groupingType == "row") {
        //     return grid[groupingNum]
        // } else if (groupingType == "col") {
        //     return getColSpaces(groupingNum, grid)
        // } else if (groupingType == "box") {
        //     return getBoxSpaces(groupingNum, grid)
        // }
    };
    GridGrouping.prototype.getRowSpaces = function (valuesOrCoor, groupingNum, grid) {
        switch (valuesOrCoor) {
            case "values":
                return grid[groupingNum];
            case "coor":
                return [
                    "".concat(groupingNum, ",0"),
                    "".concat(groupingNum, ",1"),
                    "".concat(groupingNum, ",2"),
                    "".concat(groupingNum, ",3"),
                    "".concat(groupingNum, ",4"),
                    "".concat(groupingNum, ",5"),
                    "".concat(groupingNum, ",6"),
                    "".concat(groupingNum, ",7"),
                    "".concat(groupingNum, ",8"),
                ];
            default:
                return [];
        }
    };
    GridGrouping.prototype.getColSpaces = function (valuesOrCoor, groupingNum, grid) {
        switch (valuesOrCoor) {
            case "values":
                var spaceValues = [];
                for (var i = 0; i < 9; i++) {
                    spaceValues.push(grid[i][groupingNum]);
                }
                return spaceValues;
            case "coor":
                var spaceCoor = [];
                for (var i = 0; i < 9; i++) {
                    spaceCoor.push("".concat(i, ",").concat(groupingNum));
                }
                return spaceCoor;
            default:
                return [];
        }
    };
    GridGrouping.prototype.getBoxSpaces = function (valuesOrCoor, groupingNum, grid) {
        switch (groupingNum) {
            case 0:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[0][0],
                            grid[0][1],
                            grid[0][2],
                            grid[1][0],
                            grid[1][1],
                            grid[1][2],
                            grid[2][0],
                            grid[2][1],
                            grid[2][2]
                        ];
                    case "coor":
                        return [
                            "0,0",
                            "0,1",
                            "0,2",
                            "1,0",
                            "1,1",
                            "1,2",
                            "2,0",
                            "2,1",
                            "2,2"
                        ];
                    default:
                        return [];
                }
            case 1:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[0][3],
                            grid[0][4],
                            grid[0][5],
                            grid[1][3],
                            grid[1][4],
                            grid[1][5],
                            grid[2][3],
                            grid[2][4],
                            grid[2][5]
                        ];
                    case "coor":
                        return [
                            "0,3",
                            "0,4",
                            "0,5",
                            "1,3",
                            "1,4",
                            "1,5",
                            "2,3",
                            "2,4",
                            "2,5"
                        ];
                    default:
                        return [];
                }
            case 2:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[0][6],
                            grid[0][7],
                            grid[0][8],
                            grid[1][6],
                            grid[1][7],
                            grid[1][8],
                            grid[2][6],
                            grid[2][7],
                            grid[2][8]
                        ];
                    case "coor":
                        return [
                            "0,6",
                            "0,7",
                            "0,8",
                            "1,6",
                            "1,7",
                            "1,8",
                            "2,6",
                            "2,7",
                            "2,8"
                        ];
                    default:
                        return [];
                }
            case 3:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[3][0],
                            grid[3][1],
                            grid[3][2],
                            grid[4][0],
                            grid[4][1],
                            grid[4][2],
                            grid[5][0],
                            grid[5][1],
                            grid[5][2]
                        ];
                    case "coor":
                        return [
                            "3,0",
                            "3,1",
                            "3,2",
                            "4,0",
                            "4,1",
                            "4,2",
                            "5,0",
                            "5,1",
                            "5,2"
                        ];
                    default:
                        return [];
                }
            case 4:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[3][3],
                            grid[3][4],
                            grid[3][5],
                            grid[4][3],
                            grid[4][4],
                            grid[4][5],
                            grid[5][3],
                            grid[5][4],
                            grid[5][5]
                        ];
                    case "coor":
                        return [
                            "3,3",
                            "3,4",
                            "3,5",
                            "4,3",
                            "4,4",
                            "4,5",
                            "5,3",
                            "5,4",
                            "5,5"
                        ];
                    default:
                        return [];
                }
            case 5:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[3][6],
                            grid[3][7],
                            grid[3][8],
                            grid[4][6],
                            grid[4][7],
                            grid[4][8],
                            grid[5][6],
                            grid[5][7],
                            grid[5][8]
                        ];
                    case "coor":
                        return [
                            "3,6",
                            "3,7",
                            "3,8",
                            "4,6",
                            "4,7",
                            "4,8",
                            "5,6",
                            "5,7",
                            "5,8"
                        ];
                    default:
                        return [];
                }
            case 6:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[6][0],
                            grid[6][1],
                            grid[6][2],
                            grid[7][0],
                            grid[7][1],
                            grid[7][2],
                            grid[8][0],
                            grid[8][1],
                            grid[8][2]
                        ];
                    case "coor":
                        return [
                            "6,0",
                            "6,1",
                            "6,2",
                            "7,0",
                            "7,1",
                            "7,2",
                            "8,0",
                            "8,1",
                            "8,2"
                        ];
                    default:
                        return [];
                }
            case 7:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[6][3],
                            grid[6][4],
                            grid[6][5],
                            grid[7][3],
                            grid[7][4],
                            grid[7][5],
                            grid[8][3],
                            grid[8][4],
                            grid[8][5]
                        ];
                    case "coor":
                        return [
                            "6,3",
                            "6,4",
                            "6,5",
                            "7,3",
                            "7,4",
                            "7,5",
                            "8,3",
                            "8,4",
                            "8,5"
                        ];
                    default:
                        return [];
                }
            case 8:
                switch (valuesOrCoor) {
                    case "values":
                        return [
                            grid[6][6],
                            grid[6][7],
                            grid[6][8],
                            grid[7][6],
                            grid[7][7],
                            grid[7][8],
                            grid[8][6],
                            grid[8][7],
                            grid[8][8]
                        ];
                    case "coor":
                        return [
                            "6,6",
                            "6,7",
                            "6,8",
                            "7,6",
                            "7,7",
                            "7,8",
                            "8,6",
                            "8,7",
                            "8,8"
                        ];
                    default:
                        return [];
                }
            default:
                console.log("error");
                return [];
        }
    };
    GridGrouping.prototype.getSpaceCoorAvail = function (spaceCoor, grid) {
        var spaceCoorAvail = [];
        for (var _i = 0, spaceCoor_1 = spaceCoor; _i < spaceCoor_1.length; _i++) {
            var coor = spaceCoor_1[_i];
            var coorA = parseInt(coor.split(",")[0]);
            var coorB = parseInt(coor.split(",")[1]);
            if (grid[coorA][coorB] == 0) {
                spaceCoorAvail.push(coor);
            }
        }
        return spaceCoorAvail;
    };
    GridGrouping.prototype.getNumbersNeeded = function (spaces) {
        var numbersNeeded = [];
        for (var i = 1; i < 10; i++) {
            if (!spaces.includes(i)) {
                numbersNeeded.push(i);
            }
        }
        return numbersNeeded;
    };
    GridGrouping.prototype.getNumbersFulfilled = function (spaces) {
        var numbersFulfilled = [];
        for (var _i = 0, spaces_1 = spaces; _i < spaces_1.length; _i++) {
            var space = spaces_1[_i];
            if (space != 0) {
                numbersFulfilled.push(space);
            }
        }
        return numbersFulfilled;
    };
    return GridGrouping;
}());
exports.default = GridGrouping;
