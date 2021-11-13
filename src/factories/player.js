
export class Player {
    name = "Player 1"
    constructor(name, isComputer = false) {
        this.name = name
        this.isComputer = isComputer
        this.alreadyHit = []
        this.isTurn = false
    }

    attackSq(e) {
        return [e[0], e[1]] // Coords to send -> board based off e.target.data
    }

    computerMove() {
        let x = Math.floor((Math.random() * 10))
        let y = Math.floor((Math.random() * 10))

        if (this.alreadyHit.includes("" + x + y)) {
            return this.computerMove()
        } else {
            this.alreadyHit.push("" + x + y)
            return this.attackSq([x, y])
        }
    }
}