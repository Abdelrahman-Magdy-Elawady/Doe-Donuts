import { cn } from "../Utils/cn";

const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        "support-hover:hover:cursor-pointer text-lg uppercase font-bold rounded-full border-2 border-current px-16 py-4 support-hover:hover:bg-[--body-text] support-hover:hover:text-[--body-bg] duration-300 transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
