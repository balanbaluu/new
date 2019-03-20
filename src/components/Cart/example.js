import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Cart.css'
import * as actions from '../../actions'

export class Cart extends Component {
  render() {
    const {items}= this.props;
    return (
      <div>
      <div className='box-cart-table'>
    <table>
      <thead>
        <tr>
        <th className='_center'>product</th>
          <th className='_center'>QTY</th>
          <th className='_right'>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((post, i) => (
          <tr>
            <td>
              <div className='cart-product'>
                <img src={"http://localhost:4000/"+post.photo} style={{width: "50px", height: "50px", pointerEvents: "none"}} />
                <div className='name'>{post.pname}</div>
              </div>
            </td>
            <td className='_right'>1</td>

            <td className='_right'>{post.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
    )
  }
}
const mapStateToProps=state=>({
  items:state.fetchPost.items
  })
  
export default  connect(mapStateToProps, null)(Cart)
