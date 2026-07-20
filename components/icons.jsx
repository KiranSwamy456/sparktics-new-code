export const BlockIcon = ({ color = "#666666", className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M20 9.9802V0H0V21H10.6122V9.9802H20Z" fill={color} />
    </svg>
  );
};
