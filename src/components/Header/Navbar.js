import React, { Component } from 'react';
import './Navbar.css'
 import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../actions';


class Header extends Component {
  handleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/Product');
    this.props.fetchAllPosts()
  }

  render() {
    return (
      <div style={{width: "100%"}}>
          <navbar className="navbar fixed-top" >
            <button onClick={this.handleFetchAllPost}>Product</button>
            <Link to="Cart"><button>Cart</button></Link>
            </navbar>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch=> ({
  fetchAllPosts: ()=> dispatch(actions.fetchAllPosts())
})

export default withRouter(connect(null, mapDispatchToProps)(Header));
