import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data
const mockData = [
  { name: "Mon", Active: 4000, New: 2400, Returning: 2400 },
  { name: "Tue", Active: 3000, New: 1398, Returning: 2210 },
  { name: "Wed", Active: 2000, New: 9800, Returning: 2290 },
  { name: "Thu", Active: 2780, New: 3908, Returning: 2000 },
  { name: "Fri", Active: 1890, New: 4800, Returning: 2181 },
  { name: "Sat", Active: 2390, New: 3800, Returning: 2500 },
  { name: "Sun", Active: 3490, New: 4300, Returning: 2100 },
];

export const UserActivityChart = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={mockData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Active" stackId="a" fill="#8884d8" />
          <Bar dataKey="New" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Returning" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
