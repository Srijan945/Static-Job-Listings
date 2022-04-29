import React from 'react';
import data from '../assets/data.json';
import JobPostingCard from './JobPostingCard';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <main className='jobs'>
        {data.map(function(job){
          return <JobPostingCard jobData={job} key={job.id}/>
        })}
      </main>
    </div>
  );
}

export default App;
