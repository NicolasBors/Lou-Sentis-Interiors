// import Duquesne from "../../data/projects/Duquesne";
// import IleDeLaReunion from "../../data/projects/IleDeLaReunion";
// import LaCoupole from "../../data/projects/LaCoupole";
// import LeRelaisDuLouvre from "../../data/projects/LeRelaisDuLouvre";
// import ShowroomDigital from "../../data/projects/ShowroomDigital";

// import Accessoires from "../../data/collection/Accessoires";
// import Assises from "../../data/collection/Assises";
// import Luminaires from "../../data/collection/Luminaires";
// import Meubles from "../../data/collection/Meubles";

import { data } from "../../data/data";

const INITIAL_STATE = {
  // TODO
  realisation: [
    {
      // id: 1,
      label: data.realisation.pages[0].name,
      image: data.realisation.pages[0].images[0].url,
      path: data.realisation.pages[0].path,
    },
    // {
    //   id: 2,
    //   title: IleDeLaReunion.title,
    //   image: IleDeLaReunion.image[0].src,
    //   linkUrl: "/île-de-la-réunion",
    // },
    // {
    //   id: 3,
    //   title: LaCoupole.title,
    //   image: LaCoupole.image[0].src,
    //   linkUrl: "/la-coupole",
    // },
    // {
    //   id: 4,
    //   title: LeRelaisDuLouvre.title,
    //   image: LeRelaisDuLouvre.image[0].src,
    //   linkUrl: "/le-relais-du-louvre",
    // },
    // {
    //   id: 5,
    //   title: ShowroomDigital.title,
    //   image: ShowroomDigital.image[0].src,
    //   linkUrl: "/showroom-digital",
    // },
  ],
  mobilier: [
    {
      // id: 1,
      label: data.mobilier.pages[0].name,
      image: data.mobilier.pages[0].images[0].url,
      path: data.mobilier.pages[0].path,
    },
    // {
    //   id: 2,
    //   title: Assises.title,
    //   image: Assises.image[0].src,
    //   linkUrl: "/assises",
    // },
    // {
    //   id: 3,
    //   title: Luminaires.title,
    //   image: Luminaires.image[0].src,
    //   linkUrl: "/luminaires",
    // },
    // {
    //   id: 4,
    //   title: Meubles.title,
    //   image: Meubles.image[0].src,
    //   linkUrl: "/meubles",
    // },
  ],
};

const linksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
