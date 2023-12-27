import starActive from "../../assets/star-active.svg"
import starInactive from  "../../assets/star-inactive.svg"
import "../../styles/main.scss"

function Rating({notation}) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {stars.map((ratingStar) => 
                notation >= ratingStar ? (
                    <img className="stars" key={ratingStar} src={starActive} alt="notation étoile active"></img>
                  ) :  <img className="stars" key={ratingStar}  src={starInactive} alt="notation étoile inactive"></img>
            )}
        </div>
    )
}

export default Rating