import { ArrowBack } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'


const Contact = () => {


     
    return (
        <div className='contact'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="inputs">
                <h1>Contact us</h1>
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Message' className='message'/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
