import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Search from '../Pages/Search/Search';




function Navbar(key) {


    return (
        <div className="container-fluid" style={{ background: "#f57f26" }}>
            <div className='row'>
                <div className='navcontainer'>
                    <div className='navcontent'>
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link" to="/signup">Signup</Link>
                        <Link className='nav-link' to="/login">Login</Link>
                        {/* <Link className='nav-link' to="/profile">profile</Link> */}
                        {/* <Link className="nav-link" to="/moviepage/:id">Moviepage</Link> */}
                        {/* <Link className="nav-link disabled">Disabled</Link> */}
                        <Link className='nav-link' to='/favourite'>Favourite</Link>
                    </div>
                    <div className='navbar_search'>
                        <Search />
                        <Link to='/profile'><button className='button btnprofile'>Profile</button></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar