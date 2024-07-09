import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import StatImg from "../assets/stat.png";
import useGetStatistique from '../hooks/useGetStatistique';

export default function Histogramme() {
  const { totalLoyer, maxLoyer, minLoyer } = useGetStatistique();
  const [chartSeries, setChartSeries] = useState([{
    name: "Loyer",
    data: [0, 0, 0]
  }]);

  // Mettre à jour les données du graphique lorsque les valeurs de loyer changent
  useEffect(() => {
    setChartSeries([{
      name: "Loyer",
      data: [totalLoyer, minLoyer, maxLoyer]
    }]);
  }, [totalLoyer, maxLoyer, minLoyer]);

  const chartOptions = {
    chart: {
      id: 'histogramme-loyer',
    },
    xaxis: {
      categories: ["Total", "Minimal", "Maximal"]
    }
  };

  return (
    <div className="flex justify-center items-center -z-50">
      <Chart options={chartOptions} series={chartSeries} type="bar" height={320} className="w-[500px] max-sm:w-[400]" />
      <img src={StatImg} alt="" className="w-[500px] max-lg:hidden" />
    </div>
  );
}
