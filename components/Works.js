import React from 'react'
import react from './assets/react.jpg'
import ui from './assets/ui.jpg'
import food from './assets/food.jpg'
import Expenses from './assets/Expenses.png'
import keeperr from './assets/keeperr.png'
import drumkiit from './assets/drumkiit.png'
import './styles/Works.scss'
import { Link } from 'react-router-dom'
import { ArrowBack, FontDownloadSharp } from '@material-ui/icons'

const Works = () => {
    return (
        <div className='works'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="work__section">

                <div className="cards">
                    <img src={react} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                    <img src={ui} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={food} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={drumkiit} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={keeperr} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={Expenses} alt="" />
                    <button>See Work</button>
                </div>

            </div>
        </div>
    )
}

export default Works
