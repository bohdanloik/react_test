import React, { useState } from 'react';

export function RatingUncontrolled() {
    let [selectedNumber, setselectedNumber] = useState(0);
    return (
        <div>
           <Star checked={selectedNumber > 0}/> 
           <button
                onClick={()=> {
                    setselectedNumber(1) 
                }}
           >1</button>
           <Star checked={selectedNumber > 1}/> 
           <button 
                onClick={()=> {
                    setselectedNumber(2) 
                }}
            >2</button>
           <Star checked={selectedNumber > 2}/> 
           <button 
                onClick={()=> {
                    setselectedNumber(3) 
                }}
            >3</button>
           <Star checked={selectedNumber > 3}/> 
           <button 
                onClick={()=> {
                    setselectedNumber(4) 
                }}
            >4</button>
           <Star checked={selectedNumber > 4}/> 
           <button 
                onClick={()=> {
                    setselectedNumber(5) 
                }}
           >5</button>
        </div>
    )
}

type StarPropsType = {
    checked: boolean
}

function Star(props: StarPropsType) {
    return props.checked ? <span><b>Star</b></span> : <span>Star</span>;
}