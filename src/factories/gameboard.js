import {Ship} from "./ship";

export class Gameboard {
    difficulty = {medium: 8} || {hard: 10}
    shipCount = 5 || 3 || 2

    constructor(difficulty = 10, shipCount) {
        this.difficulty = difficulty
        this.shipCount = shipCount
        this.grid = this.setGrid(difficulty)
    }

    setGrid(difficulty) {
        let xAxis = new Array(difficulty)

        for (let i = 0; i < xAxis.length; i++) {
            xAxis[i] = new Array(difficulty).fill(0)
        }

        return xAxis
    }

    _alertNotPlaceable(Error) {
        return Error.message
    }

    _checkOverFlow(myShip, axis) {
        if (this.difficulty < myShip.hitTracker.length + axis) throw new Error("Ship off game board area.")
    }

    _checkOverLap(myShip, axis) {
        if (this.grid[axis].indexOf(null) !== -1) throw new Error("Ship overlaps with another")
    }

    addShipYAxis(myShip, x, y) {
        this._checkOverFlow(myShip, y)
        try {
            this._checkOverLap(myShip, y)
            for (let i = 0; i < myShip.hitTracker.length; i++) {
                this.grid[x + i].splice(this.grid[y], 1, myShip.hitTracker[i])
            }
        } catch (Error) {
            return this._alertNotPlaceable(Error)
        }
    }

    placeShip(len, coords, axis = "x") {
        let x = coords[0]
        let y = coords[1]
        let myShip = new Ship(len, [x, y], axis)

        if (myShip.axis === "y") { return this.addShipYAxis(myShip, x, y) }

        let targetAxis = this.grid[x]

        try {
            this._checkOverFlow(myShip, y)
            targetAxis.splice(y, myShip.hitTracker.length, ...myShip.hitTracker)
        } catch (Error) {
            return this._alertNotPlaceable(Error)
        }
    }

    receiveAttack(e) {
        let x = e[0]
        let y = e[1]
        if (this.grid[x][y] !== null) {
            // Check if there is a ship "null", if not mark that as 2 = miss on game board
            return this.grid[x][y] = 2
        } else {
            this.grid[x][y] = 5 // Mark as hit
        }

    }
}