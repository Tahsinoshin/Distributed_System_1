
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile";

import { useState } from "react";
import Auth from "./pages/auth/auth";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [fullName, setFullName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if(isAuthenticated)
    return <Home fullName = { fullName }/>
  else
    return <Auth setIsAuthenticated = { setIsAuthenticated } setFullName = { setFullName }/>


}

export default App;
