import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Highlights />
            <Model />
            <Features />
        </main>
    );
};

export default App;
