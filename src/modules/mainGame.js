import {Gameboard} from "../factories/gameboard";
import {Player} from "../factories/player";
import DomInteract from "./DOMInteract";

const MainGame = (() => {

    const gameLoop = () => {
        const p1Board = new Gameboard()
        const p2Board = new Gameboard()

        const player1 = new Player("Player 1", true)
        const player2 = new Player("Computer", true, false)

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
        const alertWinText = document.querySelector(".ready-text")

        p2.addEventListener("click", (e) => {
            let data = e.target.getAttribute("data").split("")
            let intData = [parseInt(data[0]), parseInt(data[1])]
            doTurn(intData)
        })

        const updateAttack = (data, board) => {
            let queryData = "" + data[0] + data[1]
            let singleSquare = board.querySelector(`[data="${queryData}"]`)
            if (data[2] === 2) {
                singleSquare.classList.add("miss")
            } else if (data[2] === 5) {
                singleSquare.classList.add("hit")
            }
        }

        const checkWin = () => {
            if (p1Board.defeated === true) {
                alertWinText.innerHTML = "The Computer Won! You lost."

            }
            else if (p2Board.defeated === true) {
                alertWinText.innerHTML = "You Won!"
            }
        }

        const doTurn = (attack) => {
            if (p1Board.defeated === false && p2Board.defeated === false) {
                if (player1.isTurn) {
                    let updateAtk = p2Board.receiveAttack(attack)
                    updateAttack(updateAtk, p2)

                    let move = player2.computerMove()
                    let updateAttack2 = p1Board.receiveAttack(move)
                    updateAttack(updateAttack2, p1)
                    checkWin()
                }
            }
        }

        let readyDisplayed = false
        const loopGame = () => {
            if (readyDisplayed === false) {
                if (p1Board.ready === true ) {
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