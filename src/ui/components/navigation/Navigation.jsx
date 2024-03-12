import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

export const Navigation = () => {

  return (
    <div className="pt-3">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
