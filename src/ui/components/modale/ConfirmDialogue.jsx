import { useContext, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { ConfirmContext } from "./ConfirmContext";

export default function ConfirmDialogue() {
  const { isOpen, toggleOpen } = useContext(ConfirmContext);

  useEffect(() => {
    const element = document.getElementById("modal-confirm");

    element?.classList.add("modal-anim");

    const timeOut = setTimeout(() => {
      element?.classList.remove("modal-anim");
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        <>
          <div className="anim-transition absolute top-0 left-0 w-full h-[100vh] bg-gray/10 dark:bg-gray-800/40" onClick={toggleOpen}></div>
          <div id="modal-confirm" className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl text-gray px-10 pb-6 rounded space-y-3 dark:bg-gray dark:text-white">
            <RiCloseFill className="text-xl bg-gray-500 rounded-full absolute top-2 right-2 cursor-pointer dark:bg-gray-800" onClick={toggleOpen} />
            <h3 className="text-4xl text-alert-warning">Attention</h3>
            <p>Voulez-vous vraiment supprimer cette location ?</p>
            <div className="flex gap-3 pt-4">
              <p className="rounded py-2 px-3 border border-alert-warning text-alert-warning cursor-pointer">Oui</p>
              <p className="rounded py-2 px-3 border-gray-700 text-gray border cursor-pointer dark:text-white dark:border-white" onClick={toggleOpen}>Non</p>
            </div>
          </div>
        </>
      }
    </>
  )
}
