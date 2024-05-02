import React from 'react';
import { FaHourglassHalf } from "react-icons/fa6";

import img from '../assets/react.svg'
import './Cards.css';

const Cards = ({ job }) => {


    return (
        <div className="card">
            <div className='postInfo'>
                <FaHourglassHalf /> &nbsp; Posted 10 days ago
            </div>
            <div className='job'>
                <img src={img} alt='logo' />
                <div className='jobInfo'>
                    <h3 className="card-title">Lorem Ipsum</h3>
                    <p className='card-role'>{job.jobRole}</p>
                    <p className='card-location'>{job.location}</p>
                </div>
            </div>

            <p className="card-salary">Estimated Salary: &nbsp; ₹{job.minJdSalary == null ? 10 : job.minJdSalary} - {job.maxJdSalary} LPA</p>
            <p className="card-location">loc</p>
            <p className="card-description">descri</p>
        </div>
    );
};

export default Cards;
