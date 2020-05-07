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

/* RIFLES*/
import M4A1S from "../../pages/shop/cs images/MA41_SILENCER.gif";
import M4A1 from "../../pages/shop/cs images/M4A1.gif";
import AWP02 from "../../pages/shop/cs images/AWP02.gif";
import P90 from "../../pages/shop/cs images/MP5.gif";

/* KNIFES*/
import KNIFE01 from "../../pages/shop/cs images/butterfly.gif";
import KNIFE02 from "../../pages/shop/cs images/VANILLA.gif";
import KNIFE03 from "../../pages/shop/cs images/KARAMBIT.gif";
import KNIFE04 from "../../pages/shop/cs images/butterflydual.gif";


/* PISTOL*/
import PISTOL01 from "../../pages/shop/cs images/PISTOL.gif";
import PISTOL02 from "../../pages/shop/cs images/PISTOLDUAL.gif";
import PISTOL03 from "../../pages/shop/cs images/SCOUTPISTOL.gif";
import PISTOL04 from "../../pages/shop/cs images/PISTOLSHOW.gif";

const SHOP_DATA = {
  ct: {
    id: 5,
    title: "Global Risk",
    routeName: "ct",
    items: [
      {
        id: 9,
        name: "Ricksaw’s",
        imageUrl: RICK,
        price: 800,
      },
      {
        id: 10,
        name: "Buckshot",
        imageUrl: BUCK,
        price: 710,
      },
      {
        id:11,
        name: "FBI",
        imageUrl: FBI,
        price: 352,
      },
      {
        id: 12,
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
        id: 13,
        name: "The Doctor",
        imageUrl: DOCTOR,
        price: 250,
        isRifle: true,
      },
      {
        id: 14,
        name: "REBEL",
        imageUrl: REBEL,
        price: 100,
        isRifle: true,
      },
      {
        id: 15,
        name: "NO HAT GUY",
        imageUrl: HATGUY,
        price: 500,
        isRifle: true,
      },
      {
        id: 16,
        name: "THE HAT GUY ",
        imageUrl: ANTHATGUY,
        price: 200,
        isRifle: true,
      },
    ],
  },
  rifles: {
    id: 1,
    title: "RIFLES",
    routeName: "rifles",
    items: [
      {
        id: 1,
        name: "M4A1 CSGO",
        imageUrl: M4A1,
        price: 3000,
      },
      {
        id: 2,
        name: "GREY SOUCT",
        imageUrl: AWP02,
        price: 300,
      },
      {
        id: 3,
        name: "M4A1 SILENCER",
        imageUrl: M4A1S,
        price: 300,
      },
      {
        id: 4,
        name: "MP5",
        imageUrl: P90,
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
        id: 5,
        name: "Karambit",
        imageUrl: KNIFE03,
        price: 800,
      },
      {
        id: 6,
        name: "Butterfly",
        imageUrl: KNIFE01,
        price: 800,
      },
      {
        id: 7,
        name: "Vanilla",
        imageUrl: KNIFE02,
        price: 800,
      },
      {
        id: 8,
        name: "Butterfly Dual",
        imageUrl: KNIFE04,
        price: 800,
      },
    ],
  },
  pistols: {
    id: 3,
    title: "PISTOLS",
    routeName: "pistols",
    items: [
      {
        id: 35,
        name: "GLOCK F",
        imageUrl: PISTOL01,
        price: 300,
      },
      {
        id: 34,
        name: "DUAL EAGLE",
        imageUrl: PISTOL02,
        price: 300,
      },
      {
        id: 36,
        name: "SCOUT",
        imageUrl: PISTOL03,
        price: 300,
      },
      {
        id: 37,
        name: "GLOBK",
        imageUrl: PISTOL04,
        price: 300,
      }
    ],
  }
};

export default SHOP_DATA;
