import React, {useState} from "react";
import "./EightBall.css";
import answers from "./answers.json";

function EightBall() {
    const [message, shakeEightBall] = useState({"msg": "Ask a Question", "color": "black"});

    function handleClick(evt) {
        let randomIdx = Math.floor(Math.random() * answers.length);
        shakeEightBall(answers[randomIdx]);
    }

    return (
        <div className="EightBall" style={{backgroundColor: message.color}} onClick={handleClick}>
            <p>{message.msg}</p>
        </div>
    )
}

export default EightBall;