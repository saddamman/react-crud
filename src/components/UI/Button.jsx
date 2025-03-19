import cn from "../../lib/utils/cn";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 text-white text-center bg-red-950 rounded hover:bg-[rgb(193,17,25)] ease-in-out duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
