import { useChangeColor, useCssVarSetter } from "../../hooks";
import { empty_cart_icon } from "../../assets/constants";
//---------------------------------------------------------------
import { CurveBottom, Button } from "../../Components";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartListItem from "./CartListItem";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { cleanCart } from "../../store";
//-----------------------------------------------------------------
const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--md-white)",
      "--body-text": "var(--lg-pink)",
    },
  },
];
//-----------------------------------------------------------------
export default function CartPage() {
  const ref = useRef(null);
  useChangeColor(ref, colorPalette);
  useCssVarSetter({
    "--body-bg": "var(--md-white)",
    "--body-text": "var(--lg-pink)",
  });
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cleanCartHandler = () => {
    dispatch(cleanCart());
  };
  //-------------------------------------
  const totalCost = cart.reduce(
    (prev, current) => prev + current.count * current.cost,
    0
  );
  let content = null;
  if (!cart.length) {
    content = (
      <section className="sec-1 px-8 flex flex-col items-center justify-center text-center gap-8 pt-[calc(var(--md-nav-hight)+1rem)] h-screen">
        <div className="max-w-1/4">
          <img
            src={empty_cart_icon}
            alt=""
            className="object-center object-cover"
          />
        </div>
        <div className="font-bold text-2xl capitalize">
          Oops ... no items have been added to the cart yet
        </div>
      </section>
    );
  } else {
    content = (
      <section className="sec-1 py-[calc(var(--md-nav-hight)+2rem)] min-h-screen mx-8  flex flex-col gap-16 justify-center">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <Button className="self-start flex justify-center items-center gap-2 rounded-xl px-4 text-md">
            check out
            <IoBagCheckOutline className="text-2xl" />
          </Button>
          <div className="text-lg font-extrabold uppercase">
            total cost : {totalCost} $
          </div>
          <Button
            className="self-end flex justify-center items-center gap-2 rounded-xl px-4 text-md"
            onClick={() => cleanCartHandler()}
          >
            clean cart <MdOutlineDeleteForever className="text-3xl" />
          </Button>
        </div>

        <div className="flex-1 flex  flex-wrap  gap-8 justify-center items-center">
          {cart.map((cartItem, index) => (
            <CartListItem
              cartItem={cartItem}
              key={index}
              className="md:flex-[1_1_580px]"
            />
          ))}
        </div>
      </section>
    );
  }

  //--------------------------------------------------
  return (
    <main
      className="relative  bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      {content}
      <CurveBottom />
    </main>
  );
}
