import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import axios from 'axios'
const Home = () => {
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchNames = async () => {

      const res = await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2024");
      setNames(res.data.results);
    }
    fetchNames();

  }, []);
  return (
    <div className='home'>
      <div className='characters'>
       
        <ul className='characters-group'>
          {names.map(names => (
            <button className='card' >
              <li key={names.id} className='characters-group-item'>
                <div className='nat'>{names.gender} {names.nat}</div>
                <div className='name'>{names.name.title} {names.name.first} {names.name.last}</div>
                <div className='email'>{names.email}</div>

              </li>
            </button>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home