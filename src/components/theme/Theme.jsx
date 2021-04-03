import './Theme.css';
import { useState } from 'react';

function Theme(props) {
    const [bgColor, setBgColor] = useState(props.InitialbgColor);
    const colors = ["red","green","blue","yellow","magenta","midnightblue","palegreen"]

    if(!colors.includes(props.InitialbgColor)) {
        return (
            <p>Please specifiy initial color from: {colors.join(", ")}</p>
        )
    }

    const onColorChange = (color) => {
        setBgColor(color)
    };

    return(
        <div>
            <div className="color-picker color-red" onClick={() => onColorChange("red")}></div>
            <div className="color-picker color-green" onClick={() => onColorChange("green")}></div>
            <div className="color-picker color-blue" onClick={() => onColorChange("blue")}></div>
            <div className="color-picker color-yellow" onClick={() => onColorChange("yellow")}></div>
            <div className="color-picker color-magenta" onClick={() => onColorChange("magenta")}></div>
            <div className="color-picker color-midnightblue" onClick={() => onColorChange("midnightblue")}></div>
            <div className="color-picker color-palegreen" onClick={() => onColorChange("palegreen")}></div>
            <div className={['theme-text-div',`color-${bgColor}`].join(" ")}>{props.textInside}</div>
        </div>
    );
}

export default Theme;