
const getCoords = ((e) => {

    const coords = () => {
        let data = e.target.getAttribute("data")
        return [data[0], data[1]]
    }

    return {
        coords
    }
})()

export default getCoords