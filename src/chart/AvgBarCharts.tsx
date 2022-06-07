import React from 'react';

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface BarChartData {
  name: string;
  cur: number;
  avg: number;
  type_avg: number;
}

function AvgBarChart({ data, platform_name }: {data: BarChartData, platform_name: string}) {

  return (
      <BarChart width={730} height={250} data={[data]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
  );
}

export default AvgBarChart;
