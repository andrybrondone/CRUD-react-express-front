import clsx from "clsx";
import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function ActiveLink({ href, children, className, onClick }) {
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === href;
  }, [location.pathname, href]);

  return (
    <NavLink to={href} className={clsx(className, "relative group")} onClick={onClick}>
      {children}
      <span
        className={clsx(
          isActive
            ? "h-[3px] rounded inline-block bg-secondary -bottom-3 dark:bg-dark-secondary absolute left-1/2 -translate-x-1/2 w-5 transition-[width] ease-in-out duration-300"
            : "h-[2px] rounded inline-block w-0 bg-secondary absolute left-0 -bottom-3 group-hover:w-full transition-[width] ease-in-out duration-300 hover:font-medium"
        )}
      ></span>
    </NavLink>
  );
}
