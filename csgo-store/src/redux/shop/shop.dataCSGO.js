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
import AK47 from "../../pages/shop/cs images/MAMBA.gif";
import AWP from "../../pages/shop/cs images/SCOPE.gif";
import AWP02 from "../../pages/shop/cs images/AWP02.gif";
import P90 from "../../pages/shop/cs images/MP5.gif";

/* KNIFES*/
import KNIFE00 from "../../pages/shop/cs images/KNIFESHOW.gif";
import KNIFE01 from "../../pages/shop/cs images/butterfly.gif";
import KNIFE02 from "../../pages/shop/cs images/VANILLA.gif";
import KNIFE03 from "../../pages/shop/cs images/KARAMBIT.gif";
import KNIFE04 from "../../pages/shop/cs images/butterflydual.gif";

//import KNIFE01 from "../../pages/shop/cs images/KARAMBIT.png";
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
        name: "PRO AWP SCOPE",
        imageUrl: AWP,
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
        name: "AK 47 CLASSIC",
        imageUrl: AK47,
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
    items: [],
  },
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
};

export default SHOP_DATA;
