import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsPage = () => {
    const {d} = useParams();
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch(`https://pacific-fortress-78541.herokuapp.com/project/${d}`)
           .then(result => result.json())
           .then(data => {
               console.log("Data from ID=",data[0]);
               setData(data[0])
           })
    } ,[])
    
    return (
        <div style={{backgroundColor:'aliceBlue'}}>
            <div style={{margin:'0px 100px'}}>
                  <h1 style={{textAlign:'center'}}>{data.projectName}</h1>
                 <img style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'400px',height:'400px'}} src={data.imageUrl} alt="" />
                 <p>{data.projectDescription}</p>
            </div>
        </div>
    );
};

export default DetailsPage;