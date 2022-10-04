import "./App.css";
import "../node_modules/primeflex/primeflex.css"
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

import "./assets/themes/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/themes/primeflex.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dasboard/Dashboard";
import SideBar from "./components/layout/Sidebar/SideBar";
import TopBat from "./components/layout/TopBar/TopBar";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import UserDetails from "./components/customer/UserDetails";


function setLogged(value) {
  sessionStorage.setItem("logged", value);
}


function getLogged() {
  return sessionStorage.getItem("logged");
}


function App() {

  const logged = getLogged();
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(0)
  console.log(`Path: ${location.pathname}`);
  console.log(`logged: ${logged}`);


  //checkAuth();
  // con el fin que se ejecute cada vez que actualiza.
  if (logged != "true") {
    switch (location.pathname) {
      case "/login":
        return <Login setLogged={setLogged}/>;
        break;
      default:
        return <Navigate to="/login" />;
        break;
    }
  }

  function findTheme() {
    if (theme === 0){
      setTheme(1)
      //cambio de color blando
    }else {
      setTheme(0)
      //cambio de color a negro
    }    
  }

 

  // when logged is true
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <SideBar />
      <div className="min-h-screen flex flex-column relative flex-auto">
      <TopBat setTheme={findTheme} theme={theme} setLogged={setLogged}/>
        {/* //Content */}
        <div className="col-12 grid">
          <div className="col-12 md:col-12 lg:col-12 xl:col-12 sm:col-12">
            <div className="p-2 ml-3 lg:pl-7 lg:ml-8 flex flex-column flex-auto">
              <div className="border-round flex-auto border-white-alpha-10">
                  <Routes>
                    <Route
                      path="/"
                      element={<Dashboard />}
                    />
                    <Route
                      path="userDetails"
                      element={<UserDetails />}
                    />                                                            
                    <Route
                      path="login"
                      element={
                        logged == "true" ? <Navigate to="/" /> : <Login />
                      }
                    />
                  </Routes>
              </div>
            </div>
          </div>
        </div>
        {/* Fin content */}
      </div>
    </div>
  );
}

Login.prototype = {
  setLogged: PropTypes.func.isRequired,
};

export default App;
