import img from "../../../assets/data-empty.svg"
export default function DataEmpty() {
  return (
    <div className="flex flex-col items-center justify-end gap-3 pb-3">
      <div className="w-[474px] h-[363px]">
        <img
          src={img}
          alt="Illustration des donneés vides"
        />
      </div>
      <h1 className="text-center text-lg">
        {`Aucune données n'a été trouvée dans la base de données ! ! !`}
      </h1>
    </div>
  );
}
