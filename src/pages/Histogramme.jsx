import { useContext, useState } from 'react';
import Chart from 'react-apexcharts';
import StatImg from "../assets/stat.png";
import { StatContext } from '../context/StatContext';

export default function Histogramme() {

  const { totalLoyer, maxLoyer, minLoyer } = useContext(StatContext)


  // Utilisation du useState pour éviter la reconstruction du composant à chaque rendu
  const [chartOptions] = useState({
    chart: {
      id: 'histogramme-loyer',
    },
    xaxis: {
      categories: ["Total", "Minimal", "Maximal"]
    }
  });

  const [chartSeries] = useState([{
    name: "Loyer",
    data: [totalLoyer, minLoyer, maxLoyer]
  }]);

  return (
    <div className="flex justify-center items-center -z-50">
      <Chart options={chartOptions} series={chartSeries} type="bar" width={500} height={320} />
      <img src={StatImg} alt="" className="w-[500px]" />
    </div>
  );
}
