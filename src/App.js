import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Home text */}
      <h1 className="home-text">SRIHAN<span className="break-down">CHAKRABORTY</span> </h1>
      {/*alt texts*/}
      <p className="alt-text bg">artwork by:<span className="grey"> @srihanchakraborty</span></p>

      <div className="sections">
        <section id="abt">
          <About />
        </section>
        <section id="proj">
          <Projects />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
