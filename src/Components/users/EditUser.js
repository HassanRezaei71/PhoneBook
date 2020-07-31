import React, { useState,useEffect } from "react";
import "./AddUser.css";
import { useHistory,useParams } from "react-router-dom";
import Axios from "axios";

export default function EditUser() {
  let history = useHistory();
  const {id}=useParams();
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

  const loadUser = async()=>{
      const result = await Axios.get(`http://localhost:3200/users/${id}`);
      console.log(result);
      setUser(result.data);
  }

  useEffect(()=>{
      loadUser()
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3200/users/${id}`,user);
    history.push("/");
}

  return (
    <div className="container adduser">
      <h1 className="text-center my-3">Edit A User</h1>
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
        <button className="btn btn-primary btn-block adduser-btn my-4" to={`users/edit/{id}`}>
          Edit User
        </button>
      </form>
    </div>
  );
}
