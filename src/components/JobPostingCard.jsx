import React from 'react';
import EmployerDetails from './EmployerDetails';
function JobPostingCard({jobData}){

    return (
        <article>
            <img className='company__logo' src={jobData.logo} alt="logo" />
            <EmployerDetails jobData={jobData}/>
        </article>
    );
}

export default JobPostingCard;