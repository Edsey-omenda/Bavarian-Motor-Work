import React from 'react'
import { Link } from "react-router-dom";


export default function Home(){

    return(
        <div className="text-bg-info p-3">
        <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
  <ul className="nav nav-pills mb-3" id="pills-tabContent" role="tablist">
        < li className="nav-item" role="presentation">
        <Link className='nav-link ' to="/">Home</Link>
        </li>
 </ul>
  <Link className='nav-link text-white h4' to="/">Home</Link>
    <h5 className="text-white h4">Home</h5>
    <h5 className="text-white h4">Models</h5>
    <h5 className="text-white h4">Reviews</h5>
  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
        </div>
        )
}