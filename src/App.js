import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Layout/Navbar";
import NotFound from './Components/Pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/adduser" component={AddUser}/>
          <Route exact path="/users/edituser/:id" component={EditUser}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
