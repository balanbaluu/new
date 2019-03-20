import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product/Product';
import ProductDetails from './components/Product/ProductDetail';
import Header from './components/Header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Cart from './components/Cart/Cart';
//import CheckOut from './components/Cart/CheckOut';
// import Default from './components/Default/Default';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <Router>
              <div>
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Sidebar/>
                    <Switch>
                        <Route exact path='/Cart' component={Cart}/>
                        <Route path='/Product' component={Product}/>
                        <Route path= '/:ProductDetails' component={ProductDetails}/>
                        {/* <Route  component={Default}/> */}
                    </Switch>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
