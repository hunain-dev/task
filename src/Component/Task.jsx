import axios from 'axios';
import { useEffect, useState } from 'react';

const Task = () => {
//   const [showapidata, setshowapidata] = useState([]);
  const api = async () => {
  try {
    const res = await axios.get('https://sms.ilmwasooli.com/temp/gettestingdata');
    const data = res.data; 
    console.log("API Data:", data);
    // setshowapidata(data);
  } catch (err) {
    console.log('Error found:', err);
  }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <h2>Task</h2>
     
    </div>
  );
};

export default Task;