
const Ship = (len, position) => {
    const getLength = () => Array.from(Array(len).keys())

    const getPosition = () => position

    const hit = (position) => {
        return len[position] = 1
    }

    const isSunk = () => getLength() > 0


    return {len, position, hit, isSunk}
}

module.exports = Ship