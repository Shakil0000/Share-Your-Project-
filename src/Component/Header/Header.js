import React from "react";
import './Header.css';
import pic from "./background.jpg";
const Header = () => {
  return (
    <div className="mainHeader" style={{height:'200px',width:'100%'}}>
          <div className="header" style={{width:'100%',height:'100%',backgroundImage: `url(${pic})`}} >
               <h1 className="header-text">SHARE YOUR PROJECT HEAR</h1>
          </div>
    </div>
  );
};

export default Header;
