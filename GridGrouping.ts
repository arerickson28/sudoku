// class GridGrouping {
//     constructor(name, spaces, spacesAvailable, numbersNeeded, numbersFulfilled) {
//         this.name = name
//         this.spaces = spaces
//         this.spacesAvailable = spacesAvailable
//         this.numbersNeeded = numbersNeeded
//         this.numbersFulfilled = numbersFulfilled
//     }
// }


export default class GridGrouping {

    name: string;
    spaces: number[]
    numbersNeeded: number[]
    numbersFulfilled: number[]

    constructor(groupingNum: number, groupingType: string, grid: number[][]) {
        this.name = groupingType + groupingNum
        this.spaces = this.getSpaces(groupingNum, groupingType, grid)
        this.numbersNeeded = this.getNumbersNeeded(this.spaces)
        this.numbersFulfilled = this.getNumbersFulfilled(this.spaces)
    }

    getSpaces(groupingNum: number, groupingType: string, grid: number[][]): number[] {

        switch(groupingType) {
            case "row":
                return grid[groupingNum]
            case "col":
                return this.getColSpaces(groupingNum, grid)
            case "box":
                return this.getBoxSpaces(groupingNum, grid)
            default:
                return []
        }

        // if(groupingType == "row") {
        //     return grid[groupingNum]
        // } else if (groupingType == "col") {
        //     return getColSpaces(groupingNum, grid)
        // } else if (groupingType == "box") {
        //     return getBoxSpaces(groupingNum, grid)
        // }
    }

    getColSpaces(groupingNum: number, grid: number[][]): number[] {
        let spaces: number[] = []
        for(let i=0; i<=9; i++) {
            spaces.push(grid[i][groupingNum])
        }
        return spaces
    }

    getBoxSpaces(groupingNum: number, grid: number[][]): number[] {
        let spaces: number[] = []
        switch(groupingNum) {
            case 0:
              spaces = [
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
              break;
            case 1:
              spaces = [
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
              break;
            case 2:
                spaces = [
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
                break;
            case 3:
                spaces = [
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
                break;
            case 4:
                spaces = [
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
                  break;
            case 5:
                spaces = [
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
                break;
            case 6:
                spaces = [
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
                break;
            case 7:
                spaces = [
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
                    break;
            case 8:
                spaces = [
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
                break;

            default:
              console.log("error")
          }
          return spaces
    }

    getNumbersNeeded(spaces: number[]) {
        let numbersNeeded: number[] = []
        for (let i = 1; i<10; i++) {
            if(   !spaces.includes(i)   ){
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

