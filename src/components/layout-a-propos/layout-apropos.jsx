import React, { useState } from 'react'
import Data from "../../datas/apropos.json"
import ArrowUp from "../../assets/arrow-up.png"
import "../../styles/main.scss"

function LayoutApropos() {

    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="liste-div" onClick={() => setIsOpen(!isOpen)}>
            {Data.map((datas)=> (
                <div className="listes" key={datas.id}>
                <h2 className="titre">{datas.title} <img className={isOpen? "arrow-up-close":"arrow-up"} src={ArrowUp} alt="flèche vers le haut"></img></h2>
                <p className={isOpen? "text-hidden" : "text"}>{datas.description}</p>
                </div>
                
            ))}
        </div>
    )
}

export default LayoutApropos