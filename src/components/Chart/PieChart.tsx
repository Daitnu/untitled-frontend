import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const state = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E'],
  };

  return <Chart options={state.options} series={state.series} type="donut" width="500" />;
};

export default PieChart;
