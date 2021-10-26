import {Gameboard} from "../gameboard";

describe("Evaluate Game board Object", () => {

    const myBoard = new Gameboard(8, 5)

    const shipMock = {
        difficulty: 8,
        shipCount: 5,
        grid: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    test("Check object construction", () => { // Ship takes [x, y] and <optional> Axis
        expect(myBoard).toMatchObject(shipMock)
    })

    test("Check that Game board can place Ship.", () => {
        myBoard.placeShip([5, 5])
        expect(myBoard).toMatchObject({
            difficulty: 8,
            shipCount: 5,
            grid: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, null, null, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]}
        )
    })

    test("Check for equality in array.length at max length", () => {
        myBoard.placeShip([5, 6])
        expect(myBoard).toMatchObject({
            difficulty: 8,
            shipCount: 5,
            grid: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, null, null],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        })
    })

    test("Check to ensure error message is thrown and caught if ship.length > gird X || Y", () => {
        expect(myBoard.placeShip([8, 8])).toBe("Ship off game board area.")
    })
})