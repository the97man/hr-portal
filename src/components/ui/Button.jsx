export default function Button({
  children,
  variant = "primary",
  onClick,
  icon: Icon,
  size = "normal",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}
