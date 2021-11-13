import {Ship} from "./ship";

export class Gameboard {
    difficulty = 10
    ships = {}
    constructor() {
        this.difficulty = 10
        this.grid = this.setGrid(10)
        this.defeated = false
        this.increment = 0
        this.shipList = []
        this.shipHitTracker = []
        this.ships = {
            ship1: { name: "Carrier", len: 5},
            ship2: { name: "Battleship", len: 4},
            ship3: { name: "Destroyer", len: 3},
            ship4: { name: "Submarine", len: 3},
            ship5: { name: "Patrol Boat", len: 2}
        }
    }

    setGrid(difficulty) {
        let xAxis = new Array(difficulty)
        for (let i = 0; i < xAxis.length; i++) {
            xAxis[i] = new Array(difficulty).fill(0)
        }
        return xAxis
    }

    alertNotPlaceable(message) {
        console.log(message)
        return Error(message)
    }

    checkOverFlow(myShip) { // Checks properly for X axis ships
        if (10 < myShip.len + myShip.position[0]) throw "Ship off game board area."
        if (10 < myShip.len + myShip.position[1]) throw "Ship off game board area."
    }

    checkOverLap(myShip, axis) {
        if (this.grid[axis].indexOf(1) !== -1) throw "Ship overlaps with another"
    }

    checkOverLapY(myShip, x, y) {
        for (let i = 0; i < myShip.len; i++) {
            if (this.grid[x + i][y] === 1) throw "Ship overlaps with another"
        }
    }

    addShipXAxis(myShip, x, y) {
        for (let i = 0; i < myShip.len; i++) {
            this.grid[x][y + i] = myShip.hitTracker[i]
        }
    }

    addShipYAxis(myShip, x, y) {
        for (let i = 0; i < myShip.len; i++) {
            this.grid[x + i][y] = myShip.hitTracker[i]
        }
    }

    updateShipHit(x, y, name, index) {
        let targetShip = this.shipList.find(x => x.name === name)
        targetShip.hit([x, y], index)
        this.checkSunk()
    }

    updateUniqueShip(x, y) {
        let hitAreas = this.shipHitTracker
        for (let i = 0; i < 5; i++) {
            let targetArea = hitAreas[i]["area"]
            for (let j = 0; j < targetArea.length; j++) {
                if (targetArea[j][0] === x && targetArea[j][1] === y) {
                    return this.updateShipHit(x, y, hitAreas[i].name)
                }
            }
        }
    }

    checkPlacement(myShip) {
        let x = myShip.position[0]
        let y = myShip.position[1]

        try {
            if (myShip.axis === "y") {
                this.checkOverFlow(myShip, y)
                this.checkOverLapY(myShip, x, y)
                this.addShipYAxis(myShip, x, y)
                return 1
            } else if (myShip.axis === "x") {
                this.checkOverFlow(myShip, x)
                this.checkOverLap(myShip, x)
                this.addShipXAxis(myShip, x, y)
                return 1
            }
        } catch (Error) {
            return this.alertNotPlaceable(Error)
        }
    }

    addShip(pos, axis = "x") {
        let shipKeys = Object.entries(this.ships)[this.increment]
        let currShip = shipKeys[1].len
        let newShip = new Ship(currShip, pos, shipKeys[0], axis)

        if (this.checkPlacement(newShip) === 1) {
            let shipName = shipKeys[0]
            let hitArea = newShip.hitArea

            this.shipList.push(newShip) // Store all ships in Game board
            this.increment++ // Used to name each ship
            this.shipHitTracker.push( { name: shipName, area: hitArea} )
        }
    }

    receiveAttack(e) {
        let x = e[0]
        let y = e[1]

        if (this.grid[x][y] !== 1) {
            this.grid[x][y] = 2 // Marks a miss
        } else {
            this.grid[x][y] = 5 // Marks a hit
            this.updateUniqueShip(x, y)
        }
    }

    checkSunk() {
        let counter = 0
        for (let i = 0; i < this.shipList.length; i++) {
            if (this.shipList[i].sunk === true) {
                counter++
            }
            if (counter === 5) {
                return this.defeated = true
            }
        }
    }
}