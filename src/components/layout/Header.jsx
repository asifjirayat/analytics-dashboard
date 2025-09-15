import { Button } from "../ui/Button";
import { FiDownload, FiUser } from "react-icons/fi";
import { Select } from "../ui/Select";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Analytics Dashboard
            </h1>
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <Button variant="secondary" size="sm">
                Dashboard
              </Button>
              <Button variant="ghost" size="sm">
                Reports
              </Button>
              <Button variant="ghost" size="sm">
                Settings
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Select>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Year to date</option>
            </Select>

            <Button
              variant="secondary"
              size="sm"
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FiDownload className="w-5 h-5 text-gray-600" />
            </Button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <FiUser className="text-white text-sm" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-gray-700">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
