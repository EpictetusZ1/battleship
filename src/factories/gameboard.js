import {Ship} from "./ship";

export class Gameboard {
    difficulty = {medium: 8} || {hard: 10}
    shipCount = 5 || 3 || 2

    constructor(difficulty = 10, shipCount, grid = this.grid) {
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
        console.log(Error.message)
    }

    checkOverFlow(myShip, axis) {
        if (this.difficulty < myShip.hitTracker.length + axis) throw new Error("Ship off game board area.")
    }

    placeShip(coords) {
        let x = coords[0]
        let y = coords[1]
        // TODO: Write function that generates Ship length for Game state
        let myShip = new Ship(2, [x, y])

        let targetXAxis = this.grid[x]
        try {
            this.checkOverFlow(myShip, y)
            targetXAxis.splice(y, myShip.hitTracker.length, ...myShip.hitTracker)
        } catch (Error) {
            this._alertNotPlaceable(Error)
        }
    }
}