const getCoords = ((e) => {

    const p1 = document.getElementById("p1Grid")
    const p2 = document.getElementById("p2Grid")

    const coords = () => {
        let data = e.target.getAttribute("data")
        return [data[0], data[1]]
    }

    return {
        coords
    }
})()

export default getCoords