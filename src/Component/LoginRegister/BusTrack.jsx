import React from 'react'
import './BusTrack.css';
import {Chart as ChartJs} from 'chart.js/auto';
import { Bar} from 'react-chartjs-2';

const BusTrack = () => {
  return (
    <div className='bus-container'>
      <Bar
        data={{
          labels: ["Public", "Private"],
          datasets: [
            {
              label: "Active",
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              data: [8, 13],
            },
            {
              label: "Broken",
              backgroundColor: "rgba(255, 99, 132, 0.6)",
              data: [3, 1],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Bus Status by Type',
            },
          },
        }}
      />
    </div>
  )
}

export default BusTrack
