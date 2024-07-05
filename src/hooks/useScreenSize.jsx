import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      if (window.innerWidth < 640) return "sm";
      if (window.innerWidth < 768) return "md";
      return "lg";
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
