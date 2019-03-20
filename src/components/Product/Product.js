import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
import './Product.css';
import * as actions from '../../actions'
import ProductDetails from './ProductDetail';
import { CLIENT_RENEG_LIMIT } from 'tls';

class Product extends Component {
    state={
        count: 0,
        itemId: ''
    }
        increment =(id) =>{
            // console.log(id)
            // to do 
            // 1. loop from redux store items
            //  2. if(ids are the same increment )else {
                // return false
            // }
            const storeItems= this.props.items;
            console.log(storeItems);

            this.setState({
                itemId: id
            })
            
            for(let i =0; i < storeItems.length; i++){
                if(id === storeItems[i]._id){
                    console.log(id, storeItems[i]._id)
                     this.setState({
                    count:this.state.count + 1
                        
                  })
                    console.log(id === storeItems[i]._id)

                    
                }else{
                    return false;
                }
           }
        };

        decrement =(id) =>{
            const storeItems= this.props.items;
            console.log(storeItems)


           for(let i =0; i<storeItems.length; i++){
                if(id === storeItems[i]._id){
                    // call your dispatch action here
                    let id = storeItems[i]._id
                    this.setState((prev)=>({count: prev.count - 1}))
                    console.log(id)

                    
                }else{
                    return false;
                }
           }
        }
        onSubmit =(e)=> {
            e.preventDefault();
        }
        addToCart=(_id)=>{
            console.log(`hello from add to cart ${_id}`);
        }

render() {
    const {items}= this.props;
    const {count}= this.state;
return (
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row" >
    { items.map((post)=>(
    
    <div className="col-3 py-3 px-1" key={post._id}>
        <div className="card">
            <div className="img-container">
                <p style={{textAlign:"right",color:"red"}}>GET25%<i className="fas fa-star"></i></p>
                    <hr style={{height:"1px",border:"none",backgroundColor:"green"}} />
                    <br/>
                    <Link to={{
                        pathname: '/ProductDetails',
                        state: { obj: post}}
                    }>
                    <div className="product-image">
                    <div className="text-center">
                        <img src={"http://localhost:4000/"+post.photo} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
                        <div className="text-sm-center text-dark btn"><h5 >{post.pname}</h5>
                        </div>
                    </div>
                    </div>
                    </Link>
                        <hr/>
                    <form  onSubmit={this.onSubmit}>
                        <div className="form-group  ">
                            <div className="input-group input-group-sm justify-content-center">
                                <input type="text" className="form-control col-5"></input>
                                <select className="form-control col-5" name="">
                                <option >KiloGram.</option>
                                <option >Gram.</option>
                                </select>
                            </div>
                        </div>
                        <span  className="text-center"><p>MRP:<del>Rs 15</del><ins> {post.price}</ins></p></span>
                        <div>
                        <div className="text-center">
                        QTY
                            <button onClick={ () =>this.decrement(post._id)}>-</button>
                                <span>{post._id === this.state.itemId ? count : 0}</span>
                            <button onClick={ ()=>this.increment(post._id)}>+</button>
                            
                              </div>
                        </div> 
                        <br style ={{lineHeight:"1px"}}/>
                        <div className="text-center">
                            <button className="btn btn-warning cart-btn-sm col-5" disabled={post.inCart ? true:false} onClick={()=>{console.log('added to the cart')}}>{post.inCart?(<p className="text-capitalize mb-0" disabled>{""}inCart</p>):(<i className="fas fa-shopping-cart">Cart</i>)}</button>
                        </div>
                    </form>
                        <br style ={{lineHeight:"1px"}}/>
            </div>
        </div>
    </div> 
    ))
    }
        
    </div>
</div>
)
}

}


Product.propTypes={
items: PropTypes.array
}

const mapStateToProps=state=>({
items:state.fetchPost.items
})

// const mapDispatchToProps =dispatch=>({
//     handleIncrement: ()=> dispatch(actions.handleIncrement()),
//     handleDecrement: ()=> dispatch(actions.handleDecrement())
// })

export default connect(mapStateToProps, null)(Product)
