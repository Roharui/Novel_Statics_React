import React from 'react';

import novelpia from './img/novelpia.png';
import munpia from './img/munpia.png';
import kakaopage from './img/kakaopage.png';

import { AnalyzeNovelDto, PlatformType } from './information';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

function Charts({ result }: {result:AnalyzeNovelDto}) {
  const {
    title,
    type,
    thumbnail,
    link,
    info,

    view_per_good,
    view_per_book,
  
    view_per_good_average,
    view_per_book_average,
  
  } = result;

  function typeSrc(type: PlatformType){
    switch(type) {
      case PlatformType.NOVELPIA:
        return novelpia;
      case PlatformType.MUNPIA:
        return munpia;
      case PlatformType.KAKAOPAGE:
        return kakaopage;
    }
  }

  return (
    <div className="chart">
      <h1>{title}</h1>
      <img src={thumbnail} alt='썸네일' />
      <img src={typeSrc(type)} alt='타입' />
      <a href={link}>바로가기</a>

      <ul>
        <li>조회수 : {info.view}</li>
        <li>추천수 : {info.good}</li>
        <li>편수 : {info.book}</li>
      </ul>

      <BarChart width={730} height={250} data={[{
        name: "조회수/좋아요(추천)",
        cur: view_per_good,
        avg: view_per_good_average
      }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
      </BarChart>
      <BarChart width={730} height={250} data={[{
        name: "조회수/편수",
        cur: view_per_book,
        avg: view_per_book_average
      }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default Charts;
