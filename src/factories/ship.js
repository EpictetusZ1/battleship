export class Ship {
    hitTracker = 0
    axis = "x || y" // Direction of ship
    position = [0, 0] // X and Y axis on game board
    hitArea = [ [0, 0], [0, 0] ] // Coords that the ship occupies
    constructor(len, position, axis = "x") {
        this.len = len
        this.hitTracker = [...Array(len).fill(1)]
        this.position = position
        this.axis = axis
        this.hitArea = this.setHitArea(axis, len)
        this.sunk = false
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
        return console.log(`HIT at: ${index}`) // Add method to alert player here
    }

    isHit(hitArea, coords) {
        console.log("isHIT method being called")
        hitArea.forEach( (element, index) => {
            this.arrayEquality(element, coords, index)
            this.alertHit(index)
            this.isSunk(hitArea)
        })
    }

    arrayEquality(a1, a2, index) {
        console.log("Array equality thing")
        console.log(a1, a2, index)
        if (JSON.stringify(a1) === JSON.stringify(a2)) {
            this.hitTracker[index] = 5
        }
    }

    hit(coords) {
        if (coords[0] === this.position[0] || coords[1] === this.position[1]) {
            for (let i = 0; i < this.hitArea.length; i ++) {
                if (this.hitArea[i][0] === coords[0] || this.hitArea[i] === coords[1]) {
                    return this.hitTracker[i] = 5
                }
            }

            this.isHit(this.hitArea, coords)
        }
    }
}






