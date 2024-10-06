import { cn } from "../../Utils/cn";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Button } from "../../Components/Index";
import { useDispatch } from "react-redux";
import { modifyCart, removeFromCart } from "../../store";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CartListItem({ className, cartItem }) {
  const dispatch = useDispatch();
  const plusHandler = () => {
    dispatch(
      modifyCart({
        type: "plus",
        donut: cartItem,
      })
    );
  };
  const minusHandler = () => {
    dispatch(
      modifyCart({
        type: "minus",
        donut: cartItem,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <div
      className={cn(
        "flex p-4  h-[500px]  md:h-60 w-96   md:flex-row flex-col border-2 gap-8  rounded-xl border-[--body-text]",
        className
      )}
    >
      <div className=" relative w-full h-60  md:w-48 md:h-full    overflow-hidden rounded-md ">
        <div className="absolute inset-0">
          <img
            src={cartItem.img}
            className="size-full object-center  object-cover support-hover:hover:scale-105 transition-transform duration-500 "
          />
        </div>
      </div>

      <div className="flex-1  flex flex-col justify-between gap-8 text-center">
        <div className="text-xl font-extrabold ">{cartItem.name}</div>
        <div className="flex  justify-between items-center font-bold ">
          <div className="flex justify-center gap-4 md:gap-6 h-12">
            <Button
              className="[border-radius:10px_0_0_10px] py-2 md:text-lg text-sm sm:px-4 px-3"
              onClick={() => minusHandler()}
            >
              <TiMinus />
            </Button>
            <span className=" flex justify-center items-center  ">
              {cartItem.count}
            </span>
            <Button
              className=" [border-radius:0_10px_10px_0]  py-2 md:text-lg text-sm sm:px-4 px-3"
              onClick={() => plusHandler()}
            >
              <TiPlus />
            </Button>
          </div>
          <div>
            x&nbsp; &nbsp;{cartItem.cost}$&nbsp; &nbsp;= &nbsp; &nbsp;
            {cartItem.cost * cartItem.count}$
          </div>
        </div>

        <Button
          className="h-12 rounded-xl  self-center"
          onClick={() => deleteHandler()}
        >
          <RiDeleteBin5Fill />
        </Button>
      </div>
    </div>
  );
}
