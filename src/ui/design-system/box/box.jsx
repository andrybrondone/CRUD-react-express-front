import clsx from "clsx";
import { useContext } from "react";
import { DarkModeContext } from "../../components/darkMode/DarkModeGlobal";

export const Box = ({
  children,
  className,
  padding_x = "px-9",
  padding_y = "py-9",
}) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={clsx(
        isDarkMode && "dark",
        "border border-gray-400 shadow rounded dark:border-gray-800  dark:shadow dark:shadow-gray-800",
        padding_x,
        padding_y,
        className
      )}
    >
      {children}
    </div>
  );
};
