import './slider.css';
import dollie from '../images/Gussie.svg';
import left from '../images/Left.svg';
import right from '../images/Right.svg';
import oval from '../images/Oval.svg';
import Card from './Cards/Card';
import { useState, useEffect } from 'react';

const Slider = () => {

  const [container, setContainer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2f935d6d66msh06df3a52e24391bp107911jsn40a40e4d3719',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };

    fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50', options)
      .then(response => response.json())
      .then(data => {
        setContainer(data.items);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);

  const [startIndex1, setStartIndex1] = useState(0);
  const [endIndex1, setEndIndex1] = useState(6);

  const [startIndex2, setStartIndex2] = useState(0);
  const [endIndex2, setEndIndex2] = useState(6);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (endIndex < 50) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handlePrevClick1 = () => {
    if (startIndex1 > 0) {
      setStartIndex1(startIndex1 - 1);
      setEndIndex1(endIndex1 - 1);
    }
  };
  const handleNextClick1 = () => {
    if (endIndex1 < 50) {
      setStartIndex1(startIndex1 + 1);
      setEndIndex1(endIndex1 + 1);
    }
  };

  const handlePrevClick2 = () => {
    if (startIndex2 > 0) {
      setStartIndex2(startIndex2 - 1);
      setEndIndex2(endIndex2 - 1);
    }
  };
  const handleNextClick2 = () => {
    if (endIndex2 < 50) {
      setStartIndex2(startIndex2 + 1);
      setEndIndex2(endIndex2 + 1);
    }
  };


  return (
    <div>
      <div>
      <div className='d-none d-sm-block'>
      <div className='d-flex justify-content-between my-2'>
        <div className='d-flex align-items-center gap-3'>
          <img src={dollie} alt="Dollie Blair" />
          <h4 className='mb-0'>Dollie Blair</h4>
        </div>
        <div className="sliderBtnImg d-flex align-items-center gap-2">
          <img src={left} alt="previous" onClick={handlePrevClick}/>
          <img src={right} alt="next" onClick={handleNextClick}/>
        </div>
      </div>
      </div>
      <div className="card-container d-sm-none px-2 px-sm-0">
        <div className='d-flex gap-1 justify-content-center flex-column'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-sm-block d-md-none">
        <div className='d-flex gap-1'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex, endIndex-4).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-md-block d-lg-none">
        <div className='d-flex gap-2'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex, endIndex-2).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-lg-block">
        <div className='d-flex gap-3'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex, endIndex).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
    </div>
    <div className='d-none d-sm-block'>
      <div className='d-flex justify-content-between my-2'>
        <div className='d-flex align-items-center gap-3'>
          <h4 className='mb-0'>Recommended</h4>
        </div>
        <div className="sliderBtnImg d-flex align-items-center gap-2">
          <img src={left} alt="previous" onClick={handlePrevClick1}/>
          <img src={right} alt="next" onClick={handleNextClick1}/>
        </div>
      </div>
      <div className="card-container d-none d-sm-block d-md-none">
        <div className='d-flex gap-1 justify-content-center'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex1, endIndex1-5).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-md-block d-lg-none">
        <div className='d-flex gap-2'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex1, endIndex1-4).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-lg-block">
        <div className='d-flex gap-3'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex1, endIndex1-3).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
    </div>
    <div className='pt-4 d-none d-sm-block'>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <div className='d-flex gap-3 align-items-center'>
          <img src={oval} alt="Food & Drink" />
          <h4 className='mb-0'>Food & Drink</h4>
          <p className='mb-0 sliderFood-text d-none d-lg-block'>Recommended channel for you</p>
        </div>
        <div className='d-flex align-items-center gap-4'>
          <button className='subscribe-btn d-none d-lg-block'>Subscribe 2.3m</button>
          <div className="sliderBtnImg d-flex align-items-center gap-2">
            <img src={left} alt="previous" onClick={handlePrevClick2}/>
            <img src={right} alt="next" onClick={handleNextClick2}/>
        </div>
        </div>
      </div>
      <div>
      <div className="card-container d-none d-sm-block d-md-none">
        <div className='d-flex gap-1'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex2, endIndex2-4).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-md-block d-lg-none">
        <div className='d-flex gap-2'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex2, endIndex2-2).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}
        </div>
      </div>
      <div className="card-container d-none d-lg-block">
        <div className='d-flex gap-3'>
        {isLoading ? (
        <p>Loading...</p>
      ) : container.slice(startIndex2, endIndex2).map(index => (
        <Card key={index.id.videoId} title={index.snippet.title} img={index.snippet.thumbnails.default.url} id={index.id.videoId}/>
      ))}       
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;