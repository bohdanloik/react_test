import React, { useState } from 'react';

type AccordionUncontrolledType = {
    title: string
}
type AccardionTitleType = {
    name: string
}

export function AccordionUncontrolled(props: AccordionUncontrolledType) {
    let [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle name = { props.title }/>
            <button 
                onClick={() => {
                    setCollapsed(!collapsed)
                }}
            >Toggle</button>
            { !collapsed && <AccordionBody /> }
        </div>
    )
}

function AccordionTitle(props: AccardionTitleType) {
    return <h3>{ props.name }</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}