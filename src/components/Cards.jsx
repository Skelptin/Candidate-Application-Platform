import React, { useState } from 'react';

import { FaHourglassHalf } from 'react-icons/fa6';
import { FaCheckSquare } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

import { faker } from '@faker-js/faker';

import img from '../assets/react.svg';
import './Cards.css';


const Cards = ({ job }) => {
    const [showMore, setShowMore] = useState(false);
    const maxWords = 50;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const companyName = faker.company.name()

    const getDescriptionDisplay = (description) => {
        const words = description.split(' ');
        if (words.length > maxWords && !showMore) {
            const truncated = words.slice(0, maxWords).join(' ');
            return (
                <>
                    {truncated}...{' '}
                    <span className="show-more" onClick={toggleShowMore}>
                        SHOW MORE
                    </span>
                </>
            );
        }
        return (
            <>
                {words.join(' ')}{' '}
                {words.length > maxWords && (
                    <span className="show-more" onClick={toggleShowMore}>
                        SHOW LESS
                    </span>
                )}
            </>
        );
    };


    //Using random number to show posted days
    const randomNumber = () => {
        return Math.floor(Math.random() * 30) + 1;
    }

    return (
        <div className="card">
            <div className="postInfo">
                <FaHourglassHalf /> &nbsp; Posted {randomNumber()} days ago
            </div>
            <div className="job">
                <img src={img} alt="logo" />
                <div className="jobInfo">
                    <h3 className="card-title">{companyName}</h3>
                    <p className="card-role">{job.jobRole}</p>
                    <p className="card-location">{job.location}</p>
                </div>
            </div>
            <p className="card-salary">
                Estimated Salary: &nbsp; ₹{job.minJdSalary == null ? job.maxJdSalary - 5 : job.minJdSalary} - {job.maxJdSalary} LPA &nbsp;
                <FaCheckSquare style={{ color: '#44dd56' }} />
            </p>
            <p className="card-location" style={{ fontWeight: 'bolder' }}>
                About Company: <br /> <span style={{ fontWeight: 'bold' }}>About us</span>
            </p>
            <p className="card-description">{getDescriptionDisplay(job.jobDetailsFromCompany)}</p>

            <p className='card-exp'>Minimum Experience <br /> {job.minExp == null ? 5 : job.minExp} years</p>

            <button className='card-btn'>
                <AiFillThunderbolt style={{ color: "#e7bf33" }} />                Easy Apply
            </button>
        </div>
    );
};

export default Cards;
