import "./app.css"
import Login from "./loginform/Login"
import Admin from "./pages/admin"
import Addproducts from "./pages/subpages/adminformpages/Addproducts"
import Admincollection from "./pages/subpages/adminformpages/Admincollection"
import ANavbar from "./pages/subpages/adminformpages/ANavbar"
import Orderstatus from "./pages/subpages/adminformpages/Orderstatus"
import Reviewstatus from "./pages/subpages/adminformpages/Reviewstatus"
import Collection from "./pages/subpages/collection"
import Footer from "./pages/subpages/Footer"
import Deliverybill from "./pages/subpages/formpages/Deliverybill"
import Paymentform from "./pages/subpages/formpages/Paymentform"
import Reviewform from "./pages/subpages/formpages/Reviewform"
import Navbar from "./pages/subpages/Navbar"
import Orderdetails from "./pages/subpages/Orderdetails"
import Users from "./pages/users"
import {BrowserRouter , Routes ,Route, Link } from "react-router-dom"

function App() {
   


  return (
    <>
  
  <div>
     
       <Navbar/>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/collection" element={<Collection/>}/>
        <Route path="/users/collection/paymentform" element={<Paymentform/>} />
        <Route path="/users/collections/paymentform/deliverybill" element={<Deliverybill/>} />
        
        
        

        <Route path="/users/orderdetails" element={<Orderdetails/>} />
        <Route path="/users/orderdetails/paymentform" element={<Reviewform/>} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/collection" element={<Admincollection/>} /> 
       <Route path="/admin/addproducts" element={<Addproducts/>} /> 
       <Route path="/admin/orderstatus"  element={<Orderstatus/>} />
       <Route path="/admin/reviewstatus"  element={<Reviewstatus/>} />
      </Routes>
      <Footer/> 
    
  </div>
    

    </>
  )
}

export default App
