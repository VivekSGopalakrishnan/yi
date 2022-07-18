import React from 'react'
import { useState, useEffect } from 'react'
import './landing.css'
import axios from 'axios'
const Landing = () => {
    const [names1, setNames1] = useState([])

    useEffect(() => {
        const fetchNames = async () => {

            const res = await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2001");
            setNames1(res.data.results);
        }
        fetchNames();

    }, []);
    return (
        <div className='Landing'>
            <ul className='main-group'>
                {names1.map(names1 => (
                    <div className='main'>
                        <li key={names1.id} className='main-group-item'>
                            <div className='photo'>
                            <img src={names1.picture.large} alt="abc" />
                            </div>
                            <div className='info'>

                            <div className='name'>{names1.name.title} {names1.name.first} {names1.name.last}</div>
                            <div className='addr'>{names1.location.street.number}, {names1.location.street.name}, {names1.location.city}, {names1.location.state}, {names1.location.country}, {names1.location.postcode}</div>
                            <div className='nat'>{names1.gender} </div>
                            </div>

                        </li>
                    </div>

                ))}
            </ul>
        </div>
    )
}
export default Landing