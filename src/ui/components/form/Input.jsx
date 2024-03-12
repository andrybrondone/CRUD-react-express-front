import clsx from "clsx";
import { useField } from "formik";

export function Input({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <>
      <label>{label}</label>

      <input
        {...field}
        {...props}
        className={clsx(
          meta.touched && meta.error
            ? " text-alert-danger border-alert-danger focus:ring-alert-danger dark:focus:ring-alert-danger dark:border-alert-danger"
            : "focus:ring-secondary border-gray-400 dark:focus:ring-dark-secondary dark:border-gray-800",
          "p-3 font-light border rounded focus:outline-none focus:ring-1 dark:text-primary-200 dark:bg-gray-800 placeholder-gray-700 dark:placeholder-primary-300"
        )}
      />
      {meta.touched && meta.error && <div className="text-alert-danger">{meta.error}</div>}
    </>
  )
}
