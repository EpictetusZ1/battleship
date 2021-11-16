const DomInteract = (() => {
    let shipLengths = [5, 4, 3, 3, 2]
    let shipNodes = []

    const addPermHighlight = (nodeList) => {
        nodeList.forEach( (el) => {
            el.classList.add("ship")
        })

    }

    const readyAlert = () => {
        const readyText = document.querySelector(".ready-text")
        const errorDiv = document.querySelector(".instructionText")

        readyText.innerText = "READY"
        readyText.classList.add("is-ready")
        setTimeout(() => {
            readyText.innerText = ""
        }, 3000)
        errorDiv.innerText = ""
    }

    const highLight = () => {
        const p1 = document.getElementById("p1Grid")
        const allSquaresY = document.querySelectorAll(".gridY")
        const errorDiv = document.querySelector(".instructionText")

        const highlightSquares = (e) => {
            let dataStr = e.target.getAttribute("data")
            let shipLen = shipLengths[0]

            for (let i = 0; i < shipLen; i++) {
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
                allSquaresY.forEach((el) => el.classList.remove("preview"))
                errorDiv.innerText = "Ship Off Game board area"
                errorDiv.classList.add("alertUserErr")
                setTimeout(() => {
                    errorDiv.classList.remove("alertUserErr")
                    errorDiv.innerText = "Place Your Ship!"
                }, 1000)

            }

        })
    }

    const placeShips = (board) => {
        const p1 = document.getElementById("p1Grid")

        p1.addEventListener("click", (e) => {
            let dataStr = e.target.getAttribute("data")
            let data = dataStr.split("")
            shipLengths.shift()
            addPermHighlight(shipNodes)
            return board.addShip([parseInt(data[0]), parseInt(data[1])])
        })
    }

    return {
        placeShips,
        highLight,
        readyAlert,
    }
})()

export default DomInteract