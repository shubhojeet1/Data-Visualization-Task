import React from "react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import customData from "../data/Wine-Data.json";
const BarChart = () => {
  const AlcoholData = customData.map((el) => el.Alcohol);
  const AcidData = customData.map((el) => el["Malic Acid"]);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      initChart(chartRef.current);
    }
  });

  function initChart(dom) {
    let chart = echarts.init(dom);
    const option = {
      xAxis: {
        name: "Alcohol",
        type: "category",
        data: AcidData,
        color: "red",
      },
      yAxis: {
        name: "Malic Acid",
        type: "value",
      },
      series: [
        {
          name: "Alcohol",
          data: AlcoholData,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "black",
          },
        },
      ],
    };
    chart.setOption(option);
  }
  return (
    <>
      <div className="chartRef" ref={chartRef}></div>
    </>
  );
};

export default BarChart;
