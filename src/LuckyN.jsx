import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice"
function LuckyN({ title = "Dice game", numDice = 2, goal = 7, wincheck }) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = wincheck(dice)
    const roll = () => setDice(getRolls(numDice))
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"} </h1>
            <Dice dice={dice} />
            <button onClick={roll} >Re Roll DIce</button>
        </main>
    )
}

export default LuckyN; 