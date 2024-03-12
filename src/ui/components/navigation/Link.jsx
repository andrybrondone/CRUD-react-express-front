import { AiOutlineHome } from "react-icons/ai";
import ActiveLink from "./ActiveLink";

export default function Link() {
  return (
    <div
      className="flex items-center gap-10 max-lg:gap-3 z-0"
    >
      <ActiveLink
        href="/"
        className="flex items-center"
      >
        <AiOutlineHome className="relative bottom-[1px] right-1" />
        Accueil
      </ActiveLink>
      <ActiveLink
        href="/locations"

      >
        Locations
      </ActiveLink>
      <ActiveLink
        href="/histogramme"
      >
        Histogramme
      </ActiveLink>
    </div>
  )
}
