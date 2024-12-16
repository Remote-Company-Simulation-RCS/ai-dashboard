import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import CountUp from "react-countup";
import "../styles/components/pieChart.css";

function Chart({ country, percentage }) {
  return (
    <div className="d-flex justify-content-between ">
      <div>
        <h4>{country}</h4>
        <span>
          <CountUp end={percentage} separator="," />%
        </span>
      </div>
      <div className="pie">
        {" "}
        <PieChart
          className="pie-chart"
          series={[
            {
              data: [
                { id: 0, value: 50, color: "rgba(120, 120, 120, 0.1)" },
                {
                  id: 1,
                  value: percentage,
                  color: " rgba(120, 120, 120, 0.5)",
                },
              ],
            },
          ]}
          width={170}
          height={170}
        />
      </div>
    </div>
  );
}

export default Chart;
