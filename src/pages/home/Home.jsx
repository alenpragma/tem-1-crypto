import AppSection from "./AppSection";
import Choose from "./Choose";
import Graph from "./Graph";
import Hero from "./Hero";
import Map from "./Map";
import Roadmap from "./Roadmap";
import Support from "./Support";
import Token from "./Token";

const Home = () => {
    return (
        <div>
            <Hero />
            <Choose />
            <Graph />
            <Roadmap />
            <Token />
            <Map />
            <AppSection />
            <Support />
        </div>
    );
};

export default Home;