import React, {useState} from 'react';
import Animal from '../../Animal/Animal';
import {homeObj} from './Data';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar';

function Home() {

    return (
        <>
        
        <Sidebar/>
        <div>
            
            <Animal/>
         
        </div>
        </>
    )
}

export default Home
