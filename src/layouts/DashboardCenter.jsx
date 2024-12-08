import React from 'react';
import BlueChart from "../components/BlueChart";
import StatisticChart from "../components/Statistic.jsx";

function DashboardCenter() {
    return (
        <div className="dashboard-center d-flex justify-content-between flex-column">
            <BlueChart />
            <StatisticChart />
        </div>
    );
}

export default DashboardCenter;