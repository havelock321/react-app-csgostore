/* CT */
import RICK from "../../pages/shop/cs images/CHAR00.png";
import BUCK from "../../pages/shop/cs images/CHAR01.png";
import FBI from "../../pages/shop/cs images/CHAR02.png";
import SEAL from "../../pages/shop/cs images/CHAR03.png";
/* TERROR*/
import DOCTOR from "../../pages/shop/cs images/CHAR07.png";
import REBEL from "../../pages/shop/cs images/CHAR06.png";
import HATGUY from "../../pages/shop/cs images/CHAR04.png";
import ANTHATGUY from "../../pages/shop/cs images/CHAR05.png";

/* KNIFES*/
import KNIFE00 from "../../pages/shop/cs images/KNIFE01.png";
import AK47 from "../../pages/shop/cs images/AK47.png";

//import KNIFE01 from "../../pages/shop/cs images/KNIFE01.png";
//import KNIFE02 from "../../pages/shop/cs images/KNIFE02.png";
//import KNIFE03 from "../../pages/shop/cs images/KNIFE03.png";

const SHOP_DATA = {
  rifles: {
    id: 1,
    title: "RIFLES",
    routeName: "rifles",
    items: [
      {
        id: 1,
        name: "AK 47 PIXEL ",
        imageUrl: AK47,
        price: 300,
      },
      {
        id: 2,
        name: "AK 47 PIXEL",
        imageUrl: AK47,
        price: 300,
      },
      {
        id: 3,
        name: "AK 47 PIXEL ",
        imageUrl: AK47,
        price: 300,
      },
      {
        id: 4,
        name: "AK 47 PIXEL ",
        imageUrl: AK47,
        price: 300,
      },
    ],
  },
  knifes: {
    id: 2,
    title: "KNIFES",
    routeName: "knifes",
    items: [
      {
        id: 1,
        name: "Pretty knife",
        imageUrl: KNIFE00,
        price: 800,
      },
      {
        id: 1,
        name: "Pretty knife",
        imageUrl: KNIFE00,
        price: 800,
      },
      {
        id: 1,
        name: "Ricksaw’s",
        imageUrl: KNIFE00,
        price: 800,
      },
      {
        id: 1,
        name: "Ricksaw’s",
        imageUrl: KNIFE00,
        price: 800,
      },
    ],
  },
  pistols: {
    id: 3,
    title: "PISTOLS",
    routeName: "pistols",
    items: [],
  },
  ct: {
    id: 5,
    title: "Global Risk",
    routeName: "ct",
    items: [
      {
        id: 1,
        name: "Ricksaw’s",
        imageUrl: RICK,
        price: 800,
      },
      {
        id: 2,
        name: "Buckshot",
        imageUrl: BUCK,
        price: 710,
      },
      {
        id: 3,
        name: "FBI",
        imageUrl: FBI,
        price: 352,
      },
      {
        id: 4,
        name: "Seal Team 6",
        imageUrl: SEAL,
        price: 257,
      },
    ],
  },
  tr: {
    id: 4,
    title: "Terrorist",
    routeName: "tr",
    items: [
      {
        id: 5,
        name: "The Doctor",
        imageUrl: DOCTOR,
        price: 250,
        isRifle: true,
      },
      {
        id: 6,
        name: "REBEL",
        imageUrl: REBEL,
        price: 100,
        isRifle: true,
      },
      {
        id: 7,
        name: "NO HAT GUY",
        imageUrl: HATGUY,
        price: 500,
        isRifle: true,
      },
      {
        id: 8,
        name: "THE HAT GUY ",
        imageUrl: ANTHATGUY,
        price: 200,
        isRifle: true,
      },
    ],
  },
};

export default SHOP_DATA;
