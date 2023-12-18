import Header from "../components/header.jsx"
import BannerApropos from "../components/banner-apropos.jsx"
import LayoutApropos from "../components/layout-apropos.jsx"
import Footer from "../components/footer.jsx"
import "../styles/header.scss"

function Rooms () {
    return (
        <div>
            <Header /><BannerApropos /><LayoutApropos /><Footer />
        </div>
    )
}

export default Rooms