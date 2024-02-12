import React, { useEffect, useState } from 'react'
import './userDetails.css'
import { useParams } from 'react-router-dom'
import { getUser } from '../apis/api';
function UserDetails() {
    const { item } = useParams();
    console.log(item)
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userList = await getUser(item);
                setUserData(userList);
                console.log(userData)
            } catch (error) {
                console.error('Error fetching user list:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='userdetails-container'>
            <div className="user">
                <div className="user-image">
                    <img src={userData.avatar_url} />
                    <div className="follow">
                        <span className='un'>{userData.name}</span>
                        <button>Follow</button>
                        <div className="content">
                            <span className='followers'><label>Following</label>{userData.following}</span>
                            <span className='following'><label>Followers</label>{userData.followers}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-details">
                <div className="mini-card">
                <p><strong>Login:</strong> {userData.login}</p>
                </div>
                <div className="mini-card">
                <p><strong>Company:</strong> {userData.company}</p>
                </div>
                <div className="mini-card">
                <p><strong>Location:</strong> {userData.location}</p>
                </div>
                <div className="mini-card">
                    <p><strong>Twitter:</strong> {userData.twitter_username}</p>
                </div>
                <div className="mini-card">
                    <p><strong>created_at:</strong> {userData.created_at}</p>
                </div>
                <div className="mini-card">
                    <p><strong>updated_at:</strong> {userData.updated_at}</p>
                </div>
                <div className="mini-card">
                    <p><strong>email::</strong> {userData.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
