import Collection from "./subpages/collection"
import Navbar from "./subpages/Navbar"
import { Routes , Route } from "react-router-dom"
import Orderdetails from "./subpages/Orderdetails"
import Paymentform from "./subpages/formpages/Paymentform"
import Reviewform from "./subpages/formpages/Reviewform"
import Deliverybill from "./subpages/formpages/Deliverybill"
import Footer from "./subpages/Footer"

const Users = () => {
  return (
    <div>
{/*       
      <Navbar/>
      <Routes>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/collection/paymentform" element={<Paymentform/>} />
        <Route path="/collections/paymentform/deliverybill" element={<Deliverybill/>} />
        
        
        

        <Route path="/orderdetails" element={<Orderdetails/>} />
        <Route path="/orderdetails/paymentform" element={<Reviewform/>} />
      </Routes>
      <Footer/> */}
      
    </div>
  )
}

export default Users