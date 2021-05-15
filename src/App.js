import PropTypes from "prop-types"
import './App.css';
import { Counter } from './Counter'
import { Accordion } from './Accordion'
import { Input } from './Input'

function App() {
  return (
    <div className="App">    
        <Input />
        <Counter />
        <Accordion />
    </div>
  );
}

function HelloWorld({name, greeting = "Hello"}) {
  return (
    <div>
      <h1>{greeting}, {name}!</h1>
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string
}

export default App;

