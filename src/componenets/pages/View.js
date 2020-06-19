import React,{useState, useEffect} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom'

function View() {

    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        city:'',
        website:''
    });
    const {id}= useParams();

    useEffect(() => {
       loadUser();
    }, [0])

    const loadUser=async()=>{
        const result = await Axios.get(` http://localhost:3010/users/${id}`);
        setUser(result.data);
        console.log(result.data);
        
        
    }
    return (
        <div className="constainer">
            <div className="card card-header">
            <h1>{user.name} Details</h1>
            </div>
            <div className="card card-body">
                <ul className="list-group w-50">
                <li className="list-group-item"> Name: {user.name}</li>
                <li className="list-group-item">User Name: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone NO. : {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
                <li className="list-group-item">City: {user.city}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default View
 