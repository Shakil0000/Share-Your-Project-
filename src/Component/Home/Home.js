import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import User from '../User/User';
import Login from './Login/Login';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <Project></Project>
           <About></About>
           <Footer></Footer>
        </div>
    );
};

export default Home;