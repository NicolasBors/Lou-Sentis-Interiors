import { data } from "../../data/data";

const sectionsIds = ["realisation", "mobilier"];

const buildSubsections = () => {
  const subsections = [];
  for (const sectionId of sectionsIds) {
    const subsection = data[sectionId].pages.reduce((acc, { name, path }) => {
      return [...acc, { name, path, sectionId }];
    }, []);
    subsections.push(...subsection);
  }
  return subsections;
};

const INITIAL_STATE = {
  sections: data.sections,
  subSections: buildSubsections(),
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
