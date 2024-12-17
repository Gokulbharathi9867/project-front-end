import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"



const Orderdetails = () => {

  const [users, setUsers] = useState([]);

const getallusers = async () => {
  await axios.get("http://localhost:3000/ecommerce/users").then
  ((res) => {
    console.log(res.data);
    setUsers(res.data)
   
  });
}
useEffect(()=>{
  getallusers();
 
},[]);
  return (
    <div>
      <div className="h1 p-3">
        <h1>Order Details</h1>
      </div>
       <div>
          <div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  gap-3">
    {users && users.map((users,index)=>{
      return(
        <div className="col">
        <div className="card" key={users.productid}>
      <img src={users.uploadpic} className="card-img-top w-100" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{users.deliverystatus}</h5>
        <ul className="list-group">
        <li className="list-group-item">{users.productid}</li>
        <li className="list-group-item">{users.productname}</li>
      <li className="list-group-item">{users.materialtype}</li>
      <li className="list-group-item">Size - {users.size}</li>
      <li className="list-group-item">{users.price} ₹</li>
     
    </ul>
       <Link to={"/users/orderdetails/paymentform"}><a href="#" className="btn btn-primary">Review here</a></Link> 
      </div>
    </div>
        </div>

      )
    }
    
    )}
   
   
  </div>
</div>
          </div>
    </div>
  )
}

export default Orderdetails