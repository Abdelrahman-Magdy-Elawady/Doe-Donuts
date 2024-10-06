import { Modal, Button } from "../../Components/Index";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
export default function DonutCardDetails({ donut, close, className }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if (count === 0) return;
    dispatch(addToCart({ ...donut, count }));
    setCount(0);
  };

  return (
    <Modal close={close} className={className}>
      <div
        className="p-8 h-full flex  flex-col lg:flex-row gap-8 justify-center 
       md:text-xl font-extrabold text-center lg:text-start "
      >
        <div className="relative h-96 lg:h-full w-full overflow-hidden rounded-md ">
          <div className="absolute inset-0">
            <img
              src={donut.img}
              className="size-full object-center  object-cover support-hover:hover:scale-105 transition-transform duration-500 "
            />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-8 lg:space-y-24 self-center w-full">
          <div className=" text-center text-2xl uppercase">{donut.name}</div>
          <div>{donut.cost} $</div>
          <div>{donut.des}</div>
          <div className=" flex justify-between sm:justify-center gap-16 items-center">
            <div className="flex justify-center gap-0 sm:gap-6 h-12">
              <Button
                className="[border-radius:10px_0_0_10px] py-2 md:text-lg text-sm px-2 md:px-4"
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
              <span className=" w-12 flex justify-center items-center md:text-lg text-sm ">
                {count}
              </span>
              <Button
                className=" [border-radius:0_10px_10px_0]  py-2 md:text-lg text-sm px-2 md:px-4"
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
        </div>
      </div>
    </Modal>
  );
}
