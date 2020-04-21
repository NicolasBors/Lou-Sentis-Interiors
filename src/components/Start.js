import React, { useState, useEffect } from 'react'
import './css/Start.css'
import louCardWB from '../assets/logos/LOGO BLANC.png'
import { withRouter } from 'react-router-dom'

const Start = ({ start, setStart, setOpacity, history, match }) => {

    const [logo, setLogo] = useState('')
    const [shine, setShine] = useState('')

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            window.scrollTo(0, 0)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => setShine('shine'), 200)
        setTimeout(() => setLogo('-after'), 1000)
        setTimeout(() => setStart(false), 1200)
        setTimeout(() => setOpacity(true), 1300)
        setTimeout(() => setShine(''), 1300)
    }, [setStart, setOpacity])

    return (
        <div className='start' >
            <div id='logoId' className={`logo-container${logo}`} >
                <figure className={`logo-figure ${shine}`} >
                    <img className={`logo${logo}`}
                        src={louCardWB}
                        alt='logo'
                        onClick={() => history.push(`${match.url}`)} />
                </figure>
            </div>
        </div>
    )
}

export default withRouter(Start)