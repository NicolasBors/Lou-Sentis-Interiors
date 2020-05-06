import React from 'react'
import LinksOverview from '../components/LinksOverview'

const Realisation = () => {
    const title = 'RÉALISATION'
    const description = 'Projets architecturaux'

    return (
        <div className='realisation'>
            <LinksOverview title={title} description={description} />
        </div>
    )
}

export default Realisation