import { Link } from "react-router-dom"


const Paymentform = () => {
  return (
    <div>
      <div className="paymentform p-md-5 p-3">
        <div className="heading">
          <h2><span><i className="bi bi-credit-card"></i></span>  Payment Form</h2>
        </div>
      
      <form className="row row-cols-1 g-3 p-md-5 w-md-50 ">
  <div className="col-md-12 col-12">
    <label for="validationDefault01" className="form-label">Customer name</label>
    <input type="text" className="form-control" id="validationDefault01" required/>
  </div>

  <div className="col-md-12 col-12">
    <label for="validationDefault01" className="form-label">Product id</label>
    <input type="text" className="form-control" id="validationDefault01"  required/>
  </div>
  
    
  <div className="col-md-12">
    <label for="validationDefault03" className="form-label">Address</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-12 col-12">
    <label for="validationDefault03" className="form-label">Phone number</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  
  <div className="col-md-12 col-12">
    <label for="validationDefault05" className="form-label">Email ID</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12  text-center">
    <Link to={"/users/collections/paymentform/deliverybill"}> <button className="btn btn-primary" type="submit">Place order</button></Link>
  </div>
</form>

      </div>
    </div>
  )
}

export default Paymentform