import React from "react";
import PieChart from "./PieChart.jsx";
import "../styles/components/pieChart.css";

function CountriesStats() {
  return (
    <div className="countries-stats mt-3 px-3 d-flex flex-column gap-2 rounded-5">
      <h3 className="fs-6 text-center py-3">Breakdown by countries</h3>
      <PieChart country="China" percentage={55} />
      <PieChart country="Russia" percentage={20} />
      <PieChart country="USA" percentage={15} />
      <PieChart country="Brazil" percentage={10} />
      <PieChart country="Indonezia" percentage={9} />
      <PieChart country="Other" percentage={6} />
    </div>
  );
}

export default CountriesStats;
