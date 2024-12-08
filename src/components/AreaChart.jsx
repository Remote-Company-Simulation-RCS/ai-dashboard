import React, { PureComponent } from "react";
import { AreaChart, Area,ResponsiveContainer } from "recharts";

const data = [
  {
    name: "",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "april 2023",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "dec 2023",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "april 2024",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl";

  render() {
    return (
      <div style={{ width: "100%", height: "180px" }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            S
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#007aff"
              fill="#007aff"
            />
          </AreaChart>
          <div className="legend mt-1 d-flex justify-content-between flex-row">
            <span className="xAxis">Jun 2023</span>
            <span className="xAxis">Dec 2023</span>
            <span className="xAxis">Jun 2024</span>
          </div>
        </ResponsiveContainer>
      </div>
    );
  }
}
