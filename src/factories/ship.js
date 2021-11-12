export class Ship {
    hitTracker = 0  // Ships representation of its state.
    axis = "x || y"  // Vector ships will occupy
    position = [0, 0]   // X and Y axis on game board where ship starts.
    hitArea = [ [0, 0], [0, 0] ] // Coords that the ship occupies.
    constructor(len, position, name, axis = "x") {
        this.len = len
        this.hitTracker = [...Array(len).fill(1)]
        this.position = position
        this.name = name
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

    isSunk() {
        if (!this.hitTracker.indexOf(1)) {
            console.log("SUNK")
            return this.sunk = true
        }
    }

    alertHit(coords) {
        return console.log(`HIT at: ${coords}`) // Add method to alert player here.
    }

    isHit(coords) {
        this.alertHit(coords)
        this.isSunk()
    }

    hit(coords) {
        for (let i = 0; i < this.hitArea.length; i ++) {
            if (this.hitArea[i][0] === coords[0] && this.hitArea[i][1] === coords[1]) {
                this.isHit(coords)
                return this.hitTracker[i] = 5
            }
        }
    }




}


