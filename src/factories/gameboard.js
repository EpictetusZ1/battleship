import {Ship} from "./ship";

export class Gameboard {
    difficulty = 10
    ships = {}
    constructor() {
        this.difficulty = 10
        this.grid = this.setGrid(10)
        this.defeated = false
        this.increment = 0
        this.ships = {
            ship1: { name: "Carrier", len: 5},
            ship2: { name: "Battleship", len: 4},
            ship3: { name: "Destroyer", len: 3},
            ship4: { name: "Submarine", len: 3},
            ship5: { name: "Patrol Boat", len: 2},
        }
    }

    setGrid(difficulty) {
        let xAxis = new Array(difficulty)
        for (let i = 0; i < xAxis.length; i++) {
            xAxis[i] = new Array(difficulty).fill(0)
        }
        return xAxis
    }

    alertNotPlaceable(Error) {
        return Error.message
    }

    checkOverFlow(myShip, axis) {
        if (this.difficulty < myShip.hitTracker.length + axis) throw new Error("Ship off game board area.")
    }

    checkOverLap(myShip, axis) {
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

    addShip(pos, axis = "x") {
        let shipKeys = Object.entries(this.ships)[this.increment]
        let currShip = shipKeys[1].len
        let newShip = new Ship(currShip, pos, axis)

        this.increment++

        return this.placeShip(newShip)
    }

    placeShip(myShip) {
        let x = myShip.position[0]
        let y = myShip.position[1]

        try {
            // Check if ship meets placement conditions
            if (myShip.axis === "y") {
                this.checkOverFlow(myShip, y)
                this.checkOverLap(myShip, y)
                this.addShipYAxis(myShip, x, y)
            } else if (myShip.axis === "x") {
                this.checkOverFlow(myShip, x)
                this.addShipXAxis(myShip, x)
            }
        } catch (Error) {
            return this.alertNotPlaceable(Error)
        }
    }

    updateShipHit(x, y) {


    }

    receiveAttack(e) {
        let x = e[0]
        let y = e[1]
        console.log("coords for hit: ", e)

        if (this.grid[x][y] !== 1) {
            this.grid[x][y] = 2 // Marks a miss
        } else {
            this.grid[x][y] = 5 // Marks a hit
            this.updateShipHit(x, y)
            this.checkSunk()
        }
    }

    checkSunk() {
        let ships = this.ships
        for (let i = 0; i < ships.length; i++) {
            if (ships.indexOf(ships[i].sunk = false) === -1) return this.defeated = true
        }
    }
}