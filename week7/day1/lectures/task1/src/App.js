import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route path="/" exact>
        <Navigation />
        <Home />
      </Route>

      <Route path="/about" exact>
        <Navigation />
        <About />
      </Route>

      <Route path="/contact" exact>
        <Navigation />
        <Contact />
      </Route>

    </div>


  );
}

export default App;