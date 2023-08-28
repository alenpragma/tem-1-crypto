import Choose from "./Choose";
import Graph from "./Graph";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Token from "./Token";

const Home = () => {
    return (
        <div>
            <Hero />
            <Choose />
            <Graph />
            <Roadmap />
            <Token />
        </div>
    );
};

export default Home;