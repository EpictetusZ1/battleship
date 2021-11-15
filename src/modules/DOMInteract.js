const DomInteract = (() => {

    let shipLengths = [5, 4, 3, 3, 2]

    const highLight = () => {
        const p1 = document.getElementById("p1Grid")
        const allSquares = document.querySelectorAll(".gridY")

        const highlightSquares = (e) => {
            let dataStr = e.target.getAttribute("data")
            let shipLen = shipLengths[0]
            let shipNodes = []

            for (let i = 0; i <= shipLen; i++) {
                let newString = parseInt(dataStr.slice(1)) + i
                let newData = dataStr.charAt(0) + newString

                let singleSquare = document.querySelector(`[data="${newData}"]`)
                singleSquare.classList.toggle("preview")
                shipNodes.push(singleSquare)

            }
            e.target.addEventListener("mouseout", () => {
                shipNodes.forEach((el) => el.classList.remove("preview"))
                shipNodes = []
            })
        }

        p1.addEventListener("mouseover", (e) => {
            try {
                highlightSquares(e)
            } catch (Error) {
                allSquares.forEach((el) => el.classList.remove("preview"))
                console.log("Off Gameboard area")
            }
        })
    }

    const coords = (board) => {
        const p1 = document.getElementById("p1Grid")
        const p2 = document.getElementById("p2Grid")

        p1.addEventListener("click", (e) => {
            let dataStr = e.target.getAttribute("data")
            let data = dataStr.split("")
            return board.addShip([parseInt(data[0]), parseInt(data[1])])
        })

        p2.addEventListener("click", (e) => {
            let dataStr = e.target.getAttribute("data")
            let data = dataStr.split("")
            return board.addShip([parseInt(data[0]), parseInt(data[1])])
        })

    }

    return {
        coords,
        highLight
    }
})()

export default DomInteract