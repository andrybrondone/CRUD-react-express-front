import { useContext } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logoVoiture from "../../../assets/logo-voiture.svg";
import { Logo } from "../../design-system/logo/Logo";
import { Container } from "../container/Container";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ConfirmContext } from "../modale/ConfirmContext";
import Link from "./Link";
import LinkMobile from "./LinkMobile";

export default function NavBar() {
  const { isMobile, toggleNav } = useContext(ConfirmContext)
  return (
    <>
      <Container className="flex items-center justify-between z-50 py-4 gap-7 backdrop-blur-sm border-2 mb-8 border-gray-500 bg-white/40 dark:bg-gray/40  rounded-[200px] dark:border-gray-800 dark-transition">
        <NavLink to="/">
          <div className="flex items-center gap-2.5">
            <div>
              <h2
                className="text-gray font-bold flex items-center gap-1 dark:text-white"
              >
                <img src={logoVoiture} alt="logo voiture" className="w-[50px]" />

                Gestion de Location de Voiture
              </h2>
            </div>
          </div>
        </NavLink>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo size="small" className="max-md:hidden" />
        </div>
        <div
          className="flex items-center gap-10 dark:text-white"
        >
          <RiMenu3Fill className="text-3xl cursor-pointer md:z-20 md:hidden" onClick={toggleNav} />

          <div className="flex items-center gap-6 max-lg:gap-3 max-md:hidden">
            <ToggleBtn />
            <Link />
          </div>
        </div>
      </Container>
      {
        isMobile && <LinkMobile />
      }
    </>
  )
}
