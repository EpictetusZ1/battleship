import {Player} from "../player";

describe("Evaluate Player Object", () => {
    const myPlayer = new Player("Jack")
    const mockHit = [5, 5]

    const myComputer = new Player("Bob the robot", true)

    test("Check Players ability to Attack Game board.", () => {
        expect(myPlayer.attack(mockHit)).toStrictEqual([5, 5])
    })

    test("Check computer can generate attack coords array", () => {
        expect(Array.isArray(myComputer.computerMove())).toBe(true)
    })

    let coords = myComputer.computerMove()
    test("Check coords are 0 - 9", () => {
        expect(coords[0] <= 9 && coords[0] >= 0).toBe(true)
    })

    test("Check coords are 0 - 9", () => {
        expect(coords[1] <= 9 && coords[0] >= 0).toBe(true)
    })
})
