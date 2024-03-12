import clsx from "clsx";
import { useContext } from "react";
import error404 from "../assets/error-404.png";
import { DarkModeContext } from "../ui/components/darkMode/DarkModeGlobal";

export default function Page404() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={clsx("py-10 flex flex-col items-center", isDarkMode && "dark")}
    >
      <img src={error404} alt="Page introuvable" className="w-[400px]" />
      <p>
        Oops cette page n'existe pas !
      </p>
    </div>
  );
}
