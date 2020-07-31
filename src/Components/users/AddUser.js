import React, { useState } from "react";
import "./AddUser.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
    username:'',
    email:'',
    phone:'',
    website:''
  });

  const {name,username,email,phone,website} = user;

  const inputChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3200/users",user);
    history.push("/");
}

  return (
    <div className="container adduser">
      <h1 className="text-center my-3">Add A User</h1>
      <form className="w-50 m-auto" onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => inputChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => inputChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => inputChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Enter Your Phone"
            value={phone}
            onChange={(e) => inputChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="website"
            placeholder="Enter Your Website"
            value={website}
            onChange={(e) => inputChange(e)}
          />
        </div>
        <button className="btn btn-primary btn-block adduser-btn my-4">
          Add User
        </button>
      </form>
    </div>
  );
}
