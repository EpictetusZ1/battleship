import {Ship} from "../ship";

let myShip = new Ship(5, [1, 2])

const mockHit = jest.fn( () => {
    return [1, 3]
})

describe("Evaluate Ship Public Methods ", () => {

    test("Check object output", () => {
        expect(myShip).toMatchObject({
            len: [0, 0, 0, 0, 0],
            position: [1, 2],
            axis: "x",
            hitArea: [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
            ]
        })
    })

    test.skip("Check if Ship updates its value(s) after hit()", () => {
        expect(myShip.hit(mockHit)).toEqual(myShip.hitArea[0] === 1)
    })

})