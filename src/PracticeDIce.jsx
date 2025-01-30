import "./PracticeDice.css"
import PracticeDie from "./PracticeDie"
export default function Dice({ dice }) {
    return (
        <section>
            {dice.map((n, i) => (
                <PracticeDie num={n} key={i} />
            ))}
        </section>
    )
}