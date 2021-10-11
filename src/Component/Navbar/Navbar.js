import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  return (
    <div>
         <div className="menu">
             <a><Link to={`/`}>Home</Link></a>
             <a><Link to={`/user`}>User</Link></a>
             <a><Link to={`/about`}>About</Link></a>
             <a><Link to={`/admin`}>Admin</Link></a>
         </div>
    </div>
  );
};

export default Navbar;
