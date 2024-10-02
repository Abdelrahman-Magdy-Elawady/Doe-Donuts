import {
  donutBox1,
  donutBox2,
  donutBox3,
  donutBox4,
  cookiesAll,
  cookies1,
  cookies2,
  cookies3,
} from "../../assets/constants";

const generateId = () => {
  return parseInt(Math.random() * 9999999);
};
export const cookies_6_pack = {
  title: "cookies 6 pack",
  category: "cookies",
  id: generateId(),
  cost: 40,
  boxIncludes: [
    "2 x Chocolate Chip Cookies",
    "2 x White Chocolate & Macadamia",
    "2 x Brown Butter Dark Chocolate",
    "120g per cookie",
  ],
  imgs: [cookiesAll, cookies1, cookies2, cookies3],
};

export const minisAssortedBox = {
  title: "DOE Minis Assorted Box",
  id: generateId(),
  category: "donuts",
  cost: 70,
  description:
    "A box of 16 assorted mini donuts - all the favourite flavours, but in bite size form",
  boxIncludes: [
    "4 x Chocolate Ganache donuts",
    "4 x White Chocolate Raspberry donuts",
    "8 x Assorted premium filled donuts",
  ],
  imgs: [donutBox2, donutBox1, donutBox3, donutBox4],
};
