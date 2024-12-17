import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


const Collection = () => {
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
// search
// const handlesearch = (e) =>{

//   const searchtext= e.target.value.toLowerCase();
//   const filterusers = users.filter((users)=>users.productname.
// toLowerCase().includes(searchtext) || users.price.
// toLowerCase().includes(searchtext) );
// setfilterusers(filterusers);

// }
// delete
// const handledelete = async(id) => {
// await axios.delete("http://localhost:3000/ecommerce/user/:id").then((res) => {
//   setUsers(res.data)
// })


// }


  return (
    <div>
          {/* search */}
        <div>
        {/* <nav className="navbar bg-body-tertiary">
           
  <div className="container-fluid">
   
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handlesearch}/>
      
    </form>
  </div>
</nav> */}
        </div>
          {/* search */}
          {/* collection */}
          <div>
          <div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-3 p-5">
    {users && users.map((users,index)=>{
      return(
        <div className="col" key={users.productid}>
    <div className="card ">
  <img src={users.uploadpic} className="card-img-top w" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{users.productname}</h5>
    <ul className="list-group">
    <li className="list-group-item">{users.productid}</li>
  <li className="list-group-item">{users.materialtype}</li>
  <li className="list-group-item">{users.size}</li>
  <li className="list-group-item">{users.price}</li>
 
</ul>
    <Link to={"/users/collection/paymentform"}><a href="#" className="btn btn-primary">buy now</a></Link><hr />
    {/* <button className="btn btn-primary" onClick={()=> handledelete(users.id)}>delete</button> */}
    {/* <h6>Customer Reviews</h6>
    <h5 className="card-title">{users.review}</h5> */}
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     Customer Review
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{users.review}</div>
    </div>
  </div>
  </div>
  </div>
</div>
    </div>
      )
    })}
   
  </div>
</div>
          </div>
          {/* collection */}
    </div>
  )
}

export default Collection