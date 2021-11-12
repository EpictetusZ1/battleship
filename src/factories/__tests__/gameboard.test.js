import {Gameboard} from "../gameboard";

describe("Evaluate Game board Object", () => {
    const boardMock = {
        difficulty: 10,
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        defeated: false,
        increment: 0,
        shipList: [],
        shipHitTracker: [],
        ships: {
            ship1: {name: "Carrier", len: 5},
            ship2: {name: "Battleship", len: 4},
            ship3: {name: "Destroyer", len: 3},
            ship4: {name: "Submarine", len: 3},
            ship5: {name: "Patrol Boat", len: 2},
        }
    }

    test("Check object construction", () => { // Ship takes [x, y] and <optional> Axis
        let myBoard = new Gameboard()
        expect(myBoard).toMatchObject(boardMock)
    })

    test("Check that Game board can place Ship.", () => {
        let myBoard = new Gameboard()
        myBoard.addShip([5, 4])
        expect(myBoard.grid).toStrictEqual([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        )
    })
})