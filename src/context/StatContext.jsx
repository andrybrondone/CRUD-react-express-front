import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { url_api } from '../utils/url_api';

export const StatContext = createContext({
  isOpen: false,
  toggleOpen: PropTypes.func,
  isMobile: false,
  toggleNav: PropTypes.func,
});

StatContext.displayName = 'StatContext';

export const StatProvider = ({ children }) => {
  const [listOfLocation, setListOfLocation] = useState([]);

  useEffect(() => {
    axios.get(`${url_api}/locations`).then((response) => {
      setListOfLocation(response.data);
    });
  }, [])


  const [totalLoyer, setTotalLoyer] = useState(0);
  const [maxLoyer, setMaxLoyer] = useState(Number.MIN_VALUE);
  const [minLoyer, setMinLoyer] = useState(Number.MAX_VALUE);

  useEffect(() => {
    let total = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    if (listOfLocation.length > 0) {
      listOfLocation.forEach((value) => {
        const loyer = value.nb_jours * value.taux_journalier;
        total += loyer;
        max = Math.max(max, loyer);
        min = Math.min(min, loyer);
      });
    } else {
      max = 0;
      min = 0;
    }

    setTotalLoyer(total);
    setMaxLoyer(max);
    setMinLoyer(min);
  }, [listOfLocation]);

  return (
    <StatContext.Provider value={{ totalLoyer, maxLoyer, minLoyer }}>
      {children}
    </StatContext.Provider>
  );
};

StatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
