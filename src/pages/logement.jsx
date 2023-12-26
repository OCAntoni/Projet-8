import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from "../datas/appartements.json"
import Header from "../components/header/header"
import Carousel from "../components/carousel/carousel"
import Rating from '../components/rating-logements/rating.jsx'
import Accordion from '../components/accordion-apropos/accordion-apropos'
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
            <div className='lodge-body'>
                <Header />
                <div className='galery'>
                    <Carousel images={logement.pictures} alt={logement.title} />
                </div>
                <div className='infos-host'>
                    <div className='infos'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={`Image représentant ${logement.host.name}`} />
                </div>
                </div>
                <div className='tags-rating'>
                    <div className='tags'>
                        {logement.tags.map((tag) =>(
                            <ul>
                                <li>{tag}</li>
                            </ul>
                        ))}
                    </div>
                    <Rating notation={logement.rating} />
                </div>
                <div className='descriptif'>
                    <Accordion title="Description" text={logement.description} />
                    <Accordion title="Equipements" text={logement.equipments} /> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logement