import React from 'react';
import BlueChart from "../components/BlueChart";
import Statistic from '../components/Statistic';

function DashboardCenter() {
    return (
        <div className="w-100 h-100 m-0 d-flex justify-content-between flex-column gap-3 ">
            <BlueChart />
            <Statistic />
        </div>
    );
}

export default DashboardCenter;