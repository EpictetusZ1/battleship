import {Gameboard} from "../factories/gameboard";
import {Player} from "../factories/player";

const MainGame = (() => {

    const gameLoop = () => {
        const p1Board = new Gameboard()
        const p2Board = new Gameboard()

        const player1 = new Player("Jack", true)
        player1.isTurn = true
        const player2 = new Player("Robot", true)

        const mockShips = () => {
            p1Board.addShip( [5, 4] )
            p1Board.addShip([4, 4] )
            p1Board.addShip( [2, 4] )
            p1Board.addShip( [3, 2] )
            p1Board.addShip( [0, 1] )

            p2Board.addShip( [5, 4] )
            p2Board.addShip([4, 4] )
            p2Board.addShip( [2, 4] )
            p2Board.addShip( [3, 2] )
            p2Board.addShip( [0, 1] )
        }
        mockShips()

        let increment = 0

        const doTurn = () => {
            increment++
            if (player1.isTurn ) {
                p2Board.receiveAttack( player1.computerMove() )
                player1.isTurn = false
                player2.isTurn = true
            } else if(player2.isTurn) {
                p1Board.receiveAttack( player2.computerMove() )
                player2.isTurn = false
                player1.isTurn = true
            }
        }

        const loopGame = () => {
            while (p1Board.defeated === false && p2Board.defeated === false) {
                if (increment < 200) {
                    doTurn()
                } else return
            }
        }
        loopGame()
    }

    return {
        gameLoop
    }

})()

export default MainGame