import React from "react";
import "./About.css";
import pic from "./s.png"

const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit hic impedit labore voluptatum ex quis earum. Dolore facilis, esse, delectus optio cumque maiores, numquam minima error ab excepturi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cum explicabo magni dignissimos nostrum placeat laborum at repellat tempora, voluptatibus, cumque nemo sunt, eaque temporibus atque tenetur culpa minus? Eligendi reiciendis vitae mollitia tempora sapiente expedita, repellendus officiis quos placeat? Ipsa est, unde sit adipisci nam id doloremque. Sint, laborum.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>

      <div className="rowAbout">
        <div className="column">
          <div className="card">
            <img 
              src={pic}
              alt=""
              style={{width:'300px',height:'300px',borderRadius:'50%',display:'block',margin:'0px auto'}}
            ></img>
            <div className="containerAbout">
              <h2>Shakiazzaman</h2>
              <p className="title">Team Leader</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>shakiazzaman.s@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img
              src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/243898433_1189405154869542_5961621406954633518_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEBtEg1tpXc0-F3gzOHkf6OPI6sZgpaglE8jqxmClqCUdbc64hsL7qM-jbss2I_JwAXcVGeyxDLvVhvnSQ70Qw7&_nc_ohc=mnQaonfPhcoAX9vFLq-&_nc_ht=scontent.fdac31-1.fna&oh=5842bb5721cf0bc30bf300cac4cafcc3&oe=6186ACF3"
              alt=""
              style={{width:'300px',height:'300px',borderRadius:'50%',display:'block',margin:'0px auto'}}
            ></img>
            <div className="containerAbout">
              <h2>Ariful Islam</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>arifulislam11819@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img
              src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/241762580_1502867066720039_5888408900421807690_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEiytYS7vdfN607V1Zph8ZZ8C7pWoiuStTwLulaiK5K1JkVgjjcy8neCkBlXhQTP30JW67CRcLbJTdOJRHao1WS&_nc_ohc=S3VY2Ymq4aQAX-SzT7K&_nc_ht=scontent.fdac31-1.fna&oh=4dea40b4238d13978356dc026e7dfd56&oe=618650BC"
              alt=""
              style={{width:'300px',height:'300px',borderRadius:'50%',display:'block',margin:'0px auto'}}
            ></img>
            <div className="containerAbout">
              <h2>Rohanur Ifte khar</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>ruhanuriftekhar501@gmail.com</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
