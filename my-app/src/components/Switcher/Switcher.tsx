import React, { useState } from 'react';
import './Switcher.css';

type SwitcherPropsType = {
    // on: boolean
}

export function Switcher(props: SwitcherPropsType) {
    let [on, setOn] = useState(false);
    return(
        <div>
            <button
                type='button'
                className={on ? 'on' : ''}
                onClick= {() => { setOn(true); }}
            >On</button>
            <button 
                type='button'
                className={on ? '' : 'off'}
                onClick={() => { setOn(false); }}
            >Off</button>
            <span className={on ? 'on bulb' : 'off bulb'}></span>
        </div>
    )
}