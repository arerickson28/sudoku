"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LaneGrouping = /** @class */ (function () {
    function LaneGrouping(grouping, sliceSeg) {
        this.name = grouping.name + sliceSeg;
        this.laneType = grouping.groupingType;
        this.segType = sliceSeg;
        this.spaceCoor = this.getSpaceCoor(grouping, sliceSeg);
        this.numsInLane = [];
    }
    LaneGrouping.prototype.getSpaceCoor = function (grouping, sliceSeg) {
        switch (sliceSeg) {
            case "A":
                return grouping.spaceCoor.slice(0, 3);
            case "B":
                return grouping.spaceCoor.slice(3, 6);
            case "C":
                return grouping.spaceCoor.slice(6, 9);
            default:
                return [];
        }
    };
    return LaneGrouping;
}());
exports.default = LaneGrouping;
