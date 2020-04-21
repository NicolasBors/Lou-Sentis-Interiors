import React, { useState, useEffect } from 'react'
import './css/Start.css'
import louCardWB from '../assets/logos/LOGO BLANC.png'
import { withRouter } from 'react-router-dom'

const Start = props => {

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
        setTimeout(() => props.setStart(false), 1200)
        setTimeout(() => props.setOpacity(true), 1300)
        setTimeout(() => setShine(''), 1300)
    }, [])

    return (
        <div className='start' >
            <div id='logoId' className={`logo-container${logo}`} >
                <figure className={`logo-figure ${shine}`} >
                    <img className={`logo${logo}`}
                        src={louCardWB}
                        alt='logo'
                        onClick={() => props.history.push(`${props.match.url}`)} />
                </figure>
            </div>
        </div>
        
    )
}

export default withRouter(Start)