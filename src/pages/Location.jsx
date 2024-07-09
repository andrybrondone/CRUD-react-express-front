import axios from "axios";
import { useContext, useEffect } from "react";
import { RiAddCircleLine, RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";
import { ListLocationContext } from "../api/ListLocationContext";
import { ConfirmContext } from "../context/ConfirmContext";
import { EditContext } from "../context/EditContext";
import { useDataFetcher } from "../hooks/useDataFetcher";
import useGetStatistique from "../hooks/useGetStatistique";
import { ButtonPagination } from "../ui/components/button-pagination/ButtonPagination";
import { Container } from "../ui/components/container/Container";
import DataEmpty from "../ui/components/data-empty/DataEmpty";
import Loyer from "../ui/components/loyer/Loyer";
import Formulaire from "../ui/components/modale/Formulaire";
import { Spinner } from "../ui/design-system/spinner/Spinner";
import { url_api } from "../utils/url_api";

export default function Location() {
  const { toggleOpen } = useContext(ConfirmContext);
  const { showListById } = useContext(ListLocationContext);
  const { toggleEdit } = useContext(EditContext);

  const {
    isLoading,
    isError,
    data,
    currentPage,
    totalPage,
    setCurrentPage,
    refetch
  } = useDataFetcher({
    endpoint: `${url_api}/locations`,
    processData: (data) => data.locations,
  });

  const { minLoyer, maxLoyer, totalLoyer, fetchStatistics } = useGetStatistique(refetch);

  const deleteLocation = (id) => {
    axios.delete(`${url_api}/locations/${id}`).then(() => {
      refetch();
      fetchStatistics();
    });
  };

  const handleClicEdit = async (id) => {
    await showListById(id);
    toggleOpen();
    toggleEdit();
  };

  useEffect(() => {
    fetchStatistics();
  }, [refetch]);

  if (isLoading)
    return (
      <Container className="h-[57vh]">
        <div className="absolute top-52 left-1/2 -translate-x-1/2">
          <Spinner size="large" />
        </div>
      </Container>
    );
  if (isError)
    return (
      <Container className="h-[57vh]">
        <div className="absolute top-52 left-1/2 -translate-x-1/2">
          <p
            className="font-semibold text-base text-alert-danger"
          >
            Erreur lors de la recupération des données
          </p>
        </div>
      </Container>
    );

  return (
    <Container className="font-medium">
      <button className="rounded-full text-5xl text-secondary dark:text-dark-secondary dark:hover:shadow-5xl anim-transition" onClick={toggleOpen} ><RiAddCircleLine /></button>
      {data.length > 0 ? (
        <div className="h-[469px] overflow-y-auto scroll border border-gray-400 rounded dark:border-gray-800/50">
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
              {data.map((value) => {
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
      ) : (<DataEmpty />)}

      {data.length > 0 && (
        <ButtonPagination
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
        />
      )}

      <div className="flex justify-between gap-2 mt-12 max-sm:flex-col">
        <Loyer label={`Total des Loyer : ${totalLoyer} `} unity="MGA" className="border-alert-success text-alert-success" />
        <Loyer label={`Loyer Minimal : ${minLoyer} `} unity="MGA" className="border-alert-warning text-alert-warning" />
        <Loyer label={`Loyer Maximal : ${maxLoyer} `} unity="MGA" className="border-alert-danger text-alert-danger" />
      </div>

      <Formulaire refetch={refetch} fetchStatistics={fetchStatistics} />
    </Container>
  );
}
