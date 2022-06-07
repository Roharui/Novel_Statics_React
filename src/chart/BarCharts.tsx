import React from 'react';

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface BarChartData {
  name: string;
  growth_view: number;
  growth_good: number;
}

function GrowthBarChart({ data }: {data: BarChartData }) {

  return (
      <BarChart width={730} height={250} data={[data]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="growth_view" name="조회수 성장률" fill="#8884d8" />
        <Bar dataKey="growth_good" name="추천수 성장률" fill="#82ca9d" />
      </BarChart>
  );
}

export default GrowthBarChart;
