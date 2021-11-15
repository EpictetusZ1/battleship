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
                DomInteract.placeShips(p1Board)
                DomInteract.highLight()
            }
            p2Board.addShip( [5, 4] )
            p2Board.addShip( [4, 4] )
            p2Board.addShip( [2, 4] )
            p2Board.addShip( [3, 2] )
            p2Board.addShip( [0, 1] )
        }
        mockShips()


        const p1 = document.getElementById("p1Grid")
        const p2 = document.getElementById("p2Grid")

        p2.addEventListener("click", (e) => {
            let data = e.target.getAttribute("data").split("")
            let intData = [parseInt(data[0]), parseInt(data[1])]
            doTurn(intData)
        })

        const updateAttack = (data, board) => {

            console.log(data)
            let queryData = "" + data[0] + data[1]
            let singleSquare = board.querySelector(`[data="${queryData}"]`)
            if (data[2] === 2) {
                // Handles miss
                singleSquare.classList.add("miss")
            } else if (data[2] === 5) {
                // Handle hit
                singleSquare.classList.add("hit")
            }
        }

        const doTurn = (attack) => {
            if (p1Board.defeated === false && p2Board.defeated === false) {
                if (player1.isTurn) {
                    let updateAttk = p2Board.receiveAttack(attack)
                    updateAttack(updateAttk, p2)
                    player1.flipTurn()
                    player2.flipTurn()
                } else if (player2.isTurn) {
                    let updateAttk = p1Board.receiveAttack(player2.computerMove())
                    updateAttack(updateAttk, p1)
                    player1.flipTurn()
                    player2.flipTurn()
                }
            }
        }

        let readyDisplayed = false
        const loopGame = () => {
            if (readyDisplayed === false) {
                if (p1Board.ready === true ){
                    DomInteract.readyAlert()
                    readyDisplayed = true
                }
                setTimeout( loopGame, 1000) // Check once a second if game is ready
            }
        }
        loopGame()
    }

    return {
        gameLoop
    }

})()

export default MainGame