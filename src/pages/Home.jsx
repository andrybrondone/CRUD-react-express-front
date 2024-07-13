import { Link } from "react-router-dom";
import img1 from "../assets/1.svg";
import { Container } from "../ui/components/container/Container";

export const Home = () => {

  return (
    <div className="py-8">
      <Container className="flex items-center justify-evenly max-md:flex-col-reverse max-md:gap-3">
        <div className="max-w-2xl max-lg:w-[400px] max-md:w-full max-md:text-center max-md:flex max-md:flex-col max-md:items-center space-y-7">
          <h1
            className="max-w-lg text-7xl dark:text-white max-lg:text-5xl"
          >
            Trouver la voiture parfaite pour vous !
          </h1>
          <div>
            <p
              className="max-w-xl max-md:text-center text-sm max-lg:text-caption2 text-gray dark:text-gray-500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              reiciendis iure nostrum pariatur doloribus totam error quis cumque
              illum voluptate doloremque magnam.
            </p>
          </div>
          <div className="space-x-5 pt-2.5">
            <Link to="/locations">
              <button className="p-3 bg-primary dark:bg-primary-400 text-white hover:bg-primary-400 rounded">Commencer</button>
            </Link>
            <button className="p-3 cursor-default text-primary rounded border border-primary dark:text-white dark:border-gray-700 dark:hover:shadow-darkgray">
              En savoir plus
            </button>
          </div>
        </div>
        <img
          src={img1}
          alt="Illustration d'une location"
          className="w-[500px] max-lg:w-[400px]"
        />
      </Container>
    </div>
  );
};
