import {Player} from "../player";

describe("Evaluate Player Object", () => {
    const myPlayer = new Player("Jack")
    const mockHit = [5, 5]

    test("Check Players ability to Attack Game board.", () => {
        expect(myPlayer.attack(mockHit)).toStrictEqual([5, 5])
    })

    test("Check players turn is changed after attack.", () => {
        myPlayer.attack(mockHit)
        expect(myPlayer.isTurn).toBe(false)
    })

})
