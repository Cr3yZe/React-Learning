import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
  const dataPointMaximum = props.dataPoints.map(dataPoint => dataPoint.value);
  // const totalValue = Math.max(...dataPointMaximum);
  const totalValue = dataPointMaximum.reduce((preVal, curVal) => preVal + curVal, 0)

  console.log(totalValue);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;