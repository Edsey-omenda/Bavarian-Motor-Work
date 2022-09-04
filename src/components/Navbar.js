import React from 'react'


export default function Home(){

    return(
        <div className="text-bg-info p-3">
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="bmw">Offcanvas dark navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="bmwoffcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="bmw">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="bmw">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="bmw" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="bmw">Action</a></li>
                    <li><a className="dropdown-item" href="bmw">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="bmw">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form class="d-flex" role="search">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </div>
        </nav>
        </div>
        )
}