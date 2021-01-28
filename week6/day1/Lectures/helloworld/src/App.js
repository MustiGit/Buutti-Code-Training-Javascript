import './App.css';
import Buttons from './components/buttons';
import Bingo from './components/bingo';
import ReUsableComponent from './components/ReUsableComponent';

const Component = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    </div>
  )
}

const Component2 = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <Component name = "Sami" />
      <Component2 name = "Pertti" />
      <ReUsableComponent number={2} string="joo" />
      <ReUsableComponent number={1} string="joo" />
      <Buttons />
      <Bingo />
    </div>
  );
}

export default App;

// Base stripped version //

/* import './App.css';

const component = () => {
  return {
    <p>${props.name}</p>
  }
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
}

export default App;

*/

// Another component inside version //

/* 

import './App.css';

const Component = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <Component name = "Sami" />
    </div>
  );
}

export default App; 

*/

// 2 Components added //

/* 

import './App.css';

const Component = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    </div>
  )
}

const Component2 = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <Component name = "Sami" />
      <Component2 name = "Pertti" />
    </div>
  );
}

export default App;

*/