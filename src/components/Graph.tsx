import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { graphData } from "../pages/HomePage";

interface props {
  prefInfos: graphData[]
}

const Graph = ({ prefInfos }: props) => {
  let pointStart: number = 0
  let pointEnd: number = 0
  let xAxisRange: number[] = []

  const series = prefInfos.map((prefInfo) => {
    pointStart = prefInfo.years[0];
    pointEnd = prefInfo.years[-1];
    xAxisRange = prefInfo.years;
    return ({
      name: prefInfo.prefName,
      data: prefInfo.values
    })
  })

  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: ''
    },
    yAxis: {
      title: {
        text: '人口数'
      }
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: xAxisRange,
      accessibility: {
        rangeDescription: `Range: ${pointStart} to ${pointEnd}`
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    series,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default Graph;
