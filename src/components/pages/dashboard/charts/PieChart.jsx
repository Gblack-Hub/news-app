import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { primaryColor, primaryColorLight } from '../../../../utils';
import { primaryColorDark } from '../../../../utils/index';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pie Chart',
        },
    },
};

export const data = {
  labels: ['One', 'Two', 'Three'],
  datasets: [
    {
      label: '# of Votes',
      data: [1, 2, 3],
      backgroundColor: [
        primaryColorLight,
        primaryColor,
        primaryColorDark
      ],
      borderColor: [
        primaryColorLight,
        primaryColor,
        primaryColorDark
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return (
      <section className='stat_card mt-2 mt-md-4 mb-4'>
        <Pie options={options} data={data} />
      </section>
  );
}
