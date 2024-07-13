import axios from "axios";
import { useEffect, useState } from "react";
import { url_api } from "../utils/url_api";

export default function useGetStatistique(refetchTrigger) {
  const [totalLoyer, setTotalLoyer] = useState(0);
  const [minLoyer, setMinLoyer] = useState(0);
  const [maxLoyer, setMaxLoyer] = useState(0);

  const fetchStatistics = () => {
    axios.get(`${url_api}/locations/statistic`).then((res) => {
      if (res.data.min || res.data.max || res.data.total) {
        setMinLoyer(res.data.min)
        setMaxLoyer(res.data.max)
        setTotalLoyer(res.data.total)
      }
    });
  };

  useEffect(() => {
    fetchStatistics();
  }, [refetchTrigger]);

  return { maxLoyer, minLoyer, totalLoyer, fetchStatistics };
}
