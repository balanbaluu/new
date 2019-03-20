import React, { Component } from 'react'
import './Cart.css'
import {connect} from 'react-redux'

export class Cart extends Component {
  render() {
    const {items}= this.props;
    return (
      <div className="container">
      <div className="col-sm-12 text-center ">
        <h1>Shopping Cart</h1>
        </div>
         <hr style={{size:'30px'}}/>
        <div className="row">
        <div className="col-10 mx-auto col-lg-2">
      <p> Product Image</p>
       </div>
       <div className="col-10 mx-auto col-lg-2">
       <p>Product Name</p>
       </div>
       <div className="col-10 mx-auto col-lg-2">
       <p>Price</p>
       </div>
       <div className="col-10 mx-auto col-lg-2">
       <p>Delete</p>
       </div>
       </div>
       {items.map((post, i) => (
        <div className="row my-2 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
    <img src={"http://localhost:4000/"+post.photo} style={{width:"5rem",height:"5rem"}} 
    className="img-fluid" alt="product"/>
    </div>
       <div className="col-10 mx-auto col-lg-2">
       {post.pname}
       </div>
        <div className="col-10 mx-auto col-lg-2">
      {post.price}
       </div>
{/*       
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
      <div className="d-flex justify-content-center">
      <div>
          <span className="btn btn-black mx-1" onClick={()=>decrement(_id)}>-</span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={()=>increment(_id)}>+</span>


      </div>

      </div>
      </div> */}
    <div className="col-10 mx-auto col-lg-2">
    <div className="cart-icon">
    <i className="fas fa-trash"></i>
    </div>
       </div>
    
      </div>
    ))}
        </div>
    )
  }
}


const mapStateToProps=state=>({
  items:state.fetchPost.items
  })
  
export default  connect(mapStateToProps, null)(Cart)
