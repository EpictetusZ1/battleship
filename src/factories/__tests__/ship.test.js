import {Ship} from "../ship";

describe("Evaluate Ship Object ", () => {
    let myShip = new Ship(5, [1, 2])

    test("Check to make sure ship isnt sunk before hits", () => {
        expect(myShip.sunk).toBe(false)
    })

    test("Check object output", () => {
        expect(myShip).toMatchObject({
            hitTracker: [1, 1, 1, 1, 1],
            position: [1, 2],
            axis: "x",
            sunk: false,
            hitArea: [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
            ]
        })
    })

    test("Check if Ship updates its value(s) after hit()", () => {
        expect(myShip.hit([1, 2])).toBe(5)
    })

    test("Check if ship is sunk after N of hits", () => {
        myShip.hit([1, 2])
        myShip.hit([1, 3])
        myShip.hit([1, 4])
        myShip.hit([1, 5])
        myShip.hit([1, 6])

        expect(myShip.sunk).toBe(true)
    })

})