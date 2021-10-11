import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Project.css";


const Project = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://pacific-fortress-78541.herokuapp.com/findProjects")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        console.log("Service==t=  ", data);
      });
  }, []);

  return (
    <div style={{marginTop:'20px',backgroundColor:'lightGray'}}>
            <h1 style={{textAlign:'center',color:'blue'}}>FIND YOUR PROJECTS</h1>
            <div className="d-flex justify-content-center">
                <div className="grid">
                    {
                        serviceData.map((d,id) => {
                            return (
                                <div key={id} style={{backgroundColor:'gray',height:'350px',width:'350px',borderRadius:'15px',marginTop:'20px'}}>
                                    <div className="d-flex justify-content-center ">
                                    <div style={{marginTop:'20px'}}>
                                    <img style={{ height: '200px', width: '350px' }} src={d.imageUrl} alt="" />
                                    <h4>{d.projectName}</h4>
                                    <Link className="btn btn-primary" to={`/details/${d._id}`}>Details</Link>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  );
};

export default Project;
