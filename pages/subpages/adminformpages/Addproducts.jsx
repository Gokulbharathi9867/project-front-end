import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
 


const Addproducts = () => {
 
 
  
  return (
    <div>
      <div className="paymentform p-md-5 p-3">
        <div className="heading">
          <h2><span><i className="bi bi-credit-card"></i></span>  Add products</h2>
        </div>
      
      <form className="row row-cols-1 g-3 p-md-5 w-md-50 ">
      <div className="col-md-12 col-12">
    <label for="validationDefault01" className="form-label">Product name</label>
    <input type="text" className="form-control" id="validationDefault01" name="productname"  required/>
  </div>
  
    
  <div className="col-md-12">
    <label for="validationDefault03" className="form-label">Material type</label>
    <input type="text" className="form-control" id="validationDefault03"  required/>
  </div>
  <div className="col-md-12 col-12">
    <label for="validationDefault03" className="form-label">Size</label>
    <input type="text" className="form-control" id="validationDefault03"   required/>
  </div>
  
  <div className="col-md-12 col-12">
    <label for="validationDefault05" className="form-label">Price</label>
    <input type="text" className="form-control" id="validationDefault05"
     required/>
  </div>
  
  <div className="col-12  text-center">
    <Link to={"/admin/collection"}> <button className="btn btn-primary" type="submit" >submit</button></Link>
  </div>

</form>

      </div>
    </div>
  )
}

export default Addproducts