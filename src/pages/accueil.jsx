import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import BannerHome from "../components/banner-home.jsx"
import CardsHome from "../components/cards-home.jsx"
import "../styles/header.scss"


function Home () {
    return (
        <div>
           <Header /><BannerHome /><CardsHome /><Footer />
        </div>
    )
}

export default Home