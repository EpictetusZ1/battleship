
export class Ship {
    len;
    axis = "x || y" // Direction of ship
    position = [0, 0] // Axis on game board where ship starts
    hitArea
    constructor(len, position, axis = "x") {
        this.len = [...Array(len).fill(0)]
        this.position = position
        this.axis = axis
        this.hitArea = this.setHitArea(axis, len)
    }

    setHitArea(axis, len) {
        let area = Array.from(len)
        for (let i = 0; i < len; i ++) {
            area[i] = [this.position[0], this.position[1] + i]
        }
        return area
    }


    hit(coords) {
        if (coords[0] === this.position[0] || coords[1] === this.position[1]) {
        }
        else return false
    }
}






