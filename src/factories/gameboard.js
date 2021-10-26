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

    addShipYAxis(myShip, x, y) {
        this._checkOverFlow(myShip, y)
        for (let i = 0; i < myShip.hitTracker.length; i++) {
            this.grid[x + i].splice(this.grid[y], 1, myShip.hitTracker[i])
        }

    }

    placeShip(coords, axis = "x") {
        let x = coords[0]
        let y = coords[1]
        let myShip = new Ship(2, [x, y], axis)

        if (myShip.axis === "y") {
            return this.addShipYAxis(myShip, x, y)
        }

        let targetAxis = this.grid[x]

        try {
            this._checkOverFlow(myShip, y)
            targetAxis.splice(y, myShip.hitTracker.length, ...myShip.hitTracker)
        } catch (Error) {
            return this._alertNotPlaceable(Error)
        }
    }
}