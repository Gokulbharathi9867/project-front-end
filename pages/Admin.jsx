import { Route, Routes } from "react-router-dom"
import ANavbar from "./subpages/adminformpages/ANavbar"
import Admincollection from "./subpages/adminformpages/Admincollection"
import Reviewstatus from "./subpages/adminformpages/Reviewstatus"
import Addproducts from "./subpages/adminformpages/Addproducts"
import Orderstatus from "./subpages/adminformpages/Orderstatus"


const Admin = () => {
  return (
    <div>
     {/* <ANavbar/>/ */}
     {/* <Routes>
       <Route path="/admin" element={<Admincollection/>} /> 
       <Route path="/addproducts" element={<Addproducts/>} /> 
       <Route path="/orderstatus"  element={<Orderstatus/>} />
       <Route path="/reviewstatus"  element={<Reviewstatus/>} />
        </Routes>    */}
    </div>
  )
}

export default Admin