import {useState } from 'react';
import EmptySlot from './EmptySlot';
import Mole from './Mole'


function MoleContainer(props) {
    let [displayMole, setDisplayMole]= useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false); 
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


