import React, { useState } from 'react'
import ModeContext from './ModeContext';

const ModeState = (props) => {
    const [mode, setMode] = useState("light");

    const toggleMode = () => {

        if (mode !== "dark") {
            setMode("dark");
            document.body.style.backgroundColor = 'black';
            document.body.style.color = "white"
        }
        else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
            document.body.style.color = "black"
        }
    }
    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeState
