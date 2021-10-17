import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import './profile.css'
import useForm from '../components/SignUp/useForm';

const ProfilePage = () => {
    const {handleChange, values, handleSubmit} = useForm();

    return (
        
        <div className="profile">
            <h1>Profile</h1>
            <div className="user-info">
                <label>username&emsp;&emsp;&emsp;</label>
                <label values={values.username}>unknown</label><br />
                <label>email&emsp;&emsp;&emsp;</label>
                <label values={values.username}>unknown</label>
            </div>
        </div>
    )
}

export default ProfilePage;
