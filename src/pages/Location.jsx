import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { RiAddCircleLine, RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri"
import { ListLocationContext } from "../api/ListLocationContext"
import { Container } from "../ui/components/container/Container"
import { ConfirmContext } from "../ui/components/modale/ConfirmContext"
import { EditContext } from "../ui/components/modale/EditContext"
import Formulaire from "../ui/components/modale/Formulaire"

export default function Location() {
  const { toggleOpen } = useContext(ConfirmContext)
  const { listOfLocation, showListOfLocation, showListById } = useContext(ListLocationContext)
  const { toggleEdit } = useContext(EditContext)

  const [totalLoyer, setTotalLoyer] = useState(0);
  const [maxLoyer, setMaxLoyer] = useState(Number.MIN_VALUE);
  const [minLoyer, setMinLoyer] = useState(Number.MAX_VALUE);

  // Pour afficher les données de la BD
  useEffect(() => {
    showListOfLocation()
  }, [])

  // Pour supprimer les données de la BD
  const deleteLocation = (id) => {
    axios.delete(`http://localhost:3001/locations/${id}`).then(() => {
      showListOfLocation()
    })
  }

  // Pour faire apparaitre la formulaire et pour recuperer les données cliquer par l'utilisateur
  const handleClicEdit = async (id) => {
    await showListById(id);
    toggleOpen();
    toggleEdit();
  };

  // Calculer total, max, and min pour chauque loyer
  useEffect(() => {
    let total = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    listOfLocation.forEach((value) => {
      const loyer = value.nb_jours * value.taux_journalier;
      total += loyer;
      max = Math.max(max, loyer);
      min = Math.min(min, loyer);
    });

    setTotalLoyer(total);
    setMaxLoyer(max);
    setMinLoyer(min);
  }, [listOfLocation]);

  return (
    <Container className="font-medium">
      <button className="rounded-full text-5xl text-secondary dark:text-dark-secondary dark:hover:shadow-5xl anim-transition" onClick={toggleOpen} ><RiAddCircleLine /></button>
      <div className="h-[380px] overflow-y-auto scroll border border-gray-400 rounded dark:border-gray-800/50">
        <table className="w-full max-sm:text-caption4">
          <thead>
            <tr className=" bg-gray/50 dark:bg-black text-white text-sm max-md:text-caption1 max-sm:text-caption4" >
              <th className="py-4">Nom du locataire</th>
              <th>Designation de la voiture</th>
              <th>Nombre de jours</th>
              <th>Taux journalier</th>
              <th>Loyer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {listOfLocation.map((value) => {
              return (
                <tr key={value.id} className="border-y-[1px] border-y-gray-500 dark:border-y-gray-700 even:bg-gray-500/20 dark:even:bg-gray-500/5">
                  <td className="py-2"> {value.nom_loc}</td>
                  <td>{value.design_voiture}</td>
                  <td>{value.nb_jours}</td>
                  <td>{value.taux_journalier}</td>
                  <td>{value.nb_jours * value.taux_journalier}</td>
                  <td className="flex items-center justify-center py-2 text-3xl gap-2 max-sm:text-2xl">
                    <RiPencilFill onClick={() => { handleClicEdit(value.id) }} className="text-alert-warning cursor-pointer" />
                    <RiDeleteBin2Fill onClick={() => { deleteLocation(value.id) }} className="text-alert-danger cursor-pointer" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <div>Total Loyer: {totalLoyer}</div>
        <div>Maximal Loyer: {maxLoyer}</div>
        <div>Minimal Loyer: {minLoyer}</div>
      </div>
      <Formulaire />
    </Container>
  )
}
