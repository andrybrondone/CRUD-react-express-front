import axios from "axios";
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import { url_api } from "../utils/url_api";

export const ListLocationContext = createContext({
  listOfLocation: [],
  showListOfLocation: PropTypes.func,
  listById: PropTypes.object,
  showListById: PropTypes.func,
});

ListLocationContext.displayName = 'ListLocationContext';

export const ListLocationProvider = ({ children }) => {
  const [listOfLocation, setListOfLocation] = useState([]);
  const [listById, setListById] = useState({});

  const showListOfLocation = () => {
    axios.get(`${url_api}/locations`).then((response) => {
      setListOfLocation(response.data);
    });
  };

  const showListById = (id) => {
    return axios.get(`${url_api}/locations/byId/${id}`).then((response) => {
      setListById(response.data);
    });
  };

  return (
    <ListLocationContext.Provider value={{ listOfLocation, showListOfLocation, listById, showListById }}>
      {children}
    </ListLocationContext.Provider>
  );
};

ListLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
