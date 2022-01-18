import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Line } from "react-chartjs-2";
import { primaryColor, primaryColorLight } from '../../../../utils/index';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Line Graph Data',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Data 1',
      data: [200, 500, 100, 300, 700, 600, 400],
      lineTension: 0.5,
      borderColor: primaryColor,
      backgroundColor: primaryColor,
    },
    {
        label: 'Data 2',
        data: [400, 200, 300, 100, 700, 600, 500],
        lineTension: 0.5,
      borderColor: primaryColorLight,
      backgroundColor: primaryColorLight,
    },
  ],
};

export default function LineGraph(){
    return (
        <section className='stat_card mt-2 mt-md-4 mb-4'>
            <Line options={options} data={data} />
        </section>
    )
}