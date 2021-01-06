import './App.css';
import { NavBar } from './components/navBar'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedList from './components/feedList'
import AddModal from './components/addModal';
import { Provider } from 'react-redux'; 
import store from './store';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <NavBar></NavBar>
          <Container>
            <AddModal />
            <FeedList />
          </Container>
        </div>
      </Provider>

    );
  }
}

export default App;
