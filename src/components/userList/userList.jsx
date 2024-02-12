import React, { useEffect, useState } from 'react';
import './userList.css';
import { getUserList } from '../apis/api';
import UserCard from '../userCard/userCard';
import { Link } from 'react-router-dom';
import TopBar from '../topbar/topbar';

function UserList() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userList = await getUserList();
                setUserData(userList);
            } catch (error) {
                console.error('Error fetching user list:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <TopBar/>
        <div className='userList-container'>
            {userData.length !== 0 ?
                userData.map((item) => (
                    <Link to={`/user/${item.login}`} className='link'>
                        <UserCard key={item.id} userData={item} />
                    </Link>
                ))
                : <></>
            }
        </div>
    </>
    );
}

export default UserList;
