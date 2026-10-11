type ButtonProps = React.ComponentProps<"button">;

export function Button({ className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={`btn-primary ${className}`} {...props} />;
}
