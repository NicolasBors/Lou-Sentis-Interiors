import data from "../../data/data.json";

const buildLinks = Object.entries(data).reduce((acc, [key, val]) => {
  return {
    ...acc,
    [key]: val.map((v) => ({
      label: v.name,
      image: v.images?.[0].url,
      path: v.path,
    })),
  };
}, {});

const INITIAL_STATE = buildLinks;

const linksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
