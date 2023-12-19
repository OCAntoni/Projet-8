import Header from "../components/header/header.jsx"
import Footer from "../components/footer/footer.jsx"
import BannerHome from "../components/banner-home/banner-home.jsx"
import CardsHome from "../components/cards-home/cards-home.jsx"
import "../styles/main.scss"


function Home () {
    return (
        <div>
           <Header /><BannerHome /><CardsHome /><Footer />
        </div>
    )
}

export default Home