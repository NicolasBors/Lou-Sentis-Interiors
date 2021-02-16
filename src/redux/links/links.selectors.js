import { createSelector } from "reselect";

const selectLinks = (state) => state.links;

export const selectLinksRealisation = createSelector(
  [selectLinks],
  (links) => links.realisations
);

export const selectLinksMobilier = createSelector(
  [selectLinks],
  (links) => links.collections
);
