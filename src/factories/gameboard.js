export class Gameboard {
    difficulty = {medium: 8} || {hard: 10}
    shipCount = 5 || 3 || 2

    constructor(difficulty = 10, shipCount) {
        this.difficulty = difficulty
        this.shipCount = shipCount
    }

}