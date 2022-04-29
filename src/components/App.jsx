import React from 'react';
import data from '../assets/data.json';
import JobPostingCard from './JobPostingCard';
import Footer from './Footer';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <main className='jobs'>
        {data.map(function(job){
          return <JobPostingCard jobData={job} key={job.id}/>
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
