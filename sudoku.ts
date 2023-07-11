
import GridGrouping from "./GridGrouping"




let testGrid: number[][] = [
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

let grid: number[][] = [
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


let row0 = new GridGrouping(0, "row", grid)
let row1 = new GridGrouping(1, "row", grid)
let row2 = new GridGrouping(2, "row", grid)
let row3 = new GridGrouping(3, "row", grid)
let row4 = new GridGrouping(4, "row", grid)
let row5 = new GridGrouping(5, "row", grid)
let row6 = new GridGrouping(6, "row", grid)
let row7 = new GridGrouping(7, "row", grid)
let row8 = new GridGrouping(8, "row", grid)

let col0 = new GridGrouping(0, "col", grid)
let col1 = new GridGrouping(1, "col", grid)
let col2 = new GridGrouping(2, "col", grid)
let col3 = new GridGrouping(3, "col", grid)
let col4 = new GridGrouping(4, "col", grid)
let col5 = new GridGrouping(5, "col", grid)
let col6 = new GridGrouping(6, "col", grid)
let col7 = new GridGrouping(7, "col", grid)
let col8 = new GridGrouping(8, "col", grid)

let box0 = new GridGrouping(0, "box", grid)
let box1 = new GridGrouping(1, "box", grid)
let box2 = new GridGrouping(2, "box", grid)
let box3 = new GridGrouping(3, "box", grid)
let box4 = new GridGrouping(4, "box", grid)
let box5 = new GridGrouping(5, "box", grid)
let box6 = new GridGrouping(6, "box", grid)
let box7 = new GridGrouping(7, "box", grid)
let box8 = new GridGrouping(8, "box", grid)








const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8]
const cols = [col0, col1, col2, col3, col4, col5, col6, col7, col8]
const boxs = [box0, box1, box2, box3, box4, box5, box6, box7, box8]


   
let coorRelations: Object = {
    '0,0': [ row0, col0, box0 ],
    '0,1': [ row0, col1, box0 ],
    '0,2': [ row0, col2, box0 ],
    '0,3': [ row0, col3, box1 ],
    '0,4': [ row0, col4, box1 ],
    '0,5': [ row0, col5, box1 ],
    '0,6': [ row0, col6, box1 ],
    '0,7': [ row0, col7, box2 ],
    '0,8': [ row0, col8, box2 ],
    '1,0': [ row1, col0, box0 ],
    '1,1': [ row1, col1, box0 ],
    '1,2': [ row1, col2, box0 ],
    '1,3': [ row1, col3, box1 ],
    '1,4': [ row1, col4, box1 ],
    '1,5': [ row1, col5, box1 ],
    '1,6': [ row1, col6, box1 ],
    '1,7': [ row1, col7, box2 ],
    '1,8': [ row1, col8, box2 ],
    '2,0': [ row2, col0, box0 ],
    '2,1': [ row2, col1, box0 ],
    '2,2': [ row2, col2, box0 ],
    '2,3': [ row2, col3, box1 ],
    '2,4': [ row2, col4, box1 ],
    '2,5': [ row2, col5, box1 ],
    '2,6': [ row2, col6, box1 ],
    '2,7': [ row2, col7, box2 ],
    '2,8': [ row2, col8, box2 ],
    '3,0': [ row3, col0, box3 ],
    '3,1': [ row3, col1, box3 ],
    '3,2': [ row3, col2, box3 ],
    '3,3': [ row3, col3, box1 ],
    '3,4': [ row3, col4, box1 ],
    '3,5': [ row3, col5, box1 ],
    '3,6': [ row3, col6, box1 ],
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


function checkEightOutOfNine(grouping: GridGrouping) {
    if (grouping.spaceCoor.length == 1 && grouping.numbersNeeded.length == 1) {
        gridAndPop(grouping.spaceCoor[0], grouping.numbersNeeded[0])
   }

}

function gridAndPop(coor: String, number: number) {
    let row = parseInt(coor.split(",")[0])
    let col = parseInt(coor.split(",")[1])
     grid[row][col] = number
     for(let relation of coorRelations[`${coor}`]) {
        relation.spaceCoorAvail.pop(relation.spaceCoorAvail.getIndex(coor))
        relation.numbersNeeded.pop(relation.numbersNeeded.getIndex(number))
    }
}


let spaceIsAvailbleForNumberBooleansList: String[] = []
console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)






//take number, check all spaces in that row
function checkGroupingForNumber(grouping: GridGrouping, number: number) {
    console.log(`grouping: ${grouping.name}`)
  
    for(let space of grouping.spaceCoorAvail) {
        checkSpaceForNumber(space, number)
    }

    function getDistincts(arr: String[]) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    if (getDistincts(spaceIsAvailbleForNumberBooleansList).length == 1) {
        //fill space with that number, yay!
        console.log(`grouping: ${grouping.name} fulfills space: ${spaceIsAvailbleForNumberBooleansList[0]} with number: ${number}`)
    } else {
        console.log(`grouping: ${grouping.name}, is inconclusive for number: ${number}`)
    }
}


function checkSpaceForNumber(coor: String, number: number) {
    console.log(`checking coor: ${coor} for number: ${number}`)
    const relationList = coorRelations[`${coor}`]
    console.log(relationList)
    spaceIsAvailbleForNumberBooleansList = []

    for(let relation of relationList) {
        if (!relation.numbersFulfilled.includes(number)) {
            spaceIsAvailbleForNumberBooleansList.push(coor)
            console.log("pushed", coor)
        }
    }

    return
}


    let numNeeded = row0.numbersNeeded
    let spaceCoorAvail = row0.spaceCoorAvail
    console.log(numNeeded)
    console.log(spaceCoorAvail)
    for (let num of numNeeded) {
        checkGroupingForNumber(row0, num)
    }


    console.log("spaceIsAvailableForNumberBooleansList", spaceIsAvailbleForNumberBooleansList)


// checkSpaceForNumber("0", 1)

// checkGroupingForNumber(row0, 1)
// console.log(grid2)
