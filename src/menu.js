import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function Menu() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h2><a className="navbar-brand">LUPANAR</a></h2>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
 
 );
}

export default Menu;