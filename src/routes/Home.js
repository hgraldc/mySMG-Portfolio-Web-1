import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroVid={require("../assets/bannerVideo.mp4")}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home;