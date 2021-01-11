import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleMenu } from '../redux/menu/menu.actions'
import louCardWB from '../assets/logos/LOGO BLANC.png'

import '../styles/Start.css'

const Start = ({ setStart, setOpacity, visible, history, match, dispatch }) => {

    const [logo, setLogo] = useState('')
    const [shine, setShine] = useState('')
    const [blur, setBlur] = useState(false)

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            window.scrollTo(0, 0)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => setShine('shine'), 200)
        setTimeout(() => setLogo('-after'), 1000)
        setTimeout(() => setBlur(true), 1000)
        setTimeout(() => setBlur(false), 1400)
        setTimeout(() => setStart(false), 1450)
        setTimeout(() => setOpacity(true), 1500)
        setTimeout(() => setShine(''), 1501)
    }, [setStart, setOpacity])

    return (
        <div className='start' >
            <div id='logoId'
                style={blur ? { filter: 'blur(10px)', filter: 'opacity(0.7)' } : null}
                className={`logo-container${logo}`} >
                <figure className={`logo-figure ${shine}`} >
                    <img className={`logo${logo}`}
                        src={louCardWB}
                        alt='logo'
                        onClick={
                            visible ?
                                () => {
                                    dispatch(toggleMenu())
                                    history.push(`${match.url}`)
                                }
                                :
                                () => { history.push(`${match.url}`); }
                        } />
                </figure>
            </div>
        </div>
    )
}

const mapStateToProps = ({ menu: { visible } }) => ({
    visible
})

export default
    withRouter(
        connect(mapStateToProps)
            (Start))