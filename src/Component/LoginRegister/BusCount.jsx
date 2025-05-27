import React from 'react';
import './BusCount.css';
import { Chart as ChartJs } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const BusCount = () => {
  return (
    <div className='bus-count-containter'>
      <Doughnut
        data={{
          labels: ['Active', 'Broken','Delay'],
          datasets: [
            {
              label: 'Bus Count',
              data: [12, 4, 7],
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',    // Private - Active
                'rgba(255, 99, 132, 0.6)',    // Public - Broken
                'rgba(255, 159, 64, 0.6)',    // Private - Broken
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Bus Status Breakdown',
            },
          },
        }}
      />
    </div>
  )
}

export default BusCount
