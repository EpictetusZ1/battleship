const Ship = require("../ship")

// Want to check AFTER hit() if (Ship.isSunk)
// Write a test to match the constructor to ensure it has valid properties?

describe("Evaluate Ship Public Methods", () => {

    const myShip = Ship(5, 2)
    const mockHit = jest.fn( () => {
        return myShip.hit(2)
    })

    test("Check if Ship updates its value(s) after hit()", () => {
        expect(mockHit()).toBe(1)
    })

})