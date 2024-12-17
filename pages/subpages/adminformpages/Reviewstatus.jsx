
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const Reviewstatus = () => {

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
       <table class="table">
  <thead>
    <tr>
    <th scope="col">Product id</th>
      <th scope="col">Productname</th>
      <th scope="col">Product image</th>
      <th scope="col">material type</th>
      <th scope="col">size</th>
      <th scope="col">price</th>
      <th scope="col">Review Status</th>
      <th scope="col">Delete</th>
     
    </tr>
  </thead>
  <tbody>
  {users && users.map((users,index) =>{
   
   return(
    <tr key={users.id}>
    <th scope="row">{users.productid}</th>
    <td>{users.productname}</td>
    <td><img src={users.uploadpic} alt="" width={50}/></td>
    <td>{users.materialtype}</td>
    <td>{users.size}</td>
    <td>{users.price}</td>
    <td>{users.review}</td>
    <td><button className="btn">Delete</button></td>
    
  </tr>
   )

  }

)}
    
  </tbody>
</table>
    </div>
  )
}

export default Reviewstatus