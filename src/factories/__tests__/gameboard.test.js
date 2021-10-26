import {Gameboard} from "../gameboard";


describe.skip("Check Game board state & public methods", () => {

    const coords = jest.fn(() => [5, 5])

    const myBoard = new Gameboard(10, 5)

    const myShip = {
        len: [0, 0, 0, 0, 0],
        position: [1, 3]
    }

    test("Check place ship method", () => { // Ship takes [x, y] and <optional> Axis
        expect(Gameboard).toMatchObject({
            difficulty: 8,
            shipCount: 5,
            gridSize: 64,
        })
    })

    test.skip("Check length of ship to ensure it is on the Game board", () => {

    })

    test.skip("Check to make sure entire ship is still on the board.", () => {

    })
})