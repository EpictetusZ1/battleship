import {Gameboard} from "../gameboard";


describe("Gameboard state and public methods", () => {


    test("Check place ship", () => { // Ship takes [x, y] and <optional> Axis
        const coords = jest.fn(() => [5,5])

        const myBoard = new Gameboard(10, 5)

        expect(Gameboard.placeShip()).toMatchObject({
            difficulty: 10,
            shipCount: 5


        })
    })
})