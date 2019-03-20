import React, { Component } from 'react';
import { Navbar, Card, Form, Col, Button } from 'react-bootstrap';
import './CheckOut.css'

class CheckOut extends Component {
  render() {
    return (
      <div >
        <div className="col-sm-9">
          <Card style={{marginTop: 10}}> 
              <Card.Body ><i class="fas fa-map-marker-alt" style={{margin: 5}}></i>
                      Delivery Address
              </Card.Body>
              <div style={{backgroundColor: 'whitesmoke', margin: 10}}>
                <div style={{margin: 15}}>
                  <h6>Personal Details</h6>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label>Enter First Name</Form.Label>
                      <Form.Control style={{width: 250}} type="email" placeholder="" />
                      </Form.Group>
                
                        <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label>Enter Last Name</Form.Label>
                        <Form.Control style={{width: 250}} type="email" placeholder="" />
                        </Form.Group>
                
                      <Form.Group  as={Col} controlId="formBasicEmail">
                          <Form.Label><span style={{color: 'red'}}>*</span>Enter Contact Number</Form.Label>
                      <Form.Control style={{width: 250}} type="email" placeholder="" />
                      </Form.Group>
                      </Form.Row>
                  </Form>

                  <h6>Address Details</h6>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label><span style={{color: 'red'}}>*</span>House No</Form.Label>
                      <Form.Control style={{width: 250}} type="email" placeholder="" />
                      </Form.Group>
                
                        <Form.Group as={Col} controlId="formBasicEmail" style={{paddingRight: 140}}>
                          <Form.Label>Enter apartment Name</Form.Label>
                        <Form.Control style={{width: 500}} type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicEmail" >
                          <Form.Label>Enter streat details</Form.Label>
                        <Form.Control style={{width: 400}} type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicEmail" >
                          <Form.Label>Enter landmark for easy reach out</Form.Label>
                        <Form.Control style={{width: 410}} type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label>Enter city name</Form.Label>
                      <Form.Control style={{width: 250}} type="email" placeholder="" />
                      </Form.Group>
                
                        <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label><span style={{color: 'red'}}>*</span>Area details</Form.Label>
                        <Form.Control style={{width: 250}} type="email" placeholder="" />
                        </Form.Group>
                
                      <Form.Group  as={Col} controlId="formBasicEmail">
                          <Form.Label ><span style={{color: 'red'}}>*</span>Enter Pincode</Form.Label>
                      <Form.Control style={{width: 250}} type="email" placeholder="" />
                      </Form.Group>
                      </Form.Row>

                      <Button variant="primary" type="submit">
                        ADD ADDRESS
                      </Button>
                      <Button variant="primary" type="submit" style={{margin: 10}}>
                        CANCEL
                      </Button>
                  </Form>
                </div>
              </div>
          </Card>

          <Card  style={{marginTop: 10}}> 
              <Card.Body ><i class="fas fa-truck" style={{margin: 5}}></i>
                Delivery Options
              </Card.Body>

              <Form.Check
                type="radio"
                label="Default Delivery Option"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />

              <div style={{backgroundColor: 'whitesmoke', margin:  10}}>
                <h6 style={{margin: 5}}><i class="fas fa-shipping-fast" style={{margin: 5}}></i>Shipment 1: Standard Delivery</h6>
                <div style={{paddingLeft: 400}}>
                <select id = "dropdown" ref = {(input)=> this.menu = input} style={{marginBottom: 10}}>
                    <option value="N/A">Select Time Slot</option>
                    <option value="1">TOMORROW 9:30 AM - 12:00 PM</option>
                    <option value="2">MONDAY</option>
                    <option value="3">TUESDAY</option>
                    <option value="4">WEDNESDAY</option>
                </select>  
                </div>            
              </div>
          </Card>

          <Card  style={{marginTop: 10}}> 
              <Card.Body ><i class="far fa-credit-card" style={{margin: 5}}></i>
                Payment Options
              </Card.Body>

              <div style={{backgroundColor: 'whitesmoke', margin:  10}}>
              <Form.Check
                type="radio"
                label="Default Payment Option"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />
              <Card style={{width: 500, height: 150, margin: 10}}>
              <img height="140px" src="https://www.cs-cart.in/images/detailed/1/paytm-01.jpg" style={{margin: 5}} />
              </Card>
               
              <div style={{backgroundColor: 'whitesmoke', margin:  10}}>
              <Form.Check
                type="radio"
                label="Payment Options With Offers"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />
              <Card style={{width: 500, height: 150, margin: 10}}>
              <img height="140px" src="https://image3.mouthshut.com/images/imagesp/925865141s.png" style={{margin: 5}} />
              </Card>
              </div>

              <div style={{backgroundColor: 'whitesmoke', margin:  10}}>
              <Form.Check
                type="radio"
                label="Other Payment Options"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />
              <Card style={{width: 500, height: 150, margin: 10}}>
              <Form.Check
                type="radio"
                label="Credit Card / Debit Card / Net Banking"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />
              <Form.Check
                type="radio"
                label="FreeCharge"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                style={{margin: 20}}
              />
              </Card>
              </div>  
              </div>

              <div >
              <Button style={{margin: 5, width: 250, height: 80, variant: 'primary', position: 'absolute', right: 0}}>Place Order & Pay</Button>                
              </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default CheckOut;
