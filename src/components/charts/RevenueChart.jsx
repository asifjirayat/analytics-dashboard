import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data
const mockData = [
  { name: "Jan", Revenue: 4000, Expenses: 2400 },
  { name: "Feb", Revenue: 3000, Expenses: 1398 },
  { name: "Mar", Revenue: 2000, Expenses: 9800 },
  { name: "Apr", Revenue: 2780, Expenses: 3908 },
  { name: "May", Revenue: 1890, Expenses: 4800 },
  { name: "Jun", Revenue: 2390, Expenses: 3800 },
  { name: "Jul", Revenue: 3490, Expenses: 4300 },
];

export const RevenueChart = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={mockData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Revenue"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Expenses"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
