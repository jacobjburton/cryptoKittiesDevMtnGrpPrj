import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Banner/>
          <Header/>
          <Loader/>
        </div>
          {routes}
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
