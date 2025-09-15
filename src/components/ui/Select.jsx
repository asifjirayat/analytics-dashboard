import { FiChevronDown } from "react-icons/fi";

export const Select = ({
  children,
  value,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none bg-gray-100 border-0 rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-2 focus:ring-blue-500 ${className}`}
        {...rest}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FiChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
};
