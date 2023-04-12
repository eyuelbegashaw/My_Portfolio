import "./App.css";

//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
