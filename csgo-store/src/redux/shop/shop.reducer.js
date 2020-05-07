import SHOP_CS_GO from "./shop.dataCSGO";

const INITITAL_STATE = {
  collections: SHOP_CS_GO,
};

const shopReducer = (state = INITITAL_STATE, action) => {
    switch (action.type) {
        default:
           return state;
    }
}

export default shopReducer;