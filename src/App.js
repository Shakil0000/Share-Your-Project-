
import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import User from './Component/User/User';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import DetailsPage from './Component/DetailsPage/DetailsPage';
import Admin from './Component/Admin/Admin';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
//later add..................
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Login from './Component/Home/Login/Login';


export const UserContext = createContext();




function App() {

   const [loggedIUser , setLoggedInUser] = useState({});

  return (
    <div>
      
      <UserContext.Provider value={[loggedIUser , setLoggedInUser]}>

      <Router>
       <Switch>
         
          <Route path="/user">
                 <Header></Header>
                 <Navbar></Navbar>
                 <User></User>   
                 <Footer></Footer>
          </Route>

          <Route path="/details/:d">
                 <Header></Header>
                 <Navbar></Navbar>
                 <DetailsPage></DetailsPage>  
                 <Footer></Footer> 
          </Route>

          <PrivateRoute path="/admin">
            <Header></Header>
            <Navbar></Navbar>
            <Admin></Admin>
            <Footer></Footer>
          </PrivateRoute>

          <Route path="/about">
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

         <Route path="/">
                 <Home></Home>    
          </Route>
          
       </Switch>
      </Router>

      </UserContext.Provider>

    </div>
  );
}

export default App;
