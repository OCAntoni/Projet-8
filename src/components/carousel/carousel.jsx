import { useState } from "react"
import LeftArrow from "../../assets/arrow-left.png"
import RightArrow from"../../assets/arrow-right.png"
import "../../styles/main.scss"

function Carousel({images}) {
   const [isArrow , setIsArrow]= useState(1)

   function back() {
       (isArrow === 1) ? setIsArrow(isArrow + (images.length-1)) : setIsArrow(isArrow - 1)
   }

   function next() {
       (isArrow === images.length) ? setIsArrow(isArrow - (images.length-1)) : setIsArrow(isArrow + 1)
   }
   
   return (
      <div>
         <img className="img-galery" src={images[isArrow-1]} alt="photo ilustrant le logement" />
            {images.length > 1 ? (
               <div>
                  <div>
                     <img className="arrow arrow-right" src={RightArrow} alt="fleche changement photo vers la droite" onClick={()=> next()}/>
                     <img className="arrow arrow-left"  src={LeftArrow} alt="fleche changement photo vers la gauche" onClick={() => back()}/>
                  </div>
                  <p className="counter-images">{isArrow}/{images.length}</p>
               </div>
           ):null }
       </div>
   )
}

export default Carousel