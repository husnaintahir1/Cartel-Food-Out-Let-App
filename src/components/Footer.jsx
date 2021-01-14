import React from 'react'

import "./css/footer.css"

function Footer() {
    return (
     <div>
          
  <div className="footer text-center">
    <img className="footerImg" src="assets/Asset 1.png" alt=""/>
    <div>
      <a href=""><i className="fa fa-facebook-square socialIcons" aria-hidden="true"></i></a>
      <a href=""><i className="fa fa-twitter socialIcons mr-3 ml-3" aria-hidden="true"></i></a>
      <a href=""><i className="fa fa-linkedin socialIcons" aria-hidden="true"></i></a>
    </div>
    <p>
      © 2020 Demo Online Ordering System - Developed By <b> Createch Solutions</b>
    </p>


  </div>
  
 
    </div>
    )
}

export default Footer
