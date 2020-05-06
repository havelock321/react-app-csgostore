/* CT */
import RICK from "./cs images/CHAR00.png";
import BUCK from "./cs images/CHAR01.png";
import FBI from "./cs images/CHAR02.png";
import SEAL from "./cs images/CHAR03.png";
/* TERROR*/
import DOCTOR from "./cs images/CHAR07.png";
import REBEL from "./cs images/CHAR06.png";
import HATGUY from "./cs images/CHAR04.png";
import ANTHATGUY from "./cs images/CHAR05.png";

const SHOP_DATA = [
  {
    id: 1,
    title: 'CONTRA TERRORISTA',
    routeName: 'ct',
    items: [
      {
        id: 1,
        name: 'Ricksaw’s',
        imageUrl: RICK,
        price: 800
      },
      {
        id: 2,
        name: 'Buckshot',
        imageUrl: BUCK,
        price: 710
      },
      {
        id: 3,
        name: 'FBI',
        imageUrl: FBI,
        price: 352
      },
      {
        id: 4,
        name: 'Seal Team 6',
        imageUrl: SEAL,
        price: 257
      }
    ]
  },
  {
    id: 2,
    title: 'Terrorista',
    routeName: 'tr',
    items: [
      {
        id: 5,
        name: 'The Doctor',
        imageUrl: DOCTOR,
        price: 250,
        isRifle: true
      },
      {
        id: 6,
        name: 'REBEL',
        imageUrl: REBEL,
        price: 100,
        isRifle: true
      },
      {
        id: 7,
        name: 'NO HAT GUY',
        imageUrl: HATGUY,
        price:500,
        isRifle: true
      },
      {
        id: 8,
        name: 'THE HAT GUY ',
        imageUrl: ANTHATGUY,
        price: 200,
        isRifle: true
      }
    ]
  }
];

export default SHOP_DATA;
