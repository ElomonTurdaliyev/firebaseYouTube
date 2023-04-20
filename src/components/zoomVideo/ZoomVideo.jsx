import React from 'react';
import Nav from '../about/navbar/Nav';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './zoom.css'

const ZoomVideo = () => {

    const {id} = useParams();
    const [container, setContainer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `2f935d6d66msh06df3a52e24391bp107911jsn40a40e4d3719`,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
  
      fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50`, options)
        .then(response => response.json())
        .then(data => {
          setContainer(data.items);
          setIsLoading(false);
        })
        .catch(err => console.error(err));
    }, []);
  
  return (
    <div>
        <Nav/>
        <div className='container'>
        {isLoading ? (
        <p>Loading...</p>
      ) : (       
        <iframe src={`https://www.youtube.com/embed/${id}`}  frameborder="0" className='w-100'></iframe>
      )}
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <p className='card-Text'>43k views</p>
            <p className='card-Text'>12 days ago</p>
          </div>
          <p className='card-Text'>Dollie Blair</p>
        </div>
        <Link to="/about">
            <span>Back to homepage</span>
        </Link>
        </div>
    </div>
  )
}

export default ZoomVideo;

