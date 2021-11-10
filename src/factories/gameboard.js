import {Ship} from "./ship";

export class Gameboard {
    difficulty = {medium: 8} || {hard: 10}
    shipCount = 5 || 3 || 2
    ships = []
    #numOfShips
    constructor(difficulty = 10, shipCount) {
        this.difficulty = difficulty
        this.shipCount = shipCount
        this.grid = this.setGrid(difficulty)
        this.ships = [1, 2, 3, 4, 5]
        this.#numOfShips = 0
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
        if (this.grid[axis].indexOf(1) !== -1) throw new Error("Ship overlaps with another")
    }

    addShipYAxis(myShip, x, y) {
        for (let i = 0; i < myShip.hitTracker.length; i++) {
            this.grid[x + i].splice(this.grid[y], 1, myShip.hitTracker[i])
        }
    }

    addShipXAxis(myShip, x) {
        for (let i = 0; i < myShip.hitTracker.length; i++) {
            this.grid[x][x + i] = myShip.hitTracker[i]
        }
    }

    addShip(data) {
        let newShip = new Ship(...data)
        this.ships[this.#numOfShips] = newShip
        this.#numOfShips++
        return this.placeShip(newShip["len"], newShip["position"])
    }

    placeShip(len, coords) {
        let x = coords[0]
        let y = coords[1]
        let myShip = this.ships[this.#numOfShips - 1]

        try {
            if (myShip.axis === "y") {
                this._checkOverFlow(myShip, y)
                this._checkOverLap(myShip, y)
                this.addShipYAxis(myShip, x, y)
            } else if (myShip.axis === "x") {
                this._checkOverFlow(myShip, x)
                this.addShipXAxis(myShip, x)
            }
        } catch (Error) {
            return this._alertNotPlaceable(Error)
        }
    }

    receiveAttack(e) {
        let x = e[0]
        let y = e[1]
        if (this.grid[x][y] !== 1) {
            // Check if there is a ship "1", if not mark that as 2 = miss on game board
            return this.grid[x][y] = 2
        } else {
            this.grid[x][y] = 5 // Mark as hit
        }

    }
}