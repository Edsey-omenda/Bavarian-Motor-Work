import React from 'react'
import { Link } from "react-router-dom";


export default function Home(){

    return(
        <div className="text-bg-info p-3">
        <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
  <ul className="nav nav-pills mb-3" id="pills-tabContent" role="tablist">
        < li className="nav-item" role="presentation">
        <Link className='nav-link text-blue h4' to="/">Home</Link>
        <Link className='nav-link text-blue h4' to="/models">Models</Link>
        <Link className='nav-link text-blue h4' to="/reviews">Reviews</Link>
        </li>
 </ul>
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