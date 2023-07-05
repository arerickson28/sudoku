
import GridGrouping from "./GridGrouping"

let grid: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
]


let grid2: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]


let testGrid = [
    0, 2, 3, 4, 5, 6, 7, 8, 9,
    4, 5, 6, 0, 0, 0, 0, 0, 0,
    7, 8, 9, 0, 0, 0, 0, 0, 0,
    2, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 0, 0, 0, 0, 0, 0, 0, 0,
    6, 0, 0, 0, 0, 0, 0, 0, 0,
    8, 0, 0, 0, 0, 0, 0, 0, 0,
    9, 0, 0, 0, 0, 0, 0, 0, 0,
]

let testGrid2 = [
    [0, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
]

// let row0 = new GridGrouping(0, "row", testGrid2)
// let col0 = new GridGrouping(1, "col", testGrid2)
// let box0 = new GridGrouping(0, "box", testGrid2)

// console.log(row0)
// console.log(col0)
// console.log(box0)
// console.log("hi")

// function getGridRows(grid) {
//     for(let i=0; i<=9; i++) {
        
//     }

// }



// let row0A = new GridGrouping("row0", grid[0], getNumbersNeeded(grid2[0]), getNumbersFulfilled(grid2[0]))
// let row1B = new GridGrouping("row1", grid[1], getNumbersNeeded(grid2[1]), getNumbersFulfilled(grid2[1]))

// let col0A = new GridGrouping("row0", getCol(1, grid))

let groupingExample = {
    "space": "number"
}

let row0AA = {
    "name": "row0",
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
}

let row0 = {
    "name": "row0",
    "spaces": [0, 1, 2, 3, 4, 5, 6, 7, 8],
    "spacesAvailable": [0, 1, 2, 3, 4, 5, 6, 7, 8],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row1 = {
    "name": "row1",
    "spaces": [9, 10, 11, 12, 13, 14, 15, 16, 17],
    "spacesAvailable": [9, 10, 11, 12, 13, 14, 15, 16, 17],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row2 = {
    "name": "row2",
    "spaces": [18, 19, 20, 21, 22, 23, 24, 25, 26],
    "spacesAvailable": [18, 19, 20, 21, 22, 23, 24, 25, 26],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row3 = {
    "spaces": [27, 28, 29, 30, 31, 32, 33, 34, 35],
    "spacesAvailable": [27, 28, 29, 30, 31, 32, 33, 34, 35],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row4 = {
    "spaces": [36, 37, 38, 39, 40, 41, 42, 43, 44],
    "spacesAvailable": [36, 37, 38, 39, 40, 41, 42, 43, 44],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row5 = {
    "spaces": [45, 46, 47, 48, 49, 50, 51, 52, 53],
    "spacesAvailable": [45, 46, 47, 48, 49, 50, 51, 52, 53],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let row6 = {
    "spaces": [54, 55, 56, 57, 58, 59, 60, 61, 62],
    "spacesAvailable": [54, 55, 56, 57, 58, 59, 60, 61, 62],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}

let row7 = {
    "spaces": [63, 64, 65, 66, 67, 68, 69, 70, 71],
    "spacesAvailable": [63, 64, 65, 66, 67, 68, 69, 70, 71],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}

let row8 = {
    "spaces": [72, 73, 74, 75, 76, 77, 78, 79, 80],
    "spacesAvailable": [72, 73, 74, 75, 76, 77, 78, 79, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}


let col0 = {
    "spaces": [0, 9, 18, 27, 36, 45, 54, 63, 72],
    "spacesAvailable": [0, 9, 18, 27, 36, 45, 54, 63, 72],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col1 = {
    "spaces": [1, 10, 19, 28, 37, 46, 55, 64, 73],
    "spacesAvailable": [1, 10, 19, 28, 37, 46, 55, 64, 73],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col2 = {
    "numbers": [2, 11, 20, 29, 38, 47, 56, 65, 74],
    "spacesAvailable": [2, 11, 20, 29, 38, 47, 56, 65, 74],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col3 = {
    "numbers": [3, 12, 21, 30, 39, 48, 57, 66, 75],
    "spacesAvailable": [3, 12, 21, 30, 39, 48, 57, 66, 75],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col4 = {
    "numbers": [4, 13, 22, 31, 40, 49, 58, 67, 76],
    "spacesAvailable": [4, 13, 22, 31, 40, 49, 58, 67, 76],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col5 = {
    "numbers": [5, 14, 23, 32, 41, 50, 59, 68, 77],
    "spacesAvailable": [5, 14, 23, 32, 41, 50, 59, 68, 77],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col6 = {
    "numbers": [6, 15, 24, 33, 42, 51, 60, 69, 78],
    "spacesAvailable": [6, 15, 24, 33, 42, 51, 60, 69, 78],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col7 = {
    "numbers": [7, 16, 25, 34, 43, 52, 61, 70, 79],
    "spacesAvailable": [7, 16, 25, 34, 43, 52, 61, 70, 79],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let col8 = {
    "numbers": [8, 17, 26, 35, 44, 53, 62, 71, 80],
    "spacesAvailable": [8, 17, 26, 35, 44, 53, 62, 71, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}

let box0 = {
    "numbers": [0, 1, 2, 9, 10, 11, 18, 19, 20],
    "spacesAvailable": [0, 1, 2, 9, 10, 11, 18, 19, 20],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box1 = {
    "numbers": [3, 4, 5, 12, 13, 14, 21, 22, 23],
    "spacesAvailable": [3, 4, 5, 12, 13, 14, 21, 22, 23],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box2 = {
    "numbers": [6, 7, 8, 15, 16, 17, 24, 25, 26],
    "spacesAvailable": [6, 7, 8, 15, 16, 17, 24, 25, 26],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box3 = {
    "spaces": [27, 28, 29, 36, 37, 38, 45, 46, 47],
    "spacesAvailable": [27, 28, 29, 36, 37, 38, 45, 46, 47],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box4 = {
    "spaces": [30, 31, 32, 39, 40, 41, 48, 49, 50],
    "spacesAvailable": [30, 31, 32, 39, 40, 41, 48, 49, 50],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box5 = {
    "spaces": [33, 34, 35, 42, 43, 44, 51, 52, 53],
    "spacesAvailable": [33, 34, 35, 42, 43, 44, 51, 52, 53],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box6 = {
    "spaces": [54, 55, 56,63, 64, 65, 72, 73, 74],
    "spacesAvailable": [54, 55, 56,63, 64, 65, 72, 73, 74],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box7 = {
    "spaces": [57, 58, 59, 66, 67, 68, 75, 76, 77],
    "spacesAvailable": [57, 58, 59, 66, 67, 68, 75, 76, 77],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}
let box8 = {
    "spaces": [60, 61, 62, 69, 70, 71, 78, 79, 80],
    "spacesAvailable": [60, 61, 62, 69, 70, 71, 78, 79, 80],
    "numbersNeeded": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "numbersFulfilled": []
}

const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8]
const cols = [col0, col1, col2, col3, col4, col5, col6, col7, col8]
const box4s = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

const indexRelations = {
    "0": [row0, col0, box0],
    "1": [row0, col1, box0],
    "2": [row0, col2, box0],
    "3": [row0, col3, box1],
    "4": [row0, col4, box1],
    "5": [row0, col5, box1],
    "6": [row0, col6, box2],
    "7": [row0, col7, box2],
    "8": [row0, col8, box2],
    "9": [row1, col0, box0],
    "10":[row1, col1, box0],
    "11":[row1, col2, box0],
    "12":[row1, col3, box1],
    "13":[row1, col4, box1],
    "14":[row1, col5, box1],
    "15":[row1, col6, box2],
    "16":[row1, col7, box2],
    "17":[row1, col8, box2],
    "18":[row2, col0, box0],
    "19":[row2, col1, box0],
    "20":[row2, col2, box0],
    "21":[row2, col3, box1],
    "22":[row2, col4, box1],
    "23":[row2, col5, box1],
    "24":[row2, col6, box2],
    "25":[row2, col7, box2],
    "26":[row2, col8, box2],
    "27":[row3, col0, box3],
    "28":[row3, col1, box3],
    "29":[row3, col2, box3],
    "30":[row3, col3, box4],
    "31":[row3, col4, box4],
    "32":[row3, col5, box4],
    "33":[row3, col6, box5],
    "34":[row3, col7, box5],
    "35":[row3, col8, box5],
    "36":[row4, col0, box3],
    "37":[row4, col1, box3],
    "38":[row4, col2, box3],
    "39":[row4, col3, box4],
    "40":[row4, col4, box4],
    "41":[row4, col5, box4],
    "42":[row4, col6, box5],
    "43":[row4, col7, box5],
    "44":[row4, col8, box5],
    "45":[row5, col0, box3],
    "46":[row5, col1, box3],
    "47":[row5, col2, box3],
    "48":[row5, col3, box4],
    "49":[row5, col4, box4],
    "50":[row5, col5, box4],
    "51":[row5, col6, box5],
    "52":[row5, col7, box5],
    "53":[row5, col8, box5],
    "54":[row6, col0, box6],
    "55":[row6, col1, box6],
    "56":[row6, col2, box6],
    "57":[row6, col3, box7],
    "58":[row6, col4, box7],
    "59":[row6, col5, box7],
    "60":[row6, col6, box8],
    "61":[row6, col7, box8],
    "62":[row6, col8, box8],
    "63":[row7, col0, box6],
    "64":[row7, col1, box6],
    "65":[row7, col2, box6],
    "66":[row7, col3, box7],
    "67":[row7, col4, box7],
    "68":[row7, col5, box7],
    "69":[row7, col6, box8],
    "70":[row7, col7, box8],
    "71":[row7, col8, box8],
    "72":[row8, col0, box6],
    "73":[row8, col1, box6],
    "74":[row8, col2, box6],
    "75":[row8, col3, box7],
    "76":[row8, col4, box7],
    "77":[row8, col5, box7],
    "78":[row8, col6, box8],
    "79":[row8, col7, box8],
    "80":[row8, col8, box8]
}


const coordinateRelations = {
    "0": [row0, col0, box0],
    "1": [row0, col1, box0],
    "2": [row0, col2, box0],
    "3": [row0, col3, box1],
    "4": [row0, col4, box1],
    "5": [row0, col5, box1],
    "6": [row0, col6, box2],
    "7": [row0, col7, box2],
    "8": [row0, col8, box2],
    "9": [row1, col0, box0],
    "10":[row1, col1, box0],
    "11":[row1, col2, box0],
    "12":[row1, col3, box1],
    "13":[row1, col4, box1],
    "14":[row1, col5, box1],
    "15":[row1, col6, box2],
    "16":[row1, col7, box2],
    "17":[row1, col8, box2],
    "18":[row2, col0, box0],
    "19":[row2, col1, box0],
    "20":[row2, col2, box0],
    "21":[row2, col3, box1],
    "22":[row2, col4, box1],
    "23":[row2, col5, box1],
    "24":[row2, col6, box2],
    "25":[row2, col7, box2],
    "26":[row2, col8, box2],
    "27":[row3, col0, box3],
    "28":[row3, col1, box3],
    "29":[row3, col2, box3],
    "30":[row3, col3, box4],
    "31":[row3, col4, box4],
    "32":[row3, col5, box4],
    "33":[row3, col6, box5],
    "34":[row3, col7, box5],
    "35":[row3, col8, box5],
    "36":[row4, col0, box3],
    "37":[row4, col1, box3],
    "38":[row4, col2, box3],
    "39":[row4, col3, box4],
    "40":[row4, col4, box4],
    "41":[row4, col5, box4],
    "42":[row4, col6, box5],
    "43":[row4, col7, box5],
    "44":[row4, col8, box5],
    "45":[row5, col0, box3],
    "46":[row5, col1, box3],
    "47":[row5, col2, box3],
    "48":[row5, col3, box4],
    "49":[row5, col4, box4],
    "50":[row5, col5, box4],
    "51":[row5, col6, box5],
    "52":[row5, col7, box5],
    "53":[row5, col8, box5],
    "54":[row6, col0, box6],
    "55":[row6, col1, box6],
    "56":[row6, col2, box6],
    "57":[row6, col3, box7],
    "58":[row6, col4, box7],
    "59":[row6, col5, box7],
    "60":[row6, col6, box8],
    "61":[row6, col7, box8],
    "62":[row6, col8, box8],
    "63":[row7, col0, box6],
    "64":[row7, col1, box6],
    "65":[row7, col2, box6],
    "66":[row7, col3, box7],
    "67":[row7, col4, box7],
    "68":[row7, col5, box7],
    "69":[row7, col6, box8],
    "70":[row7, col7, box8],
    "71":[row7, col8, box8],
    "72":[row8, col0, box6],
    "73":[row8, col1, box6],
    "74":[row8, col2, box6],
    "75":[row8, col3, box7],
    "76":[row8, col4, box7],
    "77":[row8, col5, box7],
    "78":[row8, col6, box8],
    "79":[row8, col7, box8],
    "80":[row8, col8, box8]
}

let experimentCoorRelations = {}
for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++)
    experimentCoorRelations[`${i},${j}`] = []
}

console.log("experimentCoorRelations", experimentCoorRelations)

for(let i=0; i<81; i++) {

}




let coorRelations =  {
    '0,0': [],
    '0,1': [],
    '0,2': [],
    '0,3': [],
    '0,4': [],
    '0,5': [],
    '0,6': [],
    '0,7': [],
    '0,8': [],
    '1,0': [],
    '1,1': [],
    '1,2': [],
    '1,3': [],
    '1,4': [],
    '1,5': [],
    '1,6': [],
    '1,7': [],
    '1,8': [],
    '2,0': [],
    '2,1': [],
    '2,2': [],
    '2,3': [],
    '2,4': [],
    '2,5': [],
    '2,6': [],
    '2,7': [],
    '2,8': [],
    '3,0': [],
    '3,1': [],
    '3,2': [],
    '3,3': [],
    '3,4': [],
    '3,5': [],
    '3,6': [],
    '3,7': [],
    '3,8': [],
    '4,0': [],
    '4,1': [],
    '4,2': [],
    '4,3': [],
    '4,4': [],
    '4,5': [],
    '4,6': [],
    '4,7': [],
    '4,8': [],
    '5,0': [],
    '5,1': [],
    '5,2': [],
    '5,3': [],
    '5,4': [],
    '5,5': [],
    '5,6': [],
    '5,7': [],
    '5,8': [],
    '6,0': [],
    '6,1': [],
    '6,2': [],
    '6,3': [],
    '6,4': [],
    '6,5': [],
    '6,6': [],
    '6,7': [],
    '6,8': [],
    '7,0': [],
    '7,1': [],
    '7,2': [],
    '7,3': [],
    '7,4': [],
    '7,5': [],
    '7,6': [],
    '7,7': [],
    '7,8': [],
    '8,0': [],
    '8,1': [],
    '8,2': [],
    '8,3': [],
    '8,4': [],
    '8,5': [],
    '8,6': [],
    '8,7': [],
    '8,8': []
  }

  for(let coor of Object.keys(coorRelations)) {
    let rowNum = coor.split(",")[0]
    coorRelations[coor].push(`row${rowNum}`)
  }

  console.log(coorRelations)

// call row, columns, and box4s "indicie groupings"

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




let spaceIsAvailbleForNumberBooleansList = []

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

// checkGroupingForNumber(row0, 1)
// console.log(grid2)

