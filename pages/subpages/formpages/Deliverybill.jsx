import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"



const Deliverybill = () => {

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
      <div className="card mb-3 p-5" >
        {users && users.map((users,index)=>{
          return(
            <div className="row g-0 border border-3 p-3" key={users.id} >
            <div className="col-md-4 p-md-2">
              <img src={users.uploadpic} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2>Products Bill</h2>
              <ul className="list-group list-group-flush p-md-5">
          <li className="list-group-item">{users.productid}</li>
          <li className="list-group-item">{users.productname}</li>
          <li className="list-group-item">{users.materialtype}</li>
          <li className="list-group-item">Size - {users.size}</li>
          <li className="list-group-item">{users.price} ₹</li>
          <li className="list-group-item"><Link to={"/users/collection"}><button className="btn p-3">Go to Collection</button></Link></li>
        </ul>
              </div>
            </div>
          </div>

          )
        })}
 
</div>
    </div>
  )
}

export default Deliverybill