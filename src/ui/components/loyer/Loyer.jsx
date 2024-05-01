import clsx from 'clsx';
import PropTypes from 'prop-types';

Loyer.propTypes = {
  label: PropTypes.string,
  unity: PropTypes.string,
  className: PropTypes.string
};

export default function Loyer({ label, unity, className }) {
  return (
    <div className={clsx("border p-4 rounded max-md:text-caption3 max-sm:text-caption3 max-sm:text-center ", className)}>
      <p>{label} <sup className="font-bold">{unity}</sup></p>
    </div>
  )
}
