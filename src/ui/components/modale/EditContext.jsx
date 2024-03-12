import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const EditContext = createContext({
  isEdit: false,
  toggleEdit: PropTypes.func,
});

EditContext.displayName = 'ConfirmContext';

export const EditProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <EditContext.Provider value={{ isEdit, toggleEdit }}>
      {children}
    </EditContext.Provider>
  );
};

EditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
