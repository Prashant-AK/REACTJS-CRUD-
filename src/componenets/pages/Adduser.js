import React, { useState } from 'react'
import Axios from 'axios';
import {useHistory} from 'react-router-dom' //--> to redirect

function Adduser() {
    let history=useHistory(); //--> assigning variable to useHistory() 
    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        city:'',
        website:''
    });
    const { name, username, email, phone,city, website } = user;
    
    const oninputchange=e => {
        // console.log(e.target.value); 
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const Adduser=async e=>{
        e.preventDefault();
        await Axios.post("http://localhost:3010/users",user);
        history.push("/")//--> redirecting to home page
    }

    return (
        <div className="container" style={{ minHeight: '400px', marginTop: '10%', padding: '2vh', backgroundColor: '#F5F5F5 ' }}>
            <h1 className="text-center">Add User</h1>
            <div className="container">
                <form onSubmit={e=>Adduser(e)} >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Name"
                            onChange={e => oninputchange(e)}
                            name="name"
                            value={name} />
                    </div>
                    <div className="form-group">
                        <input type="username" className="form-control" placeholder="Enter Your UserName"
                            onChange={e => oninputchange(e)}
                            name="username"
                            value={username} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Your Email_id"
                            onChange={e => oninputchange(e)}
                            name="email"
                            value={email} />
                    </div>
                    <div className="form-group">
                        <input type="phno" className="form-control" placeholder="Enter Your PhoneNo."
                            onChange={e => oninputchange(e)}
                            name="phone"
                            value={phone} />
                    </div>
                    <div className="form-group">
                        <input type="website" className="form-control" placeholder="Enter Your City"
                            onChange={e => oninputchange(e)}
                            name="city"
                            value={city} />
                    </div>
                    <div className="form-group">
                        <input type="website" className="form-control" placeholder="Enter Your Website Name"
                            onChange={e => oninputchange(e)}
                            name="website"
                            value={website} />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default Adduser
