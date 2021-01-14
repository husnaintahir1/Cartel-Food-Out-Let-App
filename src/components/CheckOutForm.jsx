import React from 'react'
import "./css/form.css"

function CheckOutForm() {
    return (
        <div className=" formContainer">

        <form>
            <h1 className="pt-5 mb-5">Checkout form</h1>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" id="Fname" placeholder="Please enter First Name"/>
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" id="Lname" placeholder="Please Enter Last Name"/>
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="EmailAddress" placeholder="name@example.com"/>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input type="number" className="form-control" id="phoneNumber" placeholder="03xxxxxxxxx"/>
              </div>

              <div className="form-group">
                <label>Area</label>
                <input type="email" className="form-control" id="Area" placeholder="Enter your Area"/>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input type="email" className="form-control" id="Address" placeholder="Please Enter Adress"/>
              </div>
           
            
            <div className="form-group">
              <label >Order Instructions / Note to rider</label>
              <textarea className="form-control" id="textArea" rows="3" placeholder="Extr Note"></textarea>
            </div>
          </form>
      </div>

    
    
    )
}

export default CheckOutForm
