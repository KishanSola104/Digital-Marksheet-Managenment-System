import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BLUE_SHADES = [
  "#1d4ed8",
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#bfdbfe",
];

const PALETTE = {
  primary: "#1d4ed8",
  secondary: "#93c5fd",
  grid: "#f1f5f9",
  text: "#94a3b8",
};

/* ===========================
   BAR CHART
=========================== */

export function SimpleBarChart({
  data,
  xKey,
  barKey,
  barKey2,
  label = "",
  label2 = "",
  height = 200,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} barGap={4} barCategoryGap="30%">
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={PALETTE.grid}
          vertical={false}
        />

        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 11, fill: PALETTE.text }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 11, fill: PALETTE.text }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            fontSize: 12,
            borderRadius: 8,
            border: "1px solid #e2e8f0",
          }}
        />

        {barKey2 && (
          <Legend
            wrapperStyle={{
              fontSize: 11,
            }}
          />
        )}

        <Bar
          dataKey={barKey}
          name={label || barKey}
          fill={PALETTE.primary}
          radius={[4, 4, 0, 0]}
        />

        {barKey2 && (
          <Bar
            dataKey={barKey2}
            name={label2 || barKey2}
            fill={PALETTE.secondary}
            radius={[4, 4, 0, 0]}
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ===========================
   LINE CHART
=========================== */

export function SimpleLineChart({
  data,
  xKey,
  lines,
  height = 200,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={PALETTE.grid}
          vertical={false}
        />

        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 11, fill: PALETTE.text }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: PALETTE.text }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            fontSize: 12,
            borderRadius: 8,
            border: "1px solid #e2e8f0",
          }}
        />

        <Legend
          wrapperStyle={{
            fontSize: 11,
          }}
        />

        {lines.map((line, index) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            name={line.label}
            stroke={line.color || BLUE_SHADES[index]}
            strokeWidth={2}
            dot={{
              fill: line.color || BLUE_SHADES[index],
              r: 3,
            }}
            activeDot={{
              r: 5,
            }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ===========================
   DONUT CHART
=========================== */

export function DonutChart({
  data,
  height = 180,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={75}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell
              key={index}
              fill={BLUE_SHADES[index % BLUE_SHADES.length]}
            />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            fontSize: 12,
            borderRadius: 8,
          }}
        />

        <Legend
          wrapperStyle={{
            fontSize: 11,
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}