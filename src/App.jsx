import { Header } from "./components/layout/Header.jsx";
import { KpiCard } from "./components/dashboard/KpiCard.jsx";
import { ChartContainer } from "./components/dashboard/ChartContainer.jsx";
import { Button } from "./components/ui/Button.jsx";
import { Select } from "./components/ui/Select.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Component Testing
        </h1>

        {/* Test Buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Buttons</h2>
          <div className="flex gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Test Select */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Select</h2>
          <div className="w-48">
            <Select>
              <option>7 days</option>
              <option>30 days</option>
              <option>90 days</option>
            </Select>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            KPI Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KpiCard
              title="Total Revenue"
              value="$45,231.89"
              change="+20.1% from last month"
              type="revenue"
              changeType="positive"
            />
            <KpiCard
              title="Subscriptions"
              value="+23,50"
              change="+180.1% from last month"
              type="users"
              changeType="positive"
            />
            <KpiCard
              title="Sales"
              value="+12,234"
              change="+19.8% from last month"
              type="sales"
              changeType="positive"
            />
            <KpiCard
              title="Active Now"
              value="+578"
              change="-12.4% from last month"
              type="activity"
              changeType="negative"
            />
          </div>
        </div>

        {/* Chart Container */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Chart Containers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartContainer
              title="Revenue Overview"
              onReportClick={() => console.log("View revenue report")}
            >
              <p className="text-gray-500">Revenue chart placeholder</p>
            </ChartContainer>

            <ChartContainer
              title="User Activity"
              onReportClick={() => console.log("View user report")}
            >
              <p className="text-gray-500">User activity chart placeholder</p>
            </ChartContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
