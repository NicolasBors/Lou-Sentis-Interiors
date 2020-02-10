import React from 'react'
import './css/Mobilier.css'

const Mobilier = props => {
    console.log(props.content);
    
    return (
        <div className={`mobilier ${props.content ? 'visible-content' : 'hidden-content'}`}>
            <div className='mobilier-wrapper'>

                <div className='mobilier-item mobilier-title'>
                    <h1>
                        MOBILIER
                    </h1>
                    <p>
                        Filtres
                    </p>
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