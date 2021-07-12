import React from 'react'
import { shuffleArray } from '../../utils/Array'
import './HomeGallery.scss'

const images = [
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test1',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test2',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test3',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test4',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test5',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test6',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test7',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test8',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test9',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test10',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test11',
  },
  {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    name: 'test12',
  },
]

const Blocs = ({ blocs }) =>
  blocs.map(({ url, name }) => (
    <div className={`bloc ${url ? 'has-img' : ''}`}>
      {url ? (
        <img
          alt={name}
          src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw"
        />
      ) : (
        <></>
      )}
    </div>
  ))

const HomeGallery = () => {
  const topBlocs = shuffleArray(images.filter((_, index) => index <= 3).concat(new Array(10).fill({})))
  const midBlocs = shuffleArray(images.filter((_, index) => index > 3 && index <= 7).concat(new Array(10).fill({})))
  const bottomBlocs = shuffleArray(
    images.filter((_, index) => index > 7 && index <= images.length).concat(new Array(10).fill({}))
  )

  return (
    <div className="HomeGallery">
      <div className="top-grid grid-base-layout">
        <Blocs blocs={topBlocs} />
      </div>
      <div className="mid-grid grid-base-layout">
        <Blocs blocs={midBlocs} />
      </div>
      <div className="bottom-grid grid-base-layout">
        <Blocs blocs={bottomBlocs} />
      </div>
    </div>
  )
}

export default HomeGallery
