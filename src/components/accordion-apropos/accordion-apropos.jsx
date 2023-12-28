import React, { useState } from 'react'
import ArrowUp from "../../assets/arrow-up.png"
import "../../styles/main.scss"

function Accordion(props){
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="listes" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="titre">{props.title} <img className={isOpen? "arrow-up-close":"arrow-up"} src={ArrowUp} alt="flèche vers le haut"></img></h2>
        <p dangerouslySetInnerHTML={{ __html: props.text}} className={isOpen? "text-hidden" : "text"}></p>
        </div>
    )
}

export default Accordion
