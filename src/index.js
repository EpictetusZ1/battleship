import "./styles/style.css"
import mainGame from "./modules/mainGame"
import MakePage from "./modules/makePage";

const loadContent = () => {
    MakePage.loadBackground()
}

const runGame = () => {
    mainGame.gameLoop()
}

loadContent()
runGame()


