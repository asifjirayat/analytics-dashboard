import {
  FiDollarSign,
  FiUsers,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

const iconMap = {
  revenue: <FiDollarSign className="w-6 h-6 text-green-600" />,
  users: <FiUsers className="w-6 h-6 text-blue-600" />,
  sales: <FiBarChart2 className="w-6 h-6 text-purple-600" />,
  activity: <FiTrendingUp className="w-6 h-6 text-orange-600" />,
};

export const KpiCard = ({
  title,
  value,
  change,
  type,
  changeType = "positive",
}) => {
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p
          className={`text-sm mt-1 ${
            changeType === "positive" ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </p>
      </div>
      <div
        className={`p-3 rounded-full ${
          changeType === "positive" ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {iconMap[type] || iconMap.revenue}
      </div>
    </div>
  </div>;
};
