const INITIAL_STATE = {
    sections: [
        {
            title: 'RÉALISATION',
            id: 1,
            linkUrl: 'réalisation'
        },
        {
            title: 'MOBILIER',
            id: 2,
            linkUrl: 'mobilier'
        },
        {
            title: 'INFORMATION',
            id: 3,
            linkUrl: 'information'
        },
        {
            title: 'CONTACT',
            id: 4,
            linkUrl: 'contact'
        }
    ],
    subSections: [
        {
            title: 'DUQUESNE',
            id: 1,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/duquesne'
        },
        // {
        //     title: 'HÔTEL SACHA',
        //     id: 2,
        //     section: 'RÉALISATION',
        //     linkUrl: 'réalisation/hôtel-sacha'
        // },
        {
            title: 'ÎLE DE LA RÉUNION',
            id: 3,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/île-de-la-réunion'
        },
        {
            title: 'LA COUPOLE',
            id: 4,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/la-coupole'
        },
        {
            title: 'LE RELAIS DU LOUVRE',
            id: 5,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/le-relais-du-louvre'
        },
        {
            title: 'SHOWROOM DIGITAL',
            id: 6,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/showroom-digital'
        },
        {
            title: 'ACCESSOIRES',
            id: 7,
            section: 'MOBILIER',
            linkUrl: 'mobilier/accessoires'
        },
        {
            title: 'ASSISES',
            id: 8,
            section: 'MOBILIER',
            linkUrl: 'mobilier/assises'
        },
        {
            title: 'LUMINAIRES',
            id: 9,
            section: 'MOBILIER',
            linkUrl: 'mobilier/luminaires'
        },
        {
            title: 'MEUBLES',
            id: 10,
            section: 'MOBILIER',
            linkUrl: 'mobilier/meubles'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer