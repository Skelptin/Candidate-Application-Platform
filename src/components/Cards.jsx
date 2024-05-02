import React from 'react';
import { FaHourglassHalf } from "react-icons/fa6";

import './Cards.css';

const Cards = ({ job }) => {


    return (
        <div className="card">
            <div className='postInfo'>
                <FaHourglassHalf /> Posted 10 days ago
            </div>
            <div className='jobInfo'>

            </div>
            <h3 className="card-title">Lorem Upsum</h3>
            <p className="card-company">co</p>
            <p className="card-location">loc</p>
            <p className="card-description">descri</p>
        </div>
    );
};

export default Cards;
