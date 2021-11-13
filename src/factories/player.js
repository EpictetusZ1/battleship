
export class Player {
    name = "Player 1"
    constructor(name, isComputer = false) {
        this.name = name
        this.isComputer = isComputer
        this.alreadyHit = []
    }

    alertBadCoord(message) {
        return new Error(message)
    }

    checkIsAlreadyHit(coords) {
        if (this.alreadyHit.includes(coords)) {
            if (this.isComputer === false) this.alertBadCoord("This coordinate has already been hit")
            else this.computerMove()
        }
    }

    attack(e) {
        this.alreadyHit.push( [e[0], e[1]] )
        return [e[0], e[1]] // Coords to send -> board based off e.target.data
    }

    computerMove() {
        let x = Math.floor((Math.random() * 9) + 1)
        let y = Math.floor((Math.random() * 9) + 1)
        console.log([x, y])

        this.checkIsAlreadyHit([x, y])
        return this.attack([x, y])
    }
}