export class Ship {
    hitTracker = 0
    axis = "x || y" // Direction of ship
    position = [0, 0] // X and Y axis on game board
    hitArea = [ [0, 0], [0, 0] ] // Coords that the ship occupies
    sunk = false
    constructor(len, position, axis = "x", sunk = false) {
        this.hitTracker = [...Array(len).fill(1)]
        this.position = position
        this.axis = axis
        this.hitArea = this.setHitArea(axis, len)
        this.sunk = sunk
    }

    setHitArea(axis, len) {
        let area = Array.from(len)
        for (let i = 0; i < len; i ++) {
            area[i] = [this.position[0], (this.position[1] + i)]
        }
        return area
    }

    isSunk(hitArea) {
        if (hitArea.indexOf(1) === -1) return this.sunk = true
    }

    alertHit(index) {
        return console.log(`HIT at: ${index}`)
    }

    isHit(hitArea, coords) {

        hitArea.forEach( (element, index) => {
            this._arrayEquality(element, coords, index)
            this.alertHit(index)
            this.isSunk(hitArea)
        })

    }

    _arrayEquality(a1, a2, index) {
        if (JSON.stringify(a1) === JSON.stringify(a2)) {
            this.hitTracker[index] = 1
        }
    }

    hit(coords) {
        if (coords[0] === this.position[0] || coords[1] === this.position[1]) {
            this.isHit(this.hitArea, coords)
        }
        else return false
    }
}






