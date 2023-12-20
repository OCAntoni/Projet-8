import React, { useState } from 'react'
import Data from "../../datas/apropos.json"
import Accordion from '../accordion-apropos/accordion-apropos'
import "../../styles/main.scss"

function LayoutApropos() {
    return (
        <div className="liste-div">
            {Data.map((datas)=> (
                <Accordion  key={datas.id} title={datas.title} text={datas.description} />
            ))}
        </div>
    )
}

export default LayoutApropos