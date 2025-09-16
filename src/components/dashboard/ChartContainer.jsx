export const ChartContainer = ({ title, children, onReportClick }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {onReportClick && (
          <button
            onClick={onReportClick}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View Report
          </button>
        )}
      </div>
      <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
