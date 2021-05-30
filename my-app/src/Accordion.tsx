import React from 'react';

type AccardionType = {
    title: string
    collapsed: boolean
}
type AccardionTitleType = {
    name: string
}

 export function Accordion (props: AccardionType) {
     if(props.collapsed) {
        return (
            <div>
                <AccordionTitle name = { props.title }/>
                <AccordionBody/>
            </div>
        )
     }
    else 
        return (
        <div>
            <AccordionTitle name = { props.title }/>
        </div>
    )
}

function AccordionTitle (props: AccardionTitleType) {
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