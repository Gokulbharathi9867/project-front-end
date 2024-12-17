import { NavLink } from "react-router-dom"


const ANavbar = () => {
  return (
    <div>
        <div className="navbar" >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Menswear</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink to={"/admin/collection"}><a className="nav-link active" aria-current="page" href="#">Collections</a></NavLink> 
         </li>
         <li className="nav-item">
          <NavLink to={"/admin/orderstatus"}><a className="nav-link" href="#">Order Status</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/admin/reviewstatus"}><a className="nav-link" href="#">Review Status</a></NavLink>
        </li>
        </ul>
      
        
        <button className="btn btn-outline-success" type="submit">Log out</button>
   
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default ANavbar