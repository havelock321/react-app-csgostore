import ct from './../../assets/cs images/ct_menu_00.jpg';
import tr from './../../assets/cs images/terror_menu_00.jpg';
import rifles from './../../assets/cs images/gun_menu_01.jpg';
import knifes from './../../assets/cs images/knife_menu.jpg';
import pistol from './../../assets/cs images/pistol_menu.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: "rifles",
      imageUrl: rifles,
      id: 1,
      linkUrl: "shop/rifles",
      size: "large",
    },
    {
      title: "KINIFES",
      imageUrl: knifes,
      id: 2,
      linkUrl: "shop/knifes",
      size: "large",
    },
    {
      title: "pistols",
      imageUrl: pistol,
      id: 3,
      linkUrl: "shop/pistols",
      size: "large",
    },
    {
      title: "Terrorist",
      imageUrl: tr,
      size: "large",
      id: 4,
      linkUrl: "shop/tr",
    },
    {
      title: "Global Risk",
      imageUrl: ct,
      size: "large",
      id: 5,
      linkUrl: "shop/ct",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
