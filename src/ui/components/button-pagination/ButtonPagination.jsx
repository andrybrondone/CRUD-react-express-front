import PropTypes from 'prop-types';
import { Button } from '../../design-system/button/Button';

export function ButtonPagination({ currentPage, totalPage, onChangePage }) {
  return (
    <div className="flex items-center justify-center gap-7 mt-10">
      <Button
        action={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Précédent
      </Button>

      <p className="text-sm font-bold">
        Page {currentPage}
      </p>

      <Button
        action={() => onChangePage(currentPage + 1)}
        disabled={!totalPage || currentPage === totalPage}
      >
        Suivant
      </Button>
    </div>
  );
}

ButtonPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};
