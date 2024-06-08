import mole from './mole'
import {useState } from 'react';
import EmptySlot from './EmptySlot';


function MoleContainer(props) {
    lest [displayMole, setDisplayMole]= useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMike(false); 
    }

    let showMole = displayMole ? <Mole setScore={props.score} handleClick={handleClick} /> 
    : <EmptySlot />
    return (
        <div>
            <displayMole />
        </div>
    )
}



export default MoleContainer;


