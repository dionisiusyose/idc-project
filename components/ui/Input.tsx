import { useId } from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

// The label is visually hidden (the placeholder shows it, per the design)
// but still read by screen readers.
export function Input({ label, className = "", id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        id={inputId}
        placeholder={label}
        className={`field ${className}`}
        {...props}
      />
    </div>
  );
}
