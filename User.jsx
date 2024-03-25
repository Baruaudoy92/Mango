import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';

function User() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/auth/allusers')
            .then(res => setUser(res.data))
            .catch(error => console.log(error));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/home');
        window.location.reload();
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/auth/users/${id}`)
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="user-container">
            <h1 className='utilisateur'>Utilisateur</h1>
            <div className="admin-nav">
          <Link to='/register'>Add-ADMIN</Link>
        </div>
            {user.map(user => (
                <div className="user-item" key={user.client_id}>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone_number}</p>
                    <p>{user.address}</p>
                    <p>{user.birth_date}</p>
                    <div>
                        <button onClick={()=>handleDelete(user.client_id)}>Supprimer</button> 
                        <Link to={`/modifyuser/${user.client_id}`}>Modifier</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default User;
