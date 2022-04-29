import React from 'react';
import RoleRequirements from './RoleRequirements';

function EmployerDetails({jobData}){
    
    const items = [jobData.role,jobData.level,...jobData.languages,...jobData.tools];
    return (
        <div>
            <div>
                <span className='company__name'>{jobData.company}</span>
                { jobData.new && <span className='company__new'>NEW!</span>}
                { jobData.featured && <span className='company__featured'>FEATURED</span>}
            </div>
            <p className='company__position'>{jobData.position}</p>
            <div>
                <span className='company__postedAt'>{jobData.postedAt}</span>
                <span className='circle'></span>
                <span className='company__contract'>{jobData.contract}</span>
                <span className='circle'></span>
                <span className='company__location'>{jobData.location}</span>
            </div>
            <hr />
            <RoleRequirements items={items}/>
        </div>
    );
}

export default EmployerDetails;