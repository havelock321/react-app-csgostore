/* Used as starting data for ShopPage */
import RICK from "./cs images/CHAR00.png";
import BUCK from "./cs images/CHAR01.png";
import FBI from "./cs images/CHAR02.png";
import SEAL from "./cs images/CHAR03.png";
/* GUNS*/
import AK47 from "./cs images/ak_preview.png";
import AWP from "./cs images/awp_preview.png";
import M4A1 from "./cs images/CHAR02.png";
import M4A12 from "./cs images/CHAR03.png";


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
        price: 25000
      },
      {
        id: 2,
        name: 'Buckshot',
        imageUrl: BUCK,
        price: 18000
      },
      {
        id: 3,
        name: 'FBI',
        imageUrl: FBI,
        price: 35
      },
      {
        id: 4,
        name: 'Seal Team 6',
        imageUrl: SEAL,
        price: 25
      }
    ]
  },
  {
    id: 1,
    title: 'RIFLES',
    routeName: 'rifles',
    items: [
      {
        id: 1,
        name: 'AK47 CUSTOM',
        imageUrl: AK47,
        price: 25000,
        isRifle: true
      },
      {
        id: 1,
        name: 'AK47 CUSTOM',
        imageUrl: AK47,
        price: 25000,
        isRifle: true
      },
      {
        id: 1,
        name: 'AK47 CUSTOM',
        imageUrl: AK47,
        price: 25000,
        isRifle: true
      },
      {
        id: 1,
        name: 'AK47 CUSTOM',
        imageUrl: AK47,
        price: 25000,
        isRifle: true
      }
    ]
  }
];

export default SHOP_DATA;
