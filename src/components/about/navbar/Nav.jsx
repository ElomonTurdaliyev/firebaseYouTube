import { useState } from 'react';
import iconNav from './images/iconNav.svg';
import logoNav from './images/logoNav.svg';
import videoNav from './images/videoNav.svg';
import shapeNav from './images/shapeNav.svg';
import ringtonNav from './images/ringtonNav.svg';
import accountNav from './images/accountNav.svg';
import search from './images/search.svg';
import strelka from './images/strelka.png';
import './navbar.css';

const Nav = (props) => {

    const [dBlock, setDBlock] = useState('');
    
    const classDBlock = () => {
        dBlock !== 'dBlock' ? setDBlock('dBlock') : setDBlock('');
    } 
    const classDNone = () => {
        dBlock === '' ? setDBlock('dBlock') : setDBlock('dNone');
    }

    return (
    <nav>
        <div className='container position-relative'>
            <div className={`d-flex justify-content-between pt-1 pb-1`}>
                <div className='d-flex justify-content-between gap-4'>
                    <img src={iconNav} alt='icon' className='icon d-none d-md-block pointer' onClick={props.onClick}/>
                    <img src={logoNav} alt='logo' className='logo pointer' />
                    <div>
                        <form className='nav__form'>
                            <label className='nav__label d-none d-md-block'>
                                <input type="text" id='nav__search' placeholder='Search'/>
                            <img src={search} alt='search' className='nav__img_search'/> 
                            </label> 
                        </form>
                    </div>
                </div>
                <div className='d-flex gap-4 align-items-center'>
                    <img src={search} alt='search' className='d-md-none pointer' onClick={classDBlock}/> 
                    <img src={videoNav} alt='video' className='d-none d-lg-block pointer scale'/>
                    <img src={shapeNav} alt='shape' className='d-none d-lg-block pointer scale'/>
                    <img src={ringtonNav} alt='ringting' className='d-none d-lg-block pointer scale'/>
                    <img src={accountNav} alt='account' className='pointer scale me-4'/>
                </div>
            </div>
            <div className={`div__mobile ${dBlock}`}>
                <form className='w-100'>
                    <label className='w-100 gap-2 d-flex align-items-center mb-0'>
                        <img src={strelka} alt='nazat' className='nazat' onClick={classDNone}/> 
                        <input type="text" placeholder='Search' className='input__mobile mb-0'/>
                    </label> 
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Nav;