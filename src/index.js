import mainGame from "./modules/mainGame"
import "./styles/style.css"
import MakePage from "./modules/makePage";

const loadContent = () => {
    MakePage.loadBackground()
}

const runGame = () => {
    mainGame.gameLoop()
}
loadContent()
runGame()