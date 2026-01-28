import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <CTA />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;