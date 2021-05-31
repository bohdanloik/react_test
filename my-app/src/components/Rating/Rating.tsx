import React from 'react';

type RatingPropsType = {
    selectedNumber: 1 | 2 | 3 | 4 | 5 | 0
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
           <Star checked={props.selectedNumber > 0}/> 
           <Star checked={props.selectedNumber > 1}/>
           <Star checked={props.selectedNumber > 2}/>
           <Star checked={props.selectedNumber > 3}/>
           <Star checked={props.selectedNumber > 4}/>
        </div>
    )
}

type StarPropsType = {
    checked: boolean
}

function Star(props: StarPropsType) {
    if(props.checked){
        return <span><b>Star</b></span>
    }
    else {
        return <span>Star</span>
    }
}

