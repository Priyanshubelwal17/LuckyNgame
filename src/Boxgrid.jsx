import { useState } from "react";
import Box from "./Box";

function Boxgrid() {
    const [boxes, setBoxes] = useState([true, false, false, false, false, false, false, false, false])
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false])
    }

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value
                } else {
                    return value
                }
            })
        })
    }

    return (
        <div className="BoxGrid" >
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggleBox={() => toggleBox(idx)} />
            ))}
            <button onClick={reset} >Reset</button>
        </div>

    )
}

export default Boxgrid;