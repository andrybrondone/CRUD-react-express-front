import clsx from "clsx";
import PropTypes from 'prop-types';
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Spinner } from "../spinner/Spinner";

export const Button = ({
  children,
  className,
  variant = "accent",
  disabled,
  isLoading,
  type = "button",
  fullWith = false,
  action = () => { },
}) => {
  const size = useScreenSize();

  let sizeForScreen;
  switch (size) {
    case "lg": // default
      sizeForScreen = "large";
      break;
    case "md":
      sizeForScreen = "medium";
      break;
    case "sm":
      sizeForScreen = "small";
      break;
  }

  const sizeAdjusted = sizeForScreen; // Taille ajustée en fonction de la taille de l'écran

  let variantStyle = "",
    sizeStyle = "",
    icoSize = 0;

  if (disabled) {
    variant = "disabled";
  }

  switch (variant) {
    case "accent": // default
      variantStyle =
        "bg-primary hover:bg-primary-400 border border-primary dark:bg-primary-400 text-white rounded dark:hover:shadow-primary-400";
      break;

    case "secondary":
      variantStyle =
        "text-primary dark:text-primary-300 hover:bg-primary-400 dark:hover:bg-primary-400 dark:hover:text-white hover:text-white rounded border border-primary dark:border-primary-300 dark:hover:border-primary-400";
      break;

    case "warning":
      variantStyle =
        "text-alert-warning rounded border border-alert-warning hover:bg-alert-warning hover:text-white dark:text-white dark:border-gray-700 dark:hover:shadow-darkgray";
      break;

    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed dark:bg-gray-700 dark:border-gray-600/20 dark:text-white/50";
      break;
  }

  switch (
  sizeAdjusted // Utilisation de la taille ajustée
  ) {
    case "small":
      sizeStyle = `text-caption3 font-medium ${variant === "ico"
        ? "flex items-center justify-center w-[40px] h-[40px]"
        : "flex justify-center items-center h-[42px] px-[12px]"
        }`;
      variant === "ico" ? (icoSize = 21) : (icoSize = 19);
      break;

    case "medium": // Default
      sizeStyle = `text-caption2 font-medium ${variant === "ico"
        ? "flex items-center justify-center w-[46px] h-[46px]"
        : "flex justify-center items-center h-[45px] px-[16px]"
        }`;
      variant === "ico" ? (icoSize = 23) : (icoSize = 21);
      break;

    case "large":
      sizeStyle = `text-caption1 font-medium ${variant === "ico"
        ? "flex items-center justify-center w-[49px] h-[49px]"
        : "flex justify-center items-center px-[17px] h-[47px]"
        }`;
      variant === "ico" ? (icoSize = 25) : (icoSize = 22);
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}

      <div className={clsx(isLoading && "invisible")}>
        {children}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        className,
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading || (disabled && "cursor-not-allowed"),
        fullWith && "w-full",
        "relative transition"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  );

  return buttonElement;
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "accent",
    "secondary",
    "disabled",
    "warning",
  ]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  action: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  fullWith: PropTypes.bool,
};
