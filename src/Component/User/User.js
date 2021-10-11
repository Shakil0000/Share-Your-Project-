import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const User = () => {

  const [loggedIUser, setLoggedInUser] = useContext(UserContext);
 
   
  const submit = () => {
    const textInput = document.getElementById("textInput").value;
    const textInputt = document.getElementById("textInputt").value;
    console.log("Text Input ===", textInput);
    console.log("textInputt ===", textInputt);
    console.log("ImagUrll--222=", imageUrl);

    const evenData = {
      projectName: textInput,
      projectDescription: textInputt,
      imageUrl: imageUrl,
      item: "project",
      email: loggedIUser.email 
    };
    console.log(evenData);
    const url = `https://pacific-fortress-78541.herokuapp.com/addProject`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(evenData),
    }).then((res) => console.log("server side response =", res));
  };

  const [imageUrl, setImageUrl] = useState(null);
  const handleImageUpload = (event) => {
    console.log("Event == ", event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ea1e0f874b7dfa60db2530499e0538d5");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        console.log("ImageUrl==", imageUrl);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  // Users Item showing and Delete section ...................................

  const [serviceData, setServiceData] = useState([]);
  console.log("EmailVai=",loggedIUser.email);
  console.log("DataVai=",serviceData);

  useEffect(() => {
    fetch(`https://pacific-fortress-78541.herokuapp.com/findUserProjects/${loggedIUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  //   Delete Section..................... 
  function itemDelete(id) {
    fetch(`https://pacific-fortress-78541.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Deleted successfully ");
        if (result) {
          window.location.reload(false);
        }
      });
  }

  return (
    <div style={{backgroundColor:'lightGray',margin:'10px 0px'}}>

      <section>
        <h1 style={{ textAlign: "center" }}>Upload Your Project Here</h1>
      </section>

      <section style={{ backgroundColor: "gray",borderRadius:'50px',padding:'50px',margin:'50px 50px'}}>
        <div >
          {/* <input type="file" name="" id="" onChange={handleImageUpload} /><br />
                         <input type="text" id="textInput" /><br />
                         <textarea name="" id="textInputt" cols="30" rows="2"></textarea>
                         <button onClick={submit}>Submit</button> */}
          <div class="mb-3">
            <label for="formFile" class="form-label">UPLOAD PICTURE</label>
            <input class="form-control" type="file" id="formFile" onChange={handleImageUpload}></input>
         </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              HEADLINE
            </label>
            <input
              type="email"
              class="form-control"
              id="textInput"
              placeholder="Write here headline of your project"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              DESCRIPTION
            </label>
            <textarea
              class="form-control"
              id="textInputt"
              placeholder="Write here description of your project"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={submit}>Submit</button>
          

        </div>


      </section>



      {/* User data showing section and Delete section .................. */}


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
                                    <button className="btn btn-danger" onClick={() => itemDelete(d._id)} > Delete </button>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </div>
  );
};

export default User;
