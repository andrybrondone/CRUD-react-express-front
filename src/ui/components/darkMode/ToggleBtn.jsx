import clsx from "clsx";
import { useContext, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { DarkModeContext } from "./DarkModeGlobal";

export const ToggleBtn = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const element = document.querySelector(".toggle-anim");

    element?.classList.add("toggle-animated");

    const timeOut = setTimeout(() => {
      element?.classList.remove("toggle-animated");
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isDarkMode]);

  return (
    <div className={clsx(isDarkMode && "dark")}>
      <div
        className="bg-gray-400 w-14 h-7 max-lg:w-11 max-lg:h-6 rounded-[10rem] max-lg:rounded-[20px] px-[3px] cursor-pointer shadow-sm relative flex items-center dark:bg-gray-700 .dark-transition"
        onClick={toggleDarkMode}
      >
        <div className="bg-white w-6 h-6 max-lg:w-5 max-lg:h-5 rounded-full absolute dark:bg-gray-800 dark:translate-x-[26px] max-lg:dark:translate-x-[19px]">
          <div
            className="toggle-anim
              w-full h-full flex justify-center items-center"
          >
            {isDarkMode ? (
              <RiMoonClearFill className="text-white text-sm" />
            ) : (
              <RiSunFill className="text-alert-warning text-4xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
