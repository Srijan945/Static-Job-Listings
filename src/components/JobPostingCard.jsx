import React from 'react';
import EmployerDetails from './EmployerDetails';
import './css/JobPostingCard.css';
function JobPostingCard({jobData,setItems}){

    const styleSheet = {
        borderLeft: "0.3125rem solid hsl(180, 29%, 50%)"
    }
    return (
        <article className='article' style={jobData.featured ? styleSheet: null}>
            <img className='company__logo' src={jobData.logo} alt="logo" />
            <EmployerDetails jobData={jobData} setItems={setItems}/>
        </article>
    );
}

export default JobPostingCard;