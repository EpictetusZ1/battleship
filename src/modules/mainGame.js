import {Gameboard} from "../factories/gameboard";
import {Player} from "../factories/player";
import DomInteract from "./DOMInteract";

const MainGame = (() => {

    const gameLoop = () => {
        const p1Board = new Gameboard()
        const p2Board = new Gameboard()

        const player1 = new Player("Jack", true)
        const player2 = new Player("Robot", true, false)

        const mockShips = () => {
            if (!p1Board.ready) {
                DomInteract.coords(p1Board)
                DomInteract.highLight()
                console.log(p1Board)
            }

            p2Board.addShip( [5, 4] )
            p2Board.addShip( [4, 4] )
            p2Board.addShip( [2, 4] )
            p2Board.addShip( [3, 2] )
            p2Board.addShip( [0, 1] )
        }
        mockShips()

        const doTurn = () => {
            if (player1.isTurn ) {
                p2Board.receiveAttack( player1.computerMove() )
                player1.flipTurn()
                player2.flipTurn()

            } else if(player2.isTurn) {
                p1Board.receiveAttack( player2.computerMove() )
                player1.flipTurn()
                player2.flipTurn()
            }
        }

        const loopGame = () => {
            while (p1Board.defeated === false && p2Board.defeated === false) {
                doTurn()
            }
        }
        // loopGame()
    }

    return {
        gameLoop
    }

})()

export default MainGame