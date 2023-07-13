import React, {useEffect, useState} from 'react'

const BoxComponent = () => {

    const [color, setColor] = useState(`rgb(0,0,0)`);

    const changeColor = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        setColor(`rgb(${red},${green},${blue})`);
    }

    useEffect(() => {
        let timerId;
        const onMouseOver = () => {
        timerId = setInterval(changeColor, 1000);
        };
        const onMouseOut = () => {
        clearInterval(timerId);
        };
        const onDoubleClick = () => {
            clearInterval(timerId);
        };
        const div = document.getElementById('box');
        div.addEventListener('mouseover', onMouseOver);
        div.addEventListener('mouseout', onMouseOut);
        div.addEventListener('dblclick', onDoubleClick);
        return () => {
        div.removeEventListener('mouseover', onMouseOver);
        div.removeEventListener('mouseout', onMouseOut);
        div.removeEventListener('dblclick', onDoubleClick);
        clearInterval(timerId);
        };
    }, []);

    
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div id="box" className="border mx-auto m-3 " 
                style={{ backgroundColor:color, width: "255px", height: "255px"}}
                onMouseOver={changeColor}>
            </div>
        </div>
    )
}

export default BoxComponent;
