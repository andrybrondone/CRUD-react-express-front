import { RiFacebookCircleFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import Logo from "../../design-system/logo/Logo";
import { Container } from "../container/Container";
import Link from "./Link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray mt-10 dark:bg-black dark-transition">

      <Container className="pt-12 pb-5 max-md:pt-8 max-md:pb-0 space-y-5 text-white">
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-10">
          <Link />
          <div className="absolute left-1/2 -translate-x-1/2 max-md:hidden">
            <Logo size="medium" />
          </div>

          <div className="flex items-center justify-end gap-3 text-3xl text-white">
            <a href="#" target="_blank" className="bg-gray-800 p-3 rounded-full hover:shadow-4xl anim-transition">
              <RiFacebookCircleFill />
            </a>
            <a href="#" target="_blank" className="bg-gray-800 p-3 rounded-full hover:shadow-4xl anim-transition">
              <RiGithubFill />
            </a>
            <a href="#" target="_blank" className="bg-gray-800 p-3 rounded-full hover:shadow-4xl anim-transition">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </Container>
      <Container className="py-6">
        <hr className="text-gray-700" />
        <p className="text-center text-caption2 max-sm:text-caption4 pt-6 text-gray-600">
          Copyright &copy; {`${currentYear} `} | Réaliser par Brondone ANDRIAMBOLOLOMANANA
        </p>
      </Container>
    </div>
  );
};
