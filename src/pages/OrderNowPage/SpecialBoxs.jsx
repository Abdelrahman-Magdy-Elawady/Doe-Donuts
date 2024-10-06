import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store";
import { Button } from "../../Components/Index";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
//-----------------------------------------------
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
export default function SpecialBoxs({ product }) {
  const imgs = useRef(null);
  const active = useRef();
  const events = useRef([]);

  //------------------special boxs add to cart----------------
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if (count === 0) return;
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        img: product.imgs[0],
        cost: product.cost,
        count,
      })
    );
    setCount(0);
  };
  //------------------flip animation------------------------
  const { contextSafe } = useGSAP(
    () => {
      events.current = gsap.utils.toArray(`.child`);
      active.current = events.current[0];
    },
    {
      scope: imgs,
    }
  );

  const flipHandler = contextSafe((e) => {
    const { target } = e;
    const state = Flip.getState(events.current);
    if (target === active.current) return;

    active.current.dataset.grid = target.dataset.grid;
    target.dataset.grid = "child-0";
    active.current = target;
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "power1.inOut",
    });
  });

  //-------------------------------------------------------
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-8   md:h-[700px] h-[1200px]  [box-shadow:0_0_5px_1px_var(--body-text)] p-6 rounded-md max-w-[1280px] my-8 md:mx-auto mx-1">
      <div className={styles.parent} ref={imgs}>
        {product.imgs.map((img, index) => (
          <figure
            key={index}
            data-grid={`child-${index}`}
            className={`child support-hover:hover:cursor-pointer rounded-md  overflow-hidden`}
            onClick={flipHandler}
          >
            <img
              src={img}
              alt={product.title}
              decoding="async"
              loading="lazy"
              className="pointer-events-none size-full object-center  object-cover "
            />
          </figure>
        ))}
      </div>

      <div className=" font-bold flex flex-col justify-around ">
        <h2 className="uppercase text-3xl font-extrabold">{product.title}</h2>
        <div className="text-xl">{product.cost} $</div>
        <div className=" flex justify-between  items-center">
          <div className="flex justify-center gap-0 md:gap-2 lg:gap-6 h-12">
            <Button
              className="[border-radius:10px_0_0_10px] py-2 lg:text-lg text-sm px-2 lg:px-4"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                } else {
                  setCount(0);
                }
              }}
            >
              <TiMinus />
            </Button>
            <span className=" w-12 flex justify-center items-center lg:text-lg text-sm ">
              {count}
            </span>
            <Button
              className=" [border-radius:0_10px_10px_0]  py-2 lg:text-lg text-sm px-2 lg:px-4"
              onClick={() => setCount(count + 1)}
            >
              <TiPlus />
            </Button>
          </div>
          <Button
            className="h-12 px-2 md:px-4 py-2 rounded-xl md:text-lg text-sm flex justify-center items-center gap-4 min-w-20"
            onClick={() => addToCartHandler()}
          >
            <span className="hidden sm:block text-base">add to cart</span>
            <FaCartPlus className="text-xl" />
          </Button>
        </div>
        <div>{product?.description}</div>
        <div className="space-y-4">
          <div className="text-xl underline"> box includes :</div>
          {product.boxIncludes.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
