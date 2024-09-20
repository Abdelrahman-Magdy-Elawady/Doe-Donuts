import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const HamBurgerIcon = ({ className, isClose, ...rest }) => {
  return (
    <div
      className={`${className} support-hover:hover:cursor-pointer`}
      {...rest}
    >
      {isClose ? <RxHamburgerMenu /> : <RxCross2 />}
    </div>
  );
};

export default HamBurgerIcon;
