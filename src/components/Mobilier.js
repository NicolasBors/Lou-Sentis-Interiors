import React, { useState, useEffect } from 'react'
import './css/Mobilier.css'
import downArrow from '../assets/downArrow.png'

const Mobilier = props => {

    const [filters, setFilters] = useState('FILTRER')
    const [active, setActive] = useState(false)

    useEffect(() => {
        window.scrollTo(0, props.headHeight)
    }, [])

    return (
        <div className={`mobilier ${props.content ? 'visible-content' : 'hidden-content'}`} onClick={active ? () => setActive(false) : null, props.menu ? props.setMenu(false) : null}>
            <div className='mobilier-wrapper'>

                <div className='mobilier-item mobilier-title'>
                    <h1>
                        MOBILIER
                    </h1>
                    <div className='mobilier-filters' onClick={() => setActive(!active)}>
                        <p>
                            {filters}
                        </p>
                        <img className={active ? 'mobilier-top-arrow' : 'mobilier-down-arrow'} src={downArrow} alt='' />
                        <div className={active ? 'mobilier-open-filters' : 'mobilier-close-filters'}>
                            <p className='mobilier-select-filter' onClick={() => setFilters('FILTRER')}>
                                TOUT AFFICHER
                            </p>
                            <p className='mobilier-select-filter' onClick={() => setFilters('CHAISES')}>
                                CHAISES
                            </p>
                            <p className='mobilier-select-filter' onClick={() => setFilters('CANAPÉS')}>
                                CANAPÉS
                            </p>
                            <p className='mobilier-select-filter' onClick={() => setFilters('LAMPES')}>
                                LAMPES
                            </p>
                            <p className='mobilier-select-filter' onClick={() => setFilters('TABLES')}>
                                TABLES
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mobilier-item test1'>
                    <img className='mobilier-first-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
                <div className='mobilier-item test2'>
                    <img className='mobilier-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
                <div className='mobilier-item test3'>
                    <img className='mobilier-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
                <div className='mobilier-item test4'>
                    <img className='mobilier-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
                <div className='mobilier-item test5'>
                    <div className='mobilier-split'>
                    </div>
                    <img className='mobilier-double-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
                <div className='mobilier-item test6'>
                    <img className='mobilier-img' src='https://static.madeindesign.com/static/2019/dossiers/mobilier/fr/03/dossier/v2/490x330_tables-basses.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Mobilier