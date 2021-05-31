import React, { useState } from 'react';

export function RatingUncontrolled() {
    let [selectedNumber, setSelectedNumber] = useState(0);
    return (
        <div>
           <Star checked={selectedNumber > 0} setSelectedNumber={setSelectedNumber} value={1}/> 
           <Star checked={selectedNumber > 1} setSelectedNumber={setSelectedNumber} value={2}/> 
           <Star checked={selectedNumber > 2} setSelectedNumber={setSelectedNumber} value={3}/> 
           <Star checked={selectedNumber > 3} setSelectedNumber={setSelectedNumber} value={4}/> 
           <Star checked={selectedNumber > 4} setSelectedNumber={setSelectedNumber} value={5}/> 
        </div>
    )
}

type StarPropsType = {
    checked: boolean
    value: number
    setSelectedNumber: (value: number) => void
}

function Star(props: StarPropsType) {
    return <span
        onClick={() => {
            props.setSelectedNumber(props.value)
        }}
    >{props.checked ? <b> Star</b> : ' Star'}</span>;
}