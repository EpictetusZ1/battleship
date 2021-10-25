export class Ship {
    len = 0
    axis = "x || y" // Direction of ship
    position = [0, 0] // X and Y axis on game board
    hitArea = [ [0, 0], [0, 0] ]
    sunk = false
    constructor(len, position, axis = "x", sunk = false) {
        this.len = [...Array(len).fill(0)]
        this.position = position
        this.axis = axis
        this.hitArea = this.setHitArea(axis, len)
    }

    setHitArea(axis, len) {
        let area = Array.from(len)
        for (let i = 0; i < len; i ++) {
                area[i] = [this.position[0], (this.position[1] + i)]
        }
        return area
    }

    isSunk(hitArea) {
        let bool = hitArea.indexOf("0")
        if (bool === -1) return this.sunk = true
    }

    alertHit(index) {
        return console.log(`HIT at: ${index}`)
    }

    isHit(hitArea, coords) {
        hitArea.forEach((element, index) => {
            this._arraysEqual(element, coords, index)
            console.log(element)
            this.alertHit(index)
            this.isSunk(hitArea)
        })
    }

    _arraysEqual(a1, a2, index) {
        if (JSON.stringify(a1) === JSON.stringify(a2)) {
            this.len[index] = 1

        }
    }

    hit(coords) {
        if (coords[0] === this.position[0] || coords[1] === this.position[1]) {
            this.isHit(this.hitArea, coords)
        }
        else return false
    }
}






