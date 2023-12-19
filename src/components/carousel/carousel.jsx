import LeftArrow from "../../assets/arrow-left.png"
import RightArrow from"../../assets/arrow-right.png"
import Datas from "../../datas/appartements.json"
import "../../styles/main.scss"

function Carousel({}) {
   const totalPictures = Datas.pictures.length;
   const suivant = () => {Datas.pictures.length ++}
   const precedent = () => {Datas.pictures.length --}

   return (
    <div>
      
    </div>
   )
}

export default Carousel