import './App.css';
import { NavBar } from './components/navBar'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedList from './components/feedList'

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
        <FeedList></FeedList>
      </div>
    );
  }
}

export default App;
