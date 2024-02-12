import React, { useEffect, useState } from 'react'
import './userCard.css'
import { getUser } from '../apis/api';
function UserCard({ userData }) {
    const [data,setData] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const user = await getUser(userData.login);
                setData(user);
            }
            catch(error){
                console.error("Error fetch it")
            }
        }
        fetchData();
    },[])
    // console.log(userData)
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={data.avatar_url}></img>
            </div>
            <span className='username'>{data.name}</span>
            <div className="details">
                <p className='followers'><label>followers</label>{data.following}</p>
                <p className='following'><label>following</label>{data.followers}</p>
            </div>
        </div>
    )
}

export default UserCard
