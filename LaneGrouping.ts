import GridGrouping from "./GridGrouping"


export default class LaneGrouping {
    name: string
    laneType: string
    segType: string
    spaceCoor: String[]
    numsInLane: number[]


    constructor(grouping: GridGrouping, sliceSeg: string) {
        this.name = grouping.name + sliceSeg
        this.laneType = grouping.groupingType
        this.segType = sliceSeg
        this.spaceCoor = this.getSpaceCoor(grouping, sliceSeg)
        this.numsInLane = []
        
    }

    getSpaceCoor(grouping: GridGrouping, sliceSeg: String) {
        switch(sliceSeg) {
            case "A":
                return grouping.spaceCoor.slice(0, 3)
                
            case "B":
                return grouping.spaceCoor.slice(3, 6)
            case "C":
                return grouping.spaceCoor.slice(6, 9)
            default:
                return []
        }
    }

}


