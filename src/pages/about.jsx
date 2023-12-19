import Header from "../components/header/header.jsx"
import BannerApropos from "../components/banner-apropos/banner-apropos.jsx"
import LayoutApropos from "../components/layout-a-propos/layout-apropos.jsx"
import Footer from "../components/footer/footer.jsx"
import "../styles/main.scss"

function About () {
    return (
        <div>
            <Header /><BannerApropos /><LayoutApropos /><Footer />
        </div>
    )
}

export default About