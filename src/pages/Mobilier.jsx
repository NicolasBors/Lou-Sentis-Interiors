import React from 'react'
import LinksOverview from '../components/LinksOverview'

const Mobilier = () => {
    const title = 'MOBILIER'
    const description = "Collection d'éléments mobiliers"

    return (
        <div className='mobilier'>
            <LinksOverview title={title} description={description} />
        </div>
    )
}

export default Mobilier