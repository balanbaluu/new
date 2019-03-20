import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Cart.css'
import * as actions from '../../actions'

export class Cart extends Component {
  render() {
    const {items}= this.props;
    return (
      <div>
       <div className="col-sm-12 text-center ">
        <h1>Shopping Cart</h1>
        </div>
      <div className='box-cart-table'>
    <table>
      <thead>
        <tr className='header'>
        <th className='_center'>PRODUCT</th>
          <th className='_center'>QTY</th>
          <th className='_right'>PRICE</th>
          <th className='_right'>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {items.map((post, i) => (
          <React.Fragment>
          <tr>
            <td>
              <div className='cart-product'>
                <img src={"http://localhost:4000/"+post.photo} style={{width: "150px", height: "15Su0px", pointerEvents: "none"}} />
                <div className='name'>{post.pname}</div>
              </div>
            </td>
            <td className='_right'>1</td>
            <td className='_right'>{post.price}</td>
            <td className='cart-icon'>
            <i className="fas fa-trash"></i>
            </td>
          </tr>
</React.Fragment>
        ))}
      </tbody>
    </table>
    <div >
            <h5 className="subtotal">SUBTOTAL:</h5>
            <br/>
            <div className="checkout">
            <button className="button1">CHECKOUT</button>
            </div>
          </div>
  </div>
  </div>
    )
  }
}
const mapStateToProps=state=>({
  items:state.fetchPost.items
  })
  
export default  connect(mapStateToProps, null)(Cart)
