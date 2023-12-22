import Contact from '../contact/Contact'
import Project from '../project/Project'
import About from '../about/About'
import LandingPage from '../LandingPage/Landingpage'


function Home() {

    return (
        <>
            <LandingPage />
            <About />
            <Project />
            <Contact />
        </>
    )
}

export default Home
