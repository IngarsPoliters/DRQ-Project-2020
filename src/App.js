import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar'
import { render } from '@testing-library/react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
