import React ,{useEffect, useState}from 'react';
import data from '../assets/data.json';
import JobPostingCard from './JobPostingCard';
import Footer from './Footer';
import Filter from './Filter';
import './css/App.css';

function App() {

  const [items,setItems] = useState([]);
  const [jobs,setJobs] = useState(data);
  
  useEffect(function(){

      setJobs(data.filter(function(ele){
        
        let flag=true;
        const array = [ele.role,ele.level,...ele.languages,...ele.tools];
        items.forEach(function(item){
            const num=array.find(function(element){
              return element===item;
            });
            if(num===undefined){
              flag=false;
            }
        });

        return flag;
      }));
  },[items]);

  return (
    <div className="app">
      <div className="app__imageContainer">
        <img className='app__image' src="images/bg-header-mobile.svg" alt="background"></img>
      </div>
      <main className='app__jobs'>
        {(items.length!==0) && <Filter items={items} setItems={setItems}/>}
        {jobs.map(function(job){
          return <JobPostingCard jobData={job} key={job.id} setItems={setItems}/>
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
