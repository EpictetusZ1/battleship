const MakePage = (() => {

    const content = document.getElementById("content")

    const makeGrid = (parent) => {
        for (let i = 0; i < 10; i++) {
            let gridElementX = document.createElement("div")
            gridElementX.className = "gridX"
            for (let j = 0; j < 10; j++) {
                let gridElementY = document.createElement("div")
                gridElementY.className = "gridY water"
                gridElementY.setAttribute("data", `${i}${j}`)
                gridElementX.append(gridElementY)
            }
            parent.append(gridElementX)
        }
    }

    const loadBackground = () => {
        const titleCont = document.createElement("div")
        titleCont.className = "title-container"
        titleCont.textContent = "BATTLESHIP"
        content.append(titleCont)

        const gameContainer = document.createElement("div")
        gameContainer.className = "game-container"

        const p1Cont = document.createElement("div")
        p1Cont.className = "player-container"

        const p1Title = document.createElement("div")
        p1Title.className = "player-name-container"
        p1Title.textContent = "Your Fleet"

        const p1Grid = document.createElement("div")
        p1Grid.id = "p1Grid"
        p1Grid.className = "player-grid"

        const p2Cont = document.createElement("div")
        p2Cont.className = "player-container"

        const p2Title = document.createElement("div")
        p2Title.className = "player-name-container"
        p2Title.textContent = "Enemy Fleet"

        const p2Grid = document.createElement("div")
        p2Grid.id = "p2Grid"
        p2Grid.className = "player-grid"

        makeGrid(p1Grid)
        makeGrid(p2Grid)

        p1Cont.append(p1Title, p1Grid)
        p2Cont.append(p2Title, p2Grid)

        gameContainer.append(p1Cont, p2Cont)
        content.appendChild(gameContainer)
    }



    return {
        loadBackground
    }

})()
export default MakePage