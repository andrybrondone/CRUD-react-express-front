import { createContext, useState } from "react";

export const ConfirmContext = createContext({
  isOpen: false,
  toggleOpen: () => { },
  isMobile: false,
  toggleNav: () => { },
});

export const ConfirmProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleNav = () => {
    setIsMobile(!isMobile);
  };

  return (
    <ConfirmContext.Provider value={{ isOpen, toggleOpen, isMobile, toggleNav }}>
      {children}
    </ConfirmContext.Provider>
  );
};
