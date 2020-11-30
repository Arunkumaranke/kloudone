import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Stacked = (props) => {
    const [series] = useState ([{
        name: 'Male',
        data: [44, 55, 41, 37, 22, 43]
      },{
        name: 'Female',
        data: [25, 12, 19, 32, 25, 24]
      }]);
    const [options] = useState ({
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        
        xaxis: {
          categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
          labels: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      });
      
      return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
}

export default Stacked;
