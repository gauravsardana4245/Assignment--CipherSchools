import React from 'react'
import logo from "../img/logo.svg"
import icon from "../img/icon.png"
import "../styles.css"

const Navbar = () => {
    const styleNavRight = {
        gap: "25px",
        alignItems: "center"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className=" d-flex justify-content-between w-100 px-25 h-60">
                    <div className='svg h-15 w-21 mx-2 icon'>
                        <i className=" fa-solid fa-bars"></i>
                    </div>
                    {/* <a className="navbar-brand icon" href="/">
                        
                    </a> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link icon-text active" aria-current="page" href="/">
                                    <img className='navbar-brand icon h-100' src={icon} alt="" />
                                    <b>CipherSchools </b></a>
                            </li>

                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class=" mx-2 fa-sharp fa-regular fa-compass"></i>
                                    Browse
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>

                        </ul>
                    </div>

                    <div style={styleNavRight} className='navbar-right d-flex justify-content-between'>
                        <div className="search-box d-flex" role="search">
                            <div>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='inputText'>
                                <input className=" me-2" id='navbarSearch' type="search" placeholder="Search and Learn" aria-label="Search" />
                            </div>
                            <div className="d-flex slider">
                                <i className="fa-sharp fa-solid fa-sliders"></i>
                            </div>
                        </div>
                        <i className="svg fa-regular fa-bell"></i>
                        <img src="" alt="" />
                        <img src={logo} alt="" />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
