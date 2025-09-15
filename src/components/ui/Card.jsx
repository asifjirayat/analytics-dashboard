export const Card = ({ children, className = "", ...rest }) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "", ...rest }) => {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "", ...rest }) => {
  return (
    <div className={`p-6 ${className}`} {...rest}>
      {children}
    </div>
  );
};
