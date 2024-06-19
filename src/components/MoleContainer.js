import {useState, useEffect } from 'react';
import EmptySlot from './EmptySlot';
import Mole from './Mole.js'


function MoleContainer(props) {
    let [displayMole, setDisplayMole]= useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false); 
    }

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(true);
        }, randSeconds);
        return () => clearTimeout(timer)
    }, []);

 
    return (
        <div className = "moleContainer">
            {displayMole? (
                <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} />
            ) : (
                <EmptySlot setDisplayMole={setDisplayMole} />
            )}
        </div>
    )
}



export default MoleContainer;


