import React from 'react';
import BlueChart from "../components/BlueChart";
import Statistic from '../components/Statistic';

function DashboardCenter() {
    return (
        <div className="dashboard-center d-flex justify-content-between flex-column">
            <BlueChart />
            <Statistic />
        </div>
    );
}

export default DashboardCenter;