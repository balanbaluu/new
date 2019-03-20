import React, { Component } from 'react'
import './Sidebar.css'


export class Sidebar extends Component {
  render() {
    return (
      <div>
          <div id="sidebar-left">
              <h6 className="text-center"> categories</h6>
              <hr/>
              <div className="text-center">
                  <p><a  href="#">fruits& vegitabled</a></p>
                  <p><a  href="#">fresh fruits</a></p>
                  <p><a  href="#">beverages</a></p>
                  <p> <a  href="#">snacks</a></p>
                  <p> <a  href="#">bakery</a></p>
              </div>
          </div>
      </div>
    )
  }
}

export default Sidebar
