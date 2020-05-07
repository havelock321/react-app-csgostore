import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  rifles: 1,
  knifes: 2,
  pistols: 3,
  tr: 4,
  ct: 5,
};
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
