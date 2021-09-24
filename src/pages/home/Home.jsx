import React, { useEffect, useState } from 'react'

import HomeGallery from '../../components/home-gallery/HomeGallery'

import { homePages } from '../../data/data.json'
import Incoming from '../incoming/Incoming'
import data from '../../data/data.json'
import { useWindowSize } from '../../utils/CustomHooks'

import './Home.scss'

const Home = () => {
  const windowSize = useWindowSize()
  const [screen, setScreen] = useState(windowSize > 992 ? 'desktop' : 'mobile')
  useEffect(() => setScreen(windowSize > 992 ? 'desktop' : 'mobile'), [windowSize])

  const homePage = homePages?.[0]
  if (!homePage?.topImages?.length && !homePage?.middleImages?.length && !homePage?.bottomImages?.length) {
    return <Incoming />
  }

  const { topImages, middleImages, bottomImages } = homePage

  const buildImagesMap = (images) =>
    images?.reduce(
      (acc, cur) => {
        const { position, projectId, ...image } = cur
        const href = data.projects?.find((project) => project.id === projectId)?.path
        const content = { ...image, href }
        return {
          ...acc,
          desktop: { ...acc.desktop, [cur.position.desktop - 1]: content },
          mobile: { ...acc.mobile, [cur.position.mobile + 2]: content },
        }
      },
      {
        desktop: {},
        mobile: {},
      }
    )

  return (
    <div className="home">
      <HomeGallery
        topImagesMap={buildImagesMap(topImages)}
        middleImagesMap={buildImagesMap(middleImages)}
        bottomImagesMap={buildImagesMap(bottomImages)}
        screen={screen}
      />
    </div>
  )
}

export default Home
