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
        ],
        ships: [1, 2, 3, 4, 5],
        defeated: false
}

    test("Check object construction", () => { // Ship takes [x, y] and <optional> Axis
        let myBoard = new Gameboard(8, 5)
        expect(myBoard).toMatchObject(boardMock)
    })

    test("Check that Game board can place Ship.", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [5, 5]]
        myBoard.addShip(myShip)
        expect(myBoard.grid).toStrictEqual([
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        )
    })

    test("Check for equality in array.length at max length", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [5, 6]]
        myBoard.addShip(myShip)
        expect(myBoard.grid).toStrictEqual([
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ])
    })

    test("Check to ensure error message is thrown and caught if ship.length > gird X || Y", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [8, 8]]
        expect(myBoard.addShip(myShip)).toBe("Ship off game board area.")
    })

    test("Check placement of ship along Y Axis", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [5, 6], "y"]
        myBoard.addShip(myShip)
        expect(myBoard.grid).toStrictEqual(
           [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        )
    })

    test("Check Error if partial overlap", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [5, 6], "y"]
        myBoard.addShip(myShip)
        let secondShip = [2, [5, 5], "y"]
        expect(myBoard.addShip(secondShip)).toBe("Ship overlaps with another")
    })

    test("Check Error full overlap", () => {
        let myBoard = new Gameboard(8, 5)
        let myShip = [2, [5, 6], "y"]
        myBoard.addShip(myShip)
        let secondShip = [2, [5, 5], "y"]
        expect(myBoard.addShip(secondShip)).toBe("Ship overlaps with another")
    })
})

describe("Evaluate Public UI methods", () => {
    let myBoard = new Gameboard(8, 5)

    test("Check if game board marks miss", () => {
        expect( myBoard.receiveAttack([0, 0]) ).toBe(2)
    })

    const defeatMock = jest.fn(() => {
        for (let i = 0; i < 5; i++) {
            let myShip = [3, [i, 0], "y"]
            myBoard.addShip(myShip)
        }
    })

    test("Check reporting.", () => {
        expect(myBoard.grid).toStrictEqual([
                [5, 5, 5, 0, 0, 0, 0, 0],
                [5, 5, 5, 0, 0, 0, 0, 0],
                [5, 5, 5, 0, 0, 0, 0, 0],
                [5, 5, 5, 0, 0, 0, 0, 0],
                [5, 5, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        )})

})



