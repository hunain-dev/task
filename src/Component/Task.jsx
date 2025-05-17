import axios from 'axios';
import { useEffect, useState } from 'react';

const Task = () => {
  const [showapidata, setShowapidata] = useState([]);
  const [search, setsearch] = useState('')

  const api = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setShowapidata(res.data);
      console.log(res.data)
    } catch (err) {
      console.log('Error found:', err);
    }
  };

  useEffect(() => {
    api();
  }, []);

   const filteredData = showapidata.filter(item => {
    const term = search.toLowerCase();
    return (
      item.id.toString().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.username.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.address.city.toLowerCase().includes(term)
    );
  });

  return (
    <div className="container">
      <h2 className="heading">Student Task</h2>
      <input
        type="text"
        placeholder="Search by ID, Name, Username etc"
        className="search" 
        onChange={(e) => setsearch(e.target.value)}
      />

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
         {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
