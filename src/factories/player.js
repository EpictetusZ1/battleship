
export class Player {
    name = "Player 1"
    constructor(name, isComputer = false, isTurn = true) {
        this.name = name
        this.isComputer = isComputer
        this.isTurn = isTurn
        this.alreadyHit = []
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