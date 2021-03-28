import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Tweet from './Components/Tweet/Tweet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const fetchData = async() =>{
    try{
      const url =`https://coursera-twitter-api.herokuapp.com/tweets`;
      const response = await axios.get(url);
      setData(response.data);
    }catch(error){
      console.error(error);
    }
  }

  useEffect( () => {
    fetchData();
  },[]);
  return (
    <div style={{ background: 'black', padding: '20px'}}>
      <h3 style={{color: 'white'}}>Tweets Loaded: {data.length}</h3>
      {
        data.map(tweet => <Tweet key={tweet.id} {...tweet} />)
      }
    </div>
  );
}

export default App;
