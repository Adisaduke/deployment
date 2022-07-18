import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/man.png'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Works from './Works'
import Contact from './Contact'


const Main = () => {

    const navigate = useNavigate();

    const navigateToWorks = () =>{
        navigate('/works');
    }

    const navigateToCOntact = () =>{
        navigate('/contact');
    }

    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Adisa Rasak</h1>
                            <p>Web & App Developer</p>
                            <p>Graphics Design</p>

                            <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>


                    <div className="buttons">
                        <button onClick={navigateToWorks}>See My Work</button>
                        <button onClick={navigateToCOntact}>Hire Me</button>

                        <Routes>
                            <Route path='/works' element={<Works/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                        </Routes>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
