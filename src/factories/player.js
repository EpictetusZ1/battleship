
export class Player {
    name = "Player 1"
    constructor(name, isComputer = false) {
        this.name = name
        this.isTurn = true
        this.isComputer = isComputer
    }

    attack(e) {
        if (this.isTurn) {
            this.isTurn = false
            return [e[0], e[1]] // Coords to send -> board based off e.target.data
        }

    }



}