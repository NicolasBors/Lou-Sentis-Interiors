import { data } from "../../data/data";

const INITIAL_STATE = {
  sections: data.sections,
  // TODO
  subSections: [
    {
      // id: 1,
      label: data.realisation.pages[0].name,
      sectionId: "realisation",
      path: data.realisation.pages[0].path,
    },
    // {
    //   title: "HÔTEL SACHA",
    //   id: 2,
    //   section: "RÉALISATION",
    //   linkUrl: "réalisation/hôtel-sacha",
    // },
    // {
    //   title: "ÎLE DE LA RÉUNION",
    //   id: 3,
    //   section: "RÉALISATION",
    //   linkUrl: "réalisation/île-de-la-réunion",
    // },
    // {
    //   title: "LA COUPOLE",
    //   id: 4,
    //   section: "RÉALISATION",
    //   linkUrl: "réalisation/la-coupole",
    // },
    // {
    //   title: "LE RELAIS DU LOUVRE",
    //   id: 5,
    //   section: "RÉALISATION",
    //   linkUrl: "réalisation/le-relais-du-louvre",
    // },
    // {
    //   title: "SHOWROOM DIGITAL",
    //   id: 6,
    //   section: "RÉALISATION",
    //   linkUrl: "réalisation/showroom-digital",
    // },
    {
      label: data.mobilier.pages[0].name,
      // id: 7,
      sectionId: "mobilier",
      path: data.mobilier.pages[0].path,
    },
    // {
    //   title: "ASSISES",
    //   id: 8,
    //   section: "MOBILIER",
    //   linkUrl: "mobilier/assises",
    // },
    // {
    //   title: "LUMINAIRES",
    //   id: 9,
    //   section: "MOBILIER",
    //   linkUrl: "mobilier/luminaires",
    // },
    // {
    //   title: "MEUBLES",
    //   id: 10,
    //   section: "MOBILIER",
    //   linkUrl: "mobilier/meubles",
    // },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
