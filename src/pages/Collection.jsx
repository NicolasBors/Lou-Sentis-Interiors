import React from 'react'

import ContentOverview from '../components/ContentOverview'

const Collection = ({ content }) => (
    <div>
        <ContentOverview collection content={content} />
    </div>
)

export default Collection