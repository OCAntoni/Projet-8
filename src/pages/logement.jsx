import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from "../datas/appartements.json"
import Header from "../components/header/header"
import Carousel from "../components/carousel/carousel"
import Footer from "../components/footer/footer"
import Error from './error'
import "../styles/main.scss"

function Logement() {
    let {id} = useParams()
    let logements = Data
    let logement = logements.find((item) => {
        if (item.id == id) {  
        return true;
        }
        return false;
    })
    console.log(logement)
    return (
        <div>
            <Header />
           <div>
        {logement.pictures.map((photos) => (
            <img src={photos} />
        ))}
        </div>

            <Footer />
           
        </div>
    )
}

export default Logement