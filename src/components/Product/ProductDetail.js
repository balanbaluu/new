import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import './ProductDetail.css'





const image = 'image/';
const images = [{ name:''}];


class ProductDetails extends Component {
     addToCart=(_id)=>{
          console.log(`hello from add to cart,${_id}`);
      }
     get srcSet() {
          return images.map(image => {
               return `${image.name} ${image.vw}`;}).join(', ')}
                    render() {
                         const {obj} = this.props.location.state
                         console.log(obj)
               return(
                    <div className="container">
                         <div className="row">
                              <div className="col-sm-6">
                                   <div className="image">
                                        <ReactImageMagnify {...{
                                             smallImage: {
                                             alt: 'apple from London',
                                             isFluidWidth: true,
                                             src: 'http://localhost:4000/'+obj.photo,
                                             sizes: '(min-width: 500px) 33.5vw, (min-width: 215px) 25vw, 50vw',
                                             },
                                             largeImage: {
                                             alt: '',
                                             src:'http://localhost:4000/'+obj.photo,
                                             width: 1000,
                                             height: 500,
                                             },
                                             isHintEnabled:false
                                        }}/>
                                        <p style={{backgroundColor:"#5f5f5f"}}>hello</p>
                                   </div>
                              </div>
                              <div className="copy">
                                   <h1>{obj.pname}</h1>
                                   <p>SIZES</p>
                                   <div>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio"/>Option 1
                                        </label>
                                        <br/>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio"/>Option 2
                                        </label>
                                        <br/>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio" />Option 3
                                        </label>
                                   </div>
                                        <br/>
                                        <br/>
                                   <p>GET 20% OFF</p>
                                        <br/>
                                   <p>MRP:<del>RS 80.00</del></p>
                                        <br/>
                                   <p>include all Taxes</p>
                                        <br/>
                                   <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                             <span class="input-group-text" >QTY</span>
                                        </div>
                                             <input type="text" class="form-control col-2" />
                                        <div style={{paddingLeft:"30px"}}>
                                             <button className="btn btn-warning" disable={obj.inCart ? true : false} onClick={() =>console.log('value added to cart')}>ADD<i className="fas fa-shopping-cart"></i></button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
          )
     }
}

export default ProductDetails;
