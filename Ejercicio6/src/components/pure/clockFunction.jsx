import React, { useEffect, useState } from 'react';

const Clock = () => {
    
    const [fecha, setFecha] = useState(new Date())
    const [edad, setEdad] = useState(0)
    const nombre = 'Martín'
    const apellidos = 'San José'

    let timerID = 0;
    
    /* Debe llamarse de esta manera si o si */
    const DidmountHook = () => {
            console.log('componentDidMount')
            timerID = setInterval(() => {
            setFecha(new Date());
            setEdad(prevEdad => prevEdad + 1);
        }, 1000);
    }
    const WillunmountHook = () => {
        console.log('componentWillUnmount')
        clearInterval(timerID);
    }

    useEffect(() => {
        DidmountHook()
        return () => {
            WillunmountHook();
        };
    }, []);
    
    return (
        <div>
            <h2>
                Hora Actual:
                {fecha.toLocaleTimeString()}
            </h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );
}

export default Clock;
