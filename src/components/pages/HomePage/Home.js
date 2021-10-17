import React, {useState} from 'react';
import Animal from '../../Animal/Animal';
import {homeObj} from './Data';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

    return (
        <div>
            <div className="center">
             <Animal/>
            </div>
          
         
        </div>
    )
}

export default Home
