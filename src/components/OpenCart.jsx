import React from 'react'
import "./css/OpenCart.css"
function OpenCart({openCart}) {
    return (
        <div id="openCart" onClick={()=>openCart()}  className="container-fluid cartOpenBtn fixed d-block d-md-none mt-3">
        <div className="row  px-2 py-3">
          <div className="col-4 text-left"><i className="fa fa-shopping-cart"  aria-hidden="true"></i></div>
          <div className="col-4 text-center">View Cart</div>
          <div className="col-4 text-right">Rs. <span>1093</span></div>
        </div>
      </div>
    )
}

export default OpenCart
