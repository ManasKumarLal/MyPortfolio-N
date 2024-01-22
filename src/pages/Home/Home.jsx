import Contact from "../contact/Contact";
import Project from "../project/Project";
import About from "../about/About";
import LandingPage from "../LandingPage/Landingpage";
import { MyProvider } from "../project/context/Provider";

function Home() {

    return (
        <>
            <LandingPage />
            <About />
            <MyProvider>
                <Project />
            </MyProvider>
            <Contact />
        </>
    );
}

export default Home;
