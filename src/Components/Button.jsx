import { cn } from "../Utils/cn";

const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        "outline-0 support-hover:hover:cursor-pointer text-[--body-text] text-lg uppercase font-bold rounded-full border-2 border-current px-16 py-4 support-hover:hover:bg-[--body-text] support-hover:hover:text-[--body-bg] duration-300 transition-colors",
        className
      )}
      {...rest}
      style={{
        backdropFilter: "blur(70px)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
