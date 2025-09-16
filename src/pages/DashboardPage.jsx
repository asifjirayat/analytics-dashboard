import { KpiCard } from "../components/dashboard/KpiCard.jsx";
import { ChartContainer } from "../components/dashboard/ChartContainer.jsx";
import { FiClock } from "react-icons/fi";

export const DashboardPage = () => {
  // Mock data for KPI cards
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      type: "revenue",
      changeType: "positive",
    },
    {
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1% from last month",
      type: "users",
      changeType: "positive",
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      type: "sales",
      changeType: "positive",
    },
    {
      title: "Active Now",
      value: "+573",
      change: "-12% from last month",
      type: "activity",
      changeType: "negative",
    },
  ];

  return (
    <div className="space-y-8">
      {/* KPI cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KpiCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            type={kpi.type}
            changeType={kpi.changeType}
          />
        ))}
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartContainer
          title="Revenue Overview"
          onReportClick={() => console.log("View revenue report")}
        >
          <p className="text-gray-500">Revenue Chart Placeholder</p>
        </ChartContainer>

        <ChartContainer
          title="User Activity"
          onReportClick={() => console.log("View user report")}
        >
          <p className="text-gray-500">User Activity Chart Placeholder</p>
        </ChartContainer>
      </div>

      {/* Recent activity section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    User activity report generated
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
