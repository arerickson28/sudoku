
// class blueprint to define a row, column, or box and it's state of completion
export default class GridGrouping {

    // name refers to, for example, first row or fourth box or second column etc.
    name: string;
    // on the Sudoku grid, which spaces does this grouping contain?
    spaceCoor: String[]
    // which space coordinates are empty in this grouping?
    spaceCoorAvail: String[]
    // actual contents of the grouping
    spaceValues: number[]
    // what numbers does this grouping still need? Goal is to drive this to empty
    numbersNeeded: number[]
    // what numbers does this grouping already have? Goal is to fill this with 1-9
    numbersFulfilled: number[]

    // upon defining a grouping, assemble the above values based on the nature of the grouping and the given sudoku puzzle
    constructor(groupingNum: number, groupingType: string, grid: number[][]) {
        this.name = groupingType + groupingNum
        this.spaceCoor = this.getSpaces("coor", groupingNum, groupingType, grid)
        this.spaceCoorAvail = this.getSpaceCoorAvail(this.spaceCoor, grid)
        this.spaceValues = this.getSpaces("values", groupingNum, groupingType, grid)
        this.numbersNeeded = this.getNumbersNeeded(this.spaceValues)
        this.numbersFulfilled = this.getNumbersFulfilled(this.spaceValues)
    }

    getSpaces(valuesOrCoor: String, groupingNum: number, groupingType: string, grid: number[][]): any[] {

        switch(groupingType) {
            case "row":
                return this.getRowSpaces(valuesOrCoor, groupingNum, grid)
            case "col":
                return this.getColSpaces(valuesOrCoor, groupingNum, grid)
            case "box":
                return this.getBoxSpaces(valuesOrCoor, groupingNum, grid)
            default:
                return []
        }
    }

    getRowSpaces(valuesOrCoor: String, groupingNum: number, grid: number[][]): any[] {
        switch(valuesOrCoor){
            case "values":
                return grid[groupingNum]
            case "coor":
                return [
                    `${groupingNum},0`,
                    `${groupingNum},1`,
                    `${groupingNum},2`,
                    `${groupingNum},3`,
                    `${groupingNum},4`,
                    `${groupingNum},5`,
                    `${groupingNum},6`,
                    `${groupingNum},7`,
                    `${groupingNum},8`,
                ]
            default:
                return []
        }
    }

    getColSpaces(valuesOrCoor: String, groupingNum: number, grid: number[][]): any[] {
        switch(valuesOrCoor) {
            case "values": 
                let spaceValues: number[] = []
                    for(let i=0; i<9; i++) {
                        spaceValues.push(grid[i][groupingNum])
                    }
                    return spaceValues
            case "coor":
                let spaceCoor: String[] = []
                    for(let i=0; i<9; i++) {
                        spaceCoor.push(`${i},${groupingNum}`)
                    }
                return spaceCoor

            default:
                return []

        }
      
      
    }

    getBoxSpaces(valuesOrCoor: String, groupingNum: number, grid: number[][]): any[] {

        switch(groupingNum) {
            case 0:
                switch(valuesOrCoor) {
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
                          ]
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
                        ]
                    default:
                        return []

                }
           
            case 1:
                switch(valuesOrCoor) {
                    case "values":
                        return  [
                            grid[0][3],
                            grid[0][4],
                            grid[0][5],
                            grid[1][3],
                            grid[1][4],
                            grid[1][5],
                            grid[2][3],
                            grid[2][4],
                            grid[2][5]
                          ]
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
                        ]
                    default:
                        return []
                }
        
            case 2:
                switch(valuesOrCoor) {
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
                        ] 
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
                        ]
                    default:
                        return []
                }
    
            case 3:
                switch(valuesOrCoor) {
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
                        ]
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
                        ]
                    default:
                        return []
                }
          
            case 4:
                switch(valuesOrCoor) {
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
                          ]
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
                        ]
                    default:
                        return []
                }
            
            case 5:
                switch(valuesOrCoor){
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
                        ] 
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
                        ]
                    default:
                        return []
                }
          
            case 6:
                switch(valuesOrCoor){
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
                        ]
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
                        ]
                    default:
                        return []
                }
          
            case 7:
                switch(valuesOrCoor) {
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
                        ]
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
                        ]
                    default:
                        return []
                    
                }
        
            case 8:
                switch(valuesOrCoor) {
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
                        ] 
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
                        ]
                    default:
                        return []
                }

            default:
              console.log("error")
              return []
          }
    }

    getSpaceCoorAvail(spaceCoor: String[], grid: number[][]): String[] {
        let spaceCoorAvail: String[] = []
        for(let coor of spaceCoor) {
            let coorA = parseInt(coor.split(",")[0])
            let coorB = parseInt(coor.split(",")[1])
            if(grid[coorA][coorB] == 0) {
                spaceCoorAvail.push(coor)
            }
        }
        return spaceCoorAvail
    }

    getNumbersNeeded(spaces: number[]) {
        let numbersNeeded: number[] = []
        for (let i = 1; i<10; i++) {
            if (!spaces.includes(i)){
                numbersNeeded.push(i)
            }
        }
        return numbersNeeded
    }

    getNumbersFulfilled(spaces: number[]): number[] {
        let numbersFulfilled: number[] = []
        for (let space of spaces) {
           if (space != 0) {
            numbersFulfilled.push(space)
           }
        }
        return numbersFulfilled
    }
}
