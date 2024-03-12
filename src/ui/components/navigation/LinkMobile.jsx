import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ConfirmContext } from "../modale/ConfirmContext";
import ActiveLink from "./ActiveLink";

export default function LinkMobile() {
  const { toggleNav } = useContext(ConfirmContext)
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className="flex flex-col pt-32 overflow-hidden items-center text-3xl gap-10 dark:bg-gray bg-gray-400 z-10 top-0 left-0 w-full h-full fixed md:hidden animation-nav"
    >
      <div className="flex items-center gap-4 absolute left-4 top-6 border-b-2 border-gray-700 pb-5">
        {isDarkMode ? <h1>Passer en mode claire</h1> : <h1>Passer en mode sombre</h1>}

        <ToggleBtn />
      </div>
      <ActiveLink
        href="/"
        className="flex items-center"
        onClick={toggleNav}
      >
        <AiOutlineHome className="relative bottom-[1px] right-1" />
        Accueil
      </ActiveLink>
      <ActiveLink
        href="/locations"
        onClick={toggleNav}
      >
        Locations
      </ActiveLink>
      <ActiveLink
        href="/histogramme"
        onClick={toggleNav}
      >
        Histogramme
      </ActiveLink>
      <div className="absolute right-4 top-7 text-4xl text-gray-700 dark:text-white">
        <RiCloseCircleFill onClick={toggleNav} />
      </div>
    </div>
  )
}
