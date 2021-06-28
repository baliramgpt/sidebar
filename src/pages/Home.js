import React,{useState} from 'react';
import Card from '../components/Card';
import './Home.css';

function Home() {
  const [userInput, setUserInput]=useState('');

  const inputChangeHandler = (event) => {
    if(event.charCode === 13){
      setUserInput(event.target.value);
    }
  }

  return (
    <div className='home'>
        <input type="text" className="search" placeholder="Enter The Text" onKeyPress={inputChangeHandler}/>
        <Card input={userInput}/>
    </div>
  );
}

export default Home;
