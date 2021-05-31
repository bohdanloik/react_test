import React from 'react';
import './Switcher.css';

type SwitcherPropsType = {
    on: boolean
}

export function Switcher(props: SwitcherPropsType) {
    return(
        <div>
            <button type='button' className={props.on ? 'switcherOn' : ''}>On</button>
            <button type='button' className={!props.on ? 'switcherOff' : ''}>Off</button>
            <span className={props.on ? 'switcherOn bulb' : 'switcherOff bulb'}></span>
        </div>
    )
}