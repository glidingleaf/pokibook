
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';
import toCamelCaps from '@utils/toCamelCaps.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
);

const data = {
  labels: [],
  datasets: [
    {
      label: [],
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};

const PokemonStats = ({stats}) => {

  const processedStats = stats.map((stat)=>{
    return(
      {
        name:toCamelCaps(stat['stat'].name),
        value:stat['base_stat']
      }
    )
  });
  
  data.labels= processedStats.map((stat)=>stat.name);
  data.datasets[0].label= data.labels;
  data.datasets[0].data = processedStats.map((stat)=>stat.value);

  return (
    <>
      <Radar data={data} />
    </>
  )
}

export default PokemonStats;