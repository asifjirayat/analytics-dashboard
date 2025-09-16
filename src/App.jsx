import { Header } from "./components/layout/Header.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <DashboardPage />
      </main>
    </div>
  );
};

export default App;
