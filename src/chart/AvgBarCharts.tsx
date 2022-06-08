import React from 'react';

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { tickFormatter } from '../utils/formatter';

interface BarChartData {
  name: string;
  cur: number;
  avg: number;
  type_avg: number;
}

function AvgBarChart({ data, platform_name }: {data: BarChartData, platform_name: string}) {

  return (
      <BarChart width={400} height={200} data={[data]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['auto', 'auto']} tickFormatter={tickFormatter} />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
  );
}

export default AvgBarChart;
