import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


function Home() {
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3010/users")
        console.log(result.data);
        setUser(result.data)
        
    }

    const deleteuser=async id=>{
        await axios.delete(`http://localhost:3010/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div  style={{marginTop:'10vh'}}>
            <table className="table table-hover table-dark">
                <thead>
                    <tr >
                        <th  scope="col">Sr No.</th>
                        <th  scope="col">Name</th>
                        <th  scope="col">User Name</th>
                        <th  scope="col">Email</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i) => (
                           <tr key={i}>
                               <td scope="row">{i +1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <NavLink to={`/user/${user.id}`} className="btn btn-primary mr-2">View</NavLink>
                                    <NavLink to={`/edituser/${user.id}`} className="btn btn-outline-warning mr-2">Edit</NavLink>
                                    <NavLink to="#" className="btn btn-outline-danger" onClick={()=>deleteuser(user.id)}>Delete</NavLink>
                                </td>
                           </tr> 
                        ))
                    }
                    
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home
