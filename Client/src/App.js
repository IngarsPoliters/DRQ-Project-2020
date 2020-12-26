import './App.css';
import { NavBar } from './components/navBar'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedList from './components/feedList'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar></NavBar>
          <FeedList />
        </div>
      </Provider>

    );
  }
}

export default App;
