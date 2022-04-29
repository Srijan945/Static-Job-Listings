import React from 'react';

function JobPostingCard({jobData}){

    const items = [jobData.role,jobData.level,...jobData.languages]
    return (
        <article>
            <img className='company__logo' src={jobData.logo} alt="logo" />
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
            <ul>
                {items.map(function(item){
                    return <li className='company__item'>{item}</li>;
                })}
            </ul>
        </article>
    );
}

export default JobPostingCard;