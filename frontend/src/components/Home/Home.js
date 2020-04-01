import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';
import './Home.scss';
import axios from 'axios';

const Home = () => {
  const [fishesAPI, setFishesAPI] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:3000/fish')
      .then(response => response.data)
      .then(data => setFishesAPI(data));
  }, []);
  return (
    <div className='menu'>
      <h1>Fishes</h1>
      <ul>
        {Object.keys(fishesAPI).map(key => (
          <Fish key={key} index={key} details={fishesAPI[key]} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
