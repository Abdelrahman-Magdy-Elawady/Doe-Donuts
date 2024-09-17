import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const HamBurgerIcon = ({ className, isClose, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {isClose ? <RxHamburgerMenu /> : <RxCross2 />}
    </div>
  );
};

export default HamBurgerIcon;
