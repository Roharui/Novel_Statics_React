import React from 'react';

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { tickFormatter } from '../utils/formatter';

interface LineChartData {
  createdAt: string;
  view: number;
  good: number;
  book: number;

  name?: string;
}

function GrowthLineChart({ data }: {data: LineChartData[] }) {

  const realData = data.map(x => {
    let date = new Date(x.createdAt);
    
    let mm = date.getMonth() + 1; // getMonth() is zero-based
    let dd = date.getDate();

    x.name = `${mm}.${dd}`;
    
    return x;
  })

  return (
    <LineChart width={800} height={200} data={realData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis 
          type="number" 
          domain={['auto', 'auto']} 
          yAxisId="left" 
          dataKey="view" 
          tickFormatter={tickFormatter}
          />
        <YAxis 
          type="number" 
          domain={['auto', 'auto']} 
          yAxisId="right" 
          dataKey="good" 
          orientation="right" 
          tickFormatter={tickFormatter}
        />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="view" name="조회수" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="good" name="추천수" stroke="#82ca9d" />
    </LineChart>
  );
}

export default GrowthLineChart;
