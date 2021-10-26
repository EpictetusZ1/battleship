import {Ship} from "../ship";

describe("Evaluate Ship Object ", () => {
    let myShip = new Ship(5, [1, 2])

    const mockHit = jest.fn( () => [1, 2])

    test("Check object output", () => {
        mockHit.mockReturnValue([1, 3])
        expect(myShip).toMatchObject({
            hitTracker: [0, 0, 0, 0, 0],
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
        expect(myShip.hit(mockHit)).toEqual(myShip.hitTracker[0] === 1)
    })

    test("Check if ship is sunk after N of hits", () => {
        myShip.hit([1, 2])
        myShip.hit([1, 3])
        myShip.hit([1, 4])
        myShip.hit([1, 5])
        myShip.hit([1, 6])

        expect(myShip).toMatchObject({
            hitTracker: [1, 1, 1, 1, 1],
            position: [1, 2],
            axis: "x",
            sunk: true,
            hitArea: [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
            ]
        })
    })

})