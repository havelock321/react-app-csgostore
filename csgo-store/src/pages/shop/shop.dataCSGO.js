/* Used as starting data for ShopPage */
import AK47 from "./cs images/CHAR00.png";
import AWP from "./cs images/CHAR01.png";
import M4A1 from "./cs images/CHAR02.png";
import M4A12 from "./cs images/CHAR03.png";

const SHOP_DATA = [
  {
    id: 1,
    title: 'CONTRA TERRORISTA',
    routeName: 'rifles',
    items: [
      {
        id: 1,
        name: 'Ricksaw’s',
        imageUrl: AK47,
        price: 25000
      },
      {
        id: 2,
        name: 'Buckshot',
        imageUrl: AWP,
        price: 18000
      },
      {
        id: 3,
        name: 'FBI',
        imageUrl: M4A1,
        price: 35
      },
      {
        id: 4,
        name: 'Seal Team 6',
        // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: M4A12,
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
