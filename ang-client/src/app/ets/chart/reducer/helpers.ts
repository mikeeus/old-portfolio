import { AnnualChartData } from '../../../models';
import { YEARS } from '../../constants';

export const initialState = [
  {data: [], label: 'Imports'},
  {data: [], label: 'Exports'}
];

export interface chartData {
  data: number[];
  label: string
}

export function setChartData(chartData: AnnualChartData) {
  let chart = [
    {data: [], label: 'Imports'},
    {data: [], label: 'Exports'}
  ];
  for(let i = 0; i < YEARS.length; i++) {
    // Import data
    chart[0].data[i] = chartData.annualImports[YEARS[i]];
    // Export data
    chart[1].data[i] = chartData.annualExports[YEARS[i]];      
  }
  return chart
}
