import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const {title, img, id} = props;
    return (
        <div className="card">
        <Link to={`news/${id}`}>
          <img src={img} alt={title} className='w-100'/>
        </Link>
        <h5 className='cardTitle'>{title}</h5>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <p className='cardText'>43k views</p>
            <p className='cardText'>12 days ago</p>
          </div>
          <p className='cardText'>Dollie Blair</p>
        </div>
        </div>
      );
}

export default Card