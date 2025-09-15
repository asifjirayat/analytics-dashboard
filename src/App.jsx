import { Header } from "./components/layout/Header.jsx";
import { KpiCard } from "./components/dashboard/KpiCard.jsx";
import { ChartContainer } from "./components/dashboard/ChartContainer.jsx";
import { Button } from "./components/ui/Button.jsx";
import { Select } from "./components/ui/Select.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Analytics Dashboard - Project Structure
        </h1>
        <p className="text-gray-600">Project structure created successfully</p>
      </div>
    </div>
  );
};

export default App;
