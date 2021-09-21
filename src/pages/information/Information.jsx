import React from 'react'
import './Information.scss'

import { informations } from '../../data/data.json'

// DB
// const informations = [
//   {
//     contact: {
//       name: { text: 'Lou SENTIS', href: 'https://fr.linkedin.com/in/lou-sentis-43274250' },
//       address: {
//         text: '33 rue Lafayette, 75009 Paris',
//         href: 'https://www.google.fr/maps/place/WeWork+La+Fayette/@48.8743513,2.3354954,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e38f6f17aed:0xae3da7dd30c8108c!8m2!3d48.8743481!4d2.337679',
//       },
//       mail: { text: 'lou@lousentisinteriors.com', href: 'mailto:lou@lousentisinteriors.com' },
//       telephone: { text: '0668217088' },
//     },
//     aboutParagraphs: [
//       {
//         id: 'dsds',
//         text: `Lou Sentis est une architecte d'intérieur française diplômée de l'école d'architecture d'intérieur Camondo. Après avoir habité six mois à Milan et six mois à New York, elle fonde Lou Sentis Interiors. Son travail démontre une sensibilité créative et l'écoute du client.`,
//       },
//       { id: 'dkwns', text: `"Les détails font la perfection et la perfection n'est pas un détail."` },
//       {
//         id: 'djnskd',
//         text: `L'objectif de chaque projet est de raconter une histoire, transporter, faire rêver, là où tout est possible. C'est à travers ce schéma que tous les projets prennent vie. Avoir des idées innovantes et délicates dans un souci de poésie.`,
//       },
//       {
//         id: 'dskdjns',
//         text: `Disponible en tant que personne, cette architecte s'entoure des meilleurs artisans pour pouvoir mettre la qualité au coeur de ses principes. Sa collaboration avec la société Piment-Deco lui permet de proposer du mobilier d'un large choix et adapté aux projets. Son partenariat avec l'entreprise RSILVA lui permet de créer des concepts de mobilier sur mesure et innovants.`,
//       },
//     ],
//   },
// ]
const SECTIONS_TITLES = {
  contact: 'Contact',
  about: 'À propos de Lou',
}

const Information = () => {
  const informationData = informations?.[0]
  if (!informationData) {
    return <></>
  }

  const contactValues = Object.values(informationData.contact || [])

  return (
    <div className="Information">
      {!!contactValues?.length && (
        <div className="information-section">
          <h3>{SECTIONS_TITLES.contact}</h3>
          {contactValues.map(({ text, href }) =>
            href ? (
              <a target="blank" href={href}>
                {text}
              </a>
            ) : (
              <span>{text}</span>
            )
          )}
        </div>
      )}
      {!!informationData.aboutParagraphs?.length && (
        <div className="information-section">
          <h3>{SECTIONS_TITLES.about}</h3>
          {informationData.aboutParagraphs.map(({ id, text }) => (
            <span key={id} className="information-paragraph">
              {text}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Information
