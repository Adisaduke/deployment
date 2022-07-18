import React from 'react'
import './styles/Section.scss'
import man2 from './assets/man2.jpg'
import myself from './assets/myself.png'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'

const Section = () => {
    return (
        <div className='section'>

            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="section__container">


                <div className="section__img">
                    <img src={myself} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is DukeTech?</h1>
                    <p>A young and Vibrant FrontEnd Developer</p>
                    <p>Professional UI & UX Designer</p>
                    {/* <p>Project Manager at Google</p> */}
                    <p>Many years of experience in Programming</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section
