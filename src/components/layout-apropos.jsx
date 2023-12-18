import React, { useState } from 'react'
import Data from "../datas/apropos.json"
import ArrowUp from "../assets/arrow-up.png"
import "../styles/layout-apropos.scss"

function LayoutApropos() {

    const [isContainerActive, setIsContainerActive] = React.useState(false);
    const texteCacher = () => {
        setIsContainerActive(false)
    }
    const ouvrirTexte = () => {
        setIsContainerActive(true)
    }

    return (
        <div className="liste-div">
            {Data.map((datas)=> (
                <div className="listes" key={datas.id}>
                <h2 className="titre">{datas.title} <img onClick={ouvrirTexte}className="arrow-up" src={ArrowUp} alt="flèche vers le haut"></img></h2>
                <p className="text">{datas.description}</p>
                </div>
                
            ))}
        </div>
    )
}

export default LayoutApropos