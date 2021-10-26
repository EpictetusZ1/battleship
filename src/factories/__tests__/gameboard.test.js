import {Gameboard} from "../gameboard";

describe("Evaluate Game board Object", () => {

    const boardMock = {
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
        let myBoard = new Gameboard(8, 5)
        expect(myBoard).toMatchObject(boardMock)
    })

    test("Check that Game board can place Ship.", () => {
        let myBoard = new Gameboard(8, 5)
        myBoard.placeShip(2,[5, 5])
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
        let myBoard = new Gameboard(8, 5)
        myBoard.placeShip(2, [5, 6])
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
        let myBoard = new Gameboard(8, 5)
        expect(myBoard.placeShip(2, [8, 8])).toBe("Ship off game board area.")
    })

    test("Check placement of ship along Y Axis", () => {
        let myBoard = new Gameboard(8, 5)
        myBoard.placeShip(2, [5, 6], "y")
        expect(myBoard).toMatchObject({
            difficulty: 8,
            shipCount: 5,
            grid: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [null, 0, 0, 0, 0, 0, 0, 0],
                [null, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        })

    })

    test("Check Error if partial overlap", () => {
        let myBoard = new Gameboard(8, 5)
        myBoard.placeShip(2, [5, 6], "y")
        expect(myBoard.placeShip(2, [5, 5], "y")).toBe("Ship overlaps with another")
    })

    test("Check Error full overlap", () => {
        let myBoard = new Gameboard(8, 5)
        myBoard.placeShip(2, [5, 6], "y")
        expect(myBoard.placeShip(2, [5, 6], "y")).toBe("Ship overlaps with another")
    })
})

describe("Evaluate Public UI methods", () => {
    let myBoard = new Gameboard(8, 5)

    test("Check if receive attack sends coords", () => {
        let hit

        let e = jest.fn(() => { return {data: 55} })

        let miss = jest.fn( () => { hit = false})

        expect(myBoard.receiveAttack(e)).toBe(miss)
    })

})
