import React, { useState } from 'react';

type AccordionUncontrolledType = {
    title: string
}

export function AccordionUncontrolled(props: AccordionUncontrolledType) {
    let [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle name={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            { !collapsed && <AccordionBody /> }
        </div>
    )
}

type AccardionTitleType = {
    name: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

function AccordionTitle(props: AccardionTitleType) {
    return <h3
        onClick={() => {
            props.setCollapsed(!props.collapsed)
        }
    }>{ props.name }</h3>
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