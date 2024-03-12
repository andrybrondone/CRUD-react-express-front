import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const ConfirmContext = createContext({
  isOpen: false,
  toggleOpen: PropTypes.func,
  isMobile: false,
  toggleNav: PropTypes.func,
});

ConfirmContext.displayName = 'ConfirmContext';

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

ConfirmProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
