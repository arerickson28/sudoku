
import { LanguageService, ScriptSnapshot } from "typescript"
import GridGrouping from "./GridGrouping"
import LaneGrouping from "./LaneGrouping"




let testGrid: number[][] = [
    [0, 0, 0, 5, 1, 0, 8, 0, 3],
    [0, 0, 5, 0, 6, 4, 0, 9, 0],
    [9, 0, 0, 7, 0, 2, 0, 0, 6],
    [8, 0, 3, 0, 4, 5, 6, 0, 0],
    [2, 0, 9, 0, 0, 0, 4, 0, 7],
    [0, 0, 4, 6, 2, 0, 9, 0, 8],
    [7, 0, 0, 1, 0, 3, 0, 0, 4],
    [0, 3, 0, 2, 9, 0, 1, 0, 0],
    [1, 0, 2, 0, 7, 8, 0, 0, 0],
]

let grid: number[][] = [
    [0, 0, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
]


let emptyGrid: number[][] = [
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

let easyGrid: number[][] = [
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 8, 0, 0, 0, 7, 0, 9, 0],
    [6, 0, 2, 0, 0, 0, 5, 0, 0],
    [0, 7, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 9, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 4, 0],
    [0, 0, 5, 0, 0, 0, 6, 0, 3],
    [0, 9, 0, 4, 0, 0, 0, 7, 0],
    [0, 0, 6, 0, 0, 0, 0, 0, 0],
]

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

function beginGame(selectedGrid: number[][]) {



let row0 = new GridGrouping(0, "row", selectedGrid)
let row1 = new GridGrouping(1, "row", selectedGrid)
let row2 = new GridGrouping(2, "row", selectedGrid)
let row3 = new GridGrouping(3, "row", selectedGrid)
let row4 = new GridGrouping(4, "row", selectedGrid)
let row5 = new GridGrouping(5, "row", selectedGrid)
let row6 = new GridGrouping(6, "row", selectedGrid)
let row7 = new GridGrouping(7, "row", selectedGrid)
let row8 = new GridGrouping(8, "row", selectedGrid)

let col0 = new GridGrouping(0, "col", selectedGrid)
let col1 = new GridGrouping(1, "col", selectedGrid)
let col2 = new GridGrouping(2, "col", selectedGrid)
let col3 = new GridGrouping(3, "col", selectedGrid)
let col4 = new GridGrouping(4, "col", selectedGrid)
let col5 = new GridGrouping(5, "col", selectedGrid)
let col6 = new GridGrouping(6, "col", selectedGrid)
let col7 = new GridGrouping(7, "col", selectedGrid)
let col8 = new GridGrouping(8, "col", selectedGrid)

let box0 = new GridGrouping(0, "box", selectedGrid)
let box1 = new GridGrouping(1, "box", selectedGrid)
let box2 = new GridGrouping(2, "box", selectedGrid)
let box3 = new GridGrouping(3, "box", selectedGrid)
let box4 = new GridGrouping(4, "box", selectedGrid)
let box5 = new GridGrouping(5, "box", selectedGrid)
let box6 = new GridGrouping(6, "box", selectedGrid)
let box7 = new GridGrouping(7, "box", selectedGrid)
let box8 = new GridGrouping(8, "box", selectedGrid)

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
let row0A = new LaneGrouping(row0, "A")
let row0B = new LaneGrouping(row0, "B")
let row0C = new LaneGrouping(row0, "C")

let row1A = new LaneGrouping(row1, "A")
let row1B = new LaneGrouping(row1, "B")
let row1C = new LaneGrouping(row1, "C")

let row2A = new LaneGrouping(row2, "A")
let row2B = new LaneGrouping(row2, "B")
let row2C = new LaneGrouping(row2, "C")

let row3A = new LaneGrouping(row3, "A")
let row3B = new LaneGrouping(row3, "B")
let row3C = new LaneGrouping(row3, "C")

let row4A = new LaneGrouping(row4, "A")
let row4B = new LaneGrouping(row4, "B")
let row4C = new LaneGrouping(row4, "C")

let row5A = new LaneGrouping(row5, "A")
let row5B = new LaneGrouping(row5, "B")
let row5C = new LaneGrouping(row5, "C")

let row6A = new LaneGrouping(row6, "A")
let row6B = new LaneGrouping(row6, "B")
let row6C = new LaneGrouping(row6, "C")

let row7A = new LaneGrouping(row7, "A")
let row7B = new LaneGrouping(row7, "B")
let row7C = new LaneGrouping(row7, "C")

let row8A = new LaneGrouping(row8, "A")
let row8B = new LaneGrouping(row8, "B")
let row8C = new LaneGrouping(row8, "C")


//col lanes
let col0A = new LaneGrouping(col0, "A")
let col0B = new LaneGrouping(col0, "B")
let col0C = new LaneGrouping(col0, "C")

let col1A = new LaneGrouping(col1, "A")
let col1B = new LaneGrouping(col1, "B")
let col1C = new LaneGrouping(col1, "C")

let col2A = new LaneGrouping(col2, "A")
let col2B = new LaneGrouping(col2, "B")
let col2C = new LaneGrouping(col2, "C")

let col3A = new LaneGrouping(col3, "A")
let col3B = new LaneGrouping(col3, "B")
let col3C = new LaneGrouping(col3, "C")

let col4A = new LaneGrouping(col4, "A")
let col4B = new LaneGrouping(col4, "B")
let col4C = new LaneGrouping(col4, "C")

let col5A = new LaneGrouping(col5, "A")
let col5B = new LaneGrouping(col5, "B")
let col5C = new LaneGrouping(col5, "C")

let col6A = new LaneGrouping(col6, "A")
let col6B = new LaneGrouping(col6, "B")
let col6C = new LaneGrouping(col6, "C")

let col7A = new LaneGrouping(col7, "A")
let col7B = new LaneGrouping(col7, "B")
let col7C = new LaneGrouping(col7, "C")

let col8A = new LaneGrouping(col8, "A")
let col8B = new LaneGrouping(col8, "B")
let col8C = new LaneGrouping(col8, "C")







const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8]
const cols = [col0, col1, col2, col3, col4, col5, col6, col7, col8]
const boxs = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

const groupingTypes: GridGrouping[][] = [rows, cols, boxs]
   

let laneRelations: Object = {
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
}


let coorRelations: Object = {
    '0,0': [ row0, col0, box0 ],
    '0,1': [ row0, col1, box0 ],
    '0,2': [ row0, col2, box0 ],
    '0,3': [ row0, col3, box1 ],
    '0,4': [ row0, col4, box1 ],
    '0,5': [ row0, col5, box1 ],
    '0,6': [ row0, col6, box2 ],
    '0,7': [ row0, col7, box2 ],
    '0,8': [ row0, col8, box2 ],
    '1,0': [ row1, col0, box0 ],
    '1,1': [ row1, col1, box0 ],
    '1,2': [ row1, col2, box0 ],
    '1,3': [ row1, col3, box1 ],
    '1,4': [ row1, col4, box1 ],
    '1,5': [ row1, col5, box1 ],
    '1,6': [ row1, col6, box2 ],
    '1,7': [ row1, col7, box2 ],
    '1,8': [ row1, col8, box2 ],
    '2,0': [ row2, col0, box0 ],
    '2,1': [ row2, col1, box0 ],
    '2,2': [ row2, col2, box0 ],
    '2,3': [ row2, col3, box1 ],
    '2,4': [ row2, col4, box1 ],
    '2,5': [ row2, col5, box1 ],
    '2,6': [ row2, col6, box2 ],
    '2,7': [ row2, col7, box2 ],
    '2,8': [ row2, col8, box2 ],
    '3,0': [ row3, col0, box3 ],
    '3,1': [ row3, col1, box3 ],
    '3,2': [ row3, col2, box3 ],
    '3,3': [ row3, col3, box4 ],
    '3,4': [ row3, col4, box4 ],
    '3,5': [ row3, col5, box4 ],
    '3,6': [ row3, col6, box5 ],
    '3,7': [ row3, col7, box5 ],
    '3,8': [ row3, col8, box5 ],
    '4,0': [ row4, col0, box3 ],
    '4,1': [ row4, col1, box3 ],
    '4,2': [ row4, col2, box3 ],
    '4,3': [ row4, col3, box4 ],
    '4,4': [ row4, col4, box4 ],
    '4,5': [ row4, col5, box4 ],
    '4,6': [ row4, col6, box5 ],
    '4,7': [ row4, col7, box5 ],
    '4,8': [ row4, col8, box5 ],
    '5,0': [ row5, col0, box3 ],
    '5,1': [ row5, col1, box3 ],
    '5,2': [ row5, col2, box3 ],
    '5,3': [ row5, col3, box4 ],
    '5,4': [ row5, col4, box4 ],
    '5,5': [ row5, col5, box4 ],
    '5,6': [ row5, col6, box5 ],
    '5,7': [ row5, col7, box5 ],
    '5,8': [ row5, col8, box5 ],
    '6,0': [ row6, col0, box6 ],
    '6,1': [ row6, col1, box6 ],
    '6,2': [ row6, col2, box6 ],
    '6,3': [ row6, col3, box7 ],
    '6,4': [ row6, col4, box7 ],
    '6,5': [ row6, col5, box7 ],
    '6,6': [ row6, col6, box8 ],
    '6,7': [ row6, col7, box8 ],
    '6,8': [ row6, col8, box8 ],
    '7,0': [ row7, col0, box6 ],
    '7,1': [ row7, col1, box6 ],
    '7,2': [ row7, col2, box6 ],
    '7,3': [ row7, col3, box7 ],
    '7,4': [ row7, col4, box7 ],
    '7,5': [ row7, col5, box7 ],
    '7,6': [ row7, col6, box8 ],
    '7,7': [ row7, col7, box8 ],
    '7,8': [ row7, col8, box8 ],
    '8,0': [ row8, col0, box6 ],
    '8,1': [ row8, col1, box6 ],
    '8,2': [ row8, col2, box6 ],
    '8,3': [ row8, col3, box7 ],
    '8,4': [ row8, col4, box7 ],
    '8,5': [ row8, col5, box7 ],
    '8,6': [ row8, col6, box8 ],
    '8,7': [ row8, col7, box8 ],
    '8,8': [ row8, col8, box8 ]
  }





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


let spaceIsAvailbleForNumberBooleansList: String[] = []
// console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)



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

//take number, check all spaces in that row
function checkGroupingForNumber(grouping: GridGrouping, number: number) {
    console.log(`checking ${grouping.name} for ${number}`)
  
    for(let space of grouping.spaceCoorAvail) {
        checkSpaceForNumber(space, number)
    }

    console.log("spaceIsAvailableForNumberBooleanList", spaceIsAvailbleForNumberBooleansList)
    console.log("spaceIsAvailForNumberBooleanListDISTINCT", getDistincts(spaceIsAvailbleForNumberBooleansList))

    if (getDistincts(spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        bingoFoundForFullScan = true
        const bingoCoor = spaceIsAvailbleForNumberBooleansList[0]

        fulfillGridWithBingoCoor(bingoCoor, number)

        console.log(`fullScan technique: ${grouping.name} fulfills space: ${bingoCoor} with number: ${number}`)
        // console.log(grid)

        const relationList = coorRelations[`${bingoCoor}`]

        adjustRelations(relationList, number, bingoCoor)

        // for(let relation of relationList) {

        //     relation.numbersFulfilled.push(number)

        //     relation.numbersNeeded = numbersNeededArrayExcludingNumber(relation.numbersNeeded, number)

        //     relation.spaceCoorAvail = spaceCoorAvailArrayExcludingBingoCoor(relation.spaceCoorAvail, bingoCoor)
        // }

        spaceIsAvailbleForNumberBooleansList = []
    } else {
        console.log(`${grouping.name}, is inconclusive for number: ${number}`)
        spaceIsAvailbleForNumberBooleansList = []
    }
    
    // CHECK IF NUM CAN BE ADDED TO A LANE
    if (grouping.groupingType == "box" && (spaceIsAvailbleForNumberBooleansList.length == 2 || spaceIsAvailbleForNumberBooleansList.length == 3)) {
        //get lane for those two coor
           //if all coors have same row (first digit) then get all lanes of type row
                //find lane of type row that has those coor
            // ELSE IF all coors have same col (second digit) then get all lanes of type col

        //(can also filter by lane type A, B, or C)

        //put number in that lane.numsInLane
        console.log("POSSIBLE LANE PLACEMENT")
    }
}


function checkSpaceForNumber(coor: String, number: number) {
    // console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)
    // console.log(`checking coor: ${coor} for number: ${number}`)
    const relationList: GridGrouping[] = coorRelations[`${coor}`]


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
    let canPushCoor: boolean = true
    for (let relation of relationList) {
        if (relation.numbersFulfilled.includes(number)) {
            canPushCoor = false
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

    if(canPushCoor) {
        spaceIsAvailbleForNumberBooleansList.push(coor)
        // console.log("pushed", coor)
    }

    return
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

let gridLock = false
let bingoFoundForFullScan = false
let bingoFoundForEightOfNine = false


function checkEightOfNine() {
    bingoFoundForEightOfNine = false
    for(let groupingType of groupingTypes) {
        for(let grouping of groupingType) {
           if (grouping.spaceCoorAvail.length == 1 && grouping.numbersNeeded.length == 1) {
                const bingoCoor = grouping.spaceCoorAvail[0]
                const relationList = coorRelations[`${bingoCoor}`]
                const number = grouping.numbersNeeded[0]
                adjustRelations(relationList, number, bingoCoor)


                fulfillGridWithBingoCoor(bingoCoor, number)

                console.log(`eightOfNine technique: ${grouping.name} fulfills space: ${bingoCoor} with number: ${number}`)
                bingoFoundForEightOfNine = true
           }
        }
    }
    // shouldReRun()
}

function fulfillGridWithBingoCoor(bingoCoor: String, number: number) {
    let coordinateA = parseInt(bingoCoor.split(",")[0])
    let coordinateB = parseInt(bingoCoor.split(",")[1])
    selectedGrid[coordinateA][coordinateB] = number
}

// function checkEightOutOfNddine(grouping: GridGrouping) {
//     if (grouping.spaceCoor.length == 1 && grouping.numbersNeeded.length == 1) {
//         adjustRelations
//         gridAndPop(grouping.spaceCoor[0], grouping.numbersNeeded[0])
//    }
//    return

// }

function fullScan() {
    bingoFoundForFullScan = false
    for(let groupingType of groupingTypes) {
        for(let grouping of groupingType) {
            let numNeeded = grouping.numbersNeeded
            for (let num of numNeeded) {
                checkGroupingForNumber(grouping, num)
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
    console.log("grid", selectedGrid)
    fullScan()
    console.log("grid", selectedGrid)
    checkEightOfNine()
    console.log("grid", selectedGrid)


// checkSpaceForNumber("0", 1)

// checkGroupingForNumber(row0, 1)
// console.log(grid2)

function fascilitate() {
    while(!gridLock) {
        // do {
            fullScan()
        // }
        // while(bingoFoundForFullScan)
        if(!bingoFoundForFullScan) {
            checkEightOfNine()
            if(bingoFoundForEightOfNine) {
                fullScan()
            } else {
                gridLock = true
                console.log("GRIDLOCK")
                return
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

beginGame(otherGrid)




//run full scan
//if number found, run full scan again
//if  no numbers found, run checkEightOfNine
//if number found, run full scan
//if no number found, gridlock


// Can only add to lanes when checking boxes...I think
// Case for a lane spanding two boxes??

//What's with the spaceIsAbvailableForNumberBooleanListDISTINCT....why distinct?