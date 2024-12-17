

const Deliveryupdateform = () => {
  return (
    <div>
      <div className="paymentform p-md-5 p-3">
        <div className="heading">
          <h2><span></span> Delivery update</h2>
        </div>
      
      <form className="row row-cols-1 g-3 p-md-5 w-md-50 ">
  <div className="col-md-12 col-12">
    <label for="validationDefault01" className="form-label">Product Id</label>
    <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  
    
  
  
  <div className="col-md-12 col-12">
    <label for="validationDefault05" className="form-label">Delivery update</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>

  <div className="col-12  text-center">
    <button className="btn btn-primary" type="submit">submit</button>
  </div>
</form>

      </div>
    </div>
  )
}

export default Deliveryupdateform