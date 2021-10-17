import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import './profile.css'

const ProfilePage = () => {
    return (
        <div className="profile">
            <Sidebar />
            <h2>this is a profile page</h2>
        </div>
    )
}

export default ProfilePage;
