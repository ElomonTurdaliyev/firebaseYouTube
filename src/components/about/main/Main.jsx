import React from 'react';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
import icon6 from './images/icon6.svg';
import icon7 from './images/icon7.svg';
import icon8 from './images/icon8.svg';
import icon9 from './images/icon9.svg';
import icon10 from './images/icon10.svg';
import icon11 from './images/icon11.svg';
import icon12 from './images/icon12.svg';
import { useState } from 'react';
import './main.css';
import Nav from '../navbar/Nav';
import Gussie from './images/Gussie.svg';
import Nora from './images/Nora.svg';
import Belle from './images/Belle.svg';
import Eunice from './images/Eunise.svg';
import Emma from './images/Emma.svg';
import Leah from './images/Leah.svg';
import Slider from './slider/Slider';

const Main = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isColClicked, setIsColClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsColClicked(!isColClicked);
    };

    const divClass = isClicked ? 'd-md-none col-md-0 col-lg-0' : '';
    const divColClass = isColClicked ? 'col-md-12 col-lg-12' : '';
    
    const [showMore, setShowMore] = useState('');
    const classFuncsion = () => {
        showMore === '' ? setShowMore('showMore') : setShowMore('');
    }
    
  return (
      <div className='container'>
        <Nav onClick={handleClick}/>
        <div className="row mt-4">
            <div className={`col-3 col-lg-2 d-none d-md-block ${divClass}`}>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon1} alt=""  className='scale'/>
                <span>Home</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon2} alt=""  className='scale'/>
                <span>Trending</span>
              </div>
              <div className='d-flex gap-4 mb-5'>
                <img src={icon3} alt=""  className='scale'/>
                <span>Subscriptions</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon4} alt=""  className='scale'/>
                <span>Library</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon5} alt=""  className='scale'/>
                <span>History</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon6} alt=""  className='scale'/>
                <span>Watch later</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon7} alt=""  className='scale'/>
                <span>Favourites</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon8} alt=""  className='scale'/>
                <span>Liked videos</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon9} alt=""  className='scale'/>
                <span>Music</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon10} alt=""  className='scale'/>
                <span>Games</span>
              </div>
              <div className={`d-flex gap-4 ${showMore}`} onClick={classFuncsion}>
                <img src={icon11} alt=""/>
                <span>Show more</span>
              </div>
              <div>
                <h5 className='mt-5 mb-4'>Subscriptions</h5>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Gussie} alt="Gussie"/>
                  <p className='show__text'>Gussie Singleton</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Nora} alt="Nora"/>
                  <p className='show__text'>Nora Francis</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Belle} alt="Belle"/>
                  <p className='show__text'>Belle Briggs</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Eunice} alt="Eunice"/>
                  <p className='show__text'>Eunice Cortez</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Emma} alt="Emma"/>
                  <p className='show__text'>Emma Hanson</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={Leah} alt="Leah"/>
                  <p className='show__text'>Leah Berry</p>
                </div>
              </div>
              <div className='d-flex gap-4  mt-5'>
                <img src={icon12} alt="icon12"/>
                <span>Setting</span>
              </div>

            </div>
            <div className={`col-12 col-md-9 col-lg-10 mx-auto ${divColClass}`}>
                <Slider/>
            </div>
        </div>
        <div className='d-sm-none'>
        <div className='d-flex justify-content-between align-items-center divv'>
          <div className='d-flex flex-column'>
            <img src={icon1} alt="Home" className='img-main'/>
            <span>Home</span>
          </div>
          <div className='d-flex flex-column'>
            <img src={icon2} alt="Trending" className='img-main'/>
            <span>Trending</span>
          </div>
          <div className='d-flex flex-column'>
            <img src={icon3} alt="Subscriptions" className='img-main'/>
            <span>Subscriptions</span>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <img src={icon4} alt="Library" className='img-main'/>
            <span>Library</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main;