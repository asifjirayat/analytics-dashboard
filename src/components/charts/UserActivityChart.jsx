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
  { name: "Mon", active: 4000, new: 2400, returning: 2400 },
  { name: "Tue", active: 3000, new: 1398, returning: 2210 },
  { name: "Wed", active: 2000, new: 9800, returning: 2290 },
  { name: "Thu", active: 2780, new: 3908, returning: 2000 },
  { name: "Fri", active: 1890, new: 4800, returning: 2181 },
  { name: "Sat", active: 2390, new: 3800, returning: 2500 },
  { name: "Sun", active: 3490, new: 4300, returning: 2100 },
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
          <Bar dataKey="active" stackId="a" fill="#8884d8" />
          <Bar dataKey="new" stackId="a" fill="#82ca9d" />
          <Bar dataKey="returning" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
