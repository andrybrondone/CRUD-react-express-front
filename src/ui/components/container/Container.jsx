import clsx from "clsx";

export const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(className, "w-full max-w-7xl mx-auto px-5 lg:px-10")}
    >
      {children}
    </div>
  );
};
