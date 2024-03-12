import axios from "axios";
import { Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import * as Yup from "yup";
import { ListLocationContext } from "../../../api/ListLocationContext";
import { Input } from "../form/Input";
import { ConfirmContext } from "./ConfirmContext";
import { EditContext } from "./EditContext";

export default function Formulaire() {
  const { isOpen, toggleOpen } = useContext(ConfirmContext);
  const { showListOfLocation, listById } = useContext(ListLocationContext)
  const { isEdit, toggleEdit } = useContext(EditContext)

  let initialValues = {}

  // affiche le formulaire et Verifie si on a cliquer sur l'icone edit
  const handleClicEdit = () => {
    toggleOpen()
    if (isEdit) {
      toggleEdit()
    }

  }

  // Animation du formulaire
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

  // Initialisation de la valeur par defaut dans les champs de formulaire
  if (isEdit) {
    initialValues = {
      nom_loc: listById.nom_loc,
      design_voiture: listById.design_voiture,
      nb_jours: listById.nb_jours,
      taux_journalier: listById.taux_journalier,
    }
  } else {
    initialValues = {
      nom_loc: "",
      design_voiture: "",
      nb_jours: "",
      taux_journalier: "",
    }
  }

  // Validation des données dans le formulaire
  const validationSchema = Yup.object().shape({
    nom_loc: Yup.string().required("Ce champ est obligatoire"),
    design_voiture: Yup.string().required("Ce champ est obligatoire"),
    nb_jours: Yup.number().positive("Nombre positif uniquement").integer("Entrez un nombre entier").required("Ce champ est obligatoire"),
    taux_journalier: Yup.number().positive("Nombre positif uniquement").label("Taux journalier").required("Ce champ est obligatoire"),
  })

  // Fonction pour envoyer les données dans le formulaire
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/locations", data).then(() => {
      toggleOpen()
      showListOfLocation()
    })
  }

  return (
    <>
      {isOpen &&
        <>

          <div className="anim-transition absolute top-0 left-0 w-full h-[100vh] bg-gray/10" onClick={handleClicEdit}></div>

          <div id="modal-confirm" className="absolute w-[550px] max-sm:w-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray rounded shadow-xl p-6 z-10">

            <RiCloseFill className="text-xl bg-gray-500 rounded-full absolute top-2 right-2 cursor-pointer dark:bg-gray-800" onClick={handleClicEdit} />

            {
              isEdit
                ? <h3 className="text-3xl font-bold text-gray-700 relative -top-4 border-b-2 border-gray-600 pb-1 dark:text-secondary-200">Modifier la location</h3>
                : <h3 className="text-3xl font-bold text-gray-700 relative -top-4 border-b-2 border-gray-600 pb-1 dark:text-secondary-200">Ajouer une location</h3>
            }

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <Form className="flex flex-col gap-1">
                <div className="flex flex-col gap1 mb-4">
                  <Input
                    label="Nom du locataire"
                    name="nom_loc"
                    type="text"
                    placeholder="ex. John Doe"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <Input
                    label="Designation de la voiture"
                    name="design_voiture"
                    type="text"
                    placeholder="ex. Volvo immatriculé 1332 TBA"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <Input
                    label="Nombre de jours"
                    name="nb_jours"
                    type="number"
                    min="0"
                    placeholder="ex. 102"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <Input
                    label="Taux journalier"
                    name="taux_journalier"
                    type="text"
                    placeholder="ex. 1500 ou 1500.50"
                    autoComplete="off"
                  />
                </div>
                {
                  isEdit
                    ? <button type="submit" className="bg-secondary text-white py-3 rounded hover:bg-secondary-600 anim-transition">Modifier</button>
                    : <button type="submit" className="bg-secondary text-white py-3 rounded hover:bg-secondary-600 anim-transition">Ajouter</button>
                }

              </Form>
            </Formik>

          </div>

        </>
      }
    </>
  )
}
