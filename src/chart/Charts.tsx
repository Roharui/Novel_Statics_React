import React from 'react';

import novelpia from './img/novelpia.png';
import munpia from './img/munpia.png';
import kakaopage from './img/kakaopage.png';

import { PlatformType } from './dto/novel.dto';
import { AnalyzeNovelDto } from './dto/novel-analyze.dto';

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

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

function typeName(type: PlatformType){
  switch(type) {
    case PlatformType.NOVELPIA:
      return "노벨피아";
    case PlatformType.MUNPIA:
      return "문피아";
    case PlatformType.KAKAOPAGE:
      return "카카오페이지";
  }
}

function Charts({ result }: {result:AnalyzeNovelDto}) {
  const {
    title,
    type,
    thumbnail,
    link,
    info,

    total_novel_count,
    type_novel_count,

    view_per_good,
    view_per_book,

    view_per_novel_count,
    view_per_type_novel_count,

    good_per_novel_count,
    good_per_type_novel_count,

    view_per_good_platform_average,
    view_per_book_platform_average,
  
    view_per_good_average,
    view_per_book_average,
  
  } = result;

  const {
    view,
    good,
    book,
  } = info;

  const platform_name = typeName(type)

  return (
    <div className="chart">
      <h1>{title}</h1>
      {
        thumbnail 
        ?
        <img src={thumbnail} alt='썸네일' />
        :
        null
      }
      <img src={typeSrc(type)} alt='타입' />
      <a href={link}>바로가기</a>

      <ul>
        <li>조회수 : {view}</li>
        <li>추천수 : {good}</li>
        <li>편수 : {book}</li>
      </ul>

      <ul>
        <li>분석된 소설 개수 : {total_novel_count}</li>
        <li>분석된 {platform_name} 소설 개수 : {type_novel_count}</li>
      </ul>

      <BarChart width={730} height={250} data={[
        {
        name: "소설 조회수",
        cur: view,
        avg: view_per_novel_count,
        type_avg: view_per_type_novel_count,
        },
      ]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
      <BarChart width={730} height={250} data={[{
        name: "소설 추천수",
        cur: good,
        avg: good_per_novel_count,
        type_avg: good_per_type_novel_count,
      }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
      <BarChart width={730} height={250} data={[{
        name: "조회수/좋아요(추천)",
        cur: view_per_good,
        avg: view_per_good_average,
        type_avg: view_per_good_platform_average
      }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
      <BarChart width={730} height={250} data={[{
        name: "조회수/편수",
        cur: view_per_book,
        avg: view_per_book_average,
        type_avg: view_per_book_platform_average
      }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cur" name="이 작품" fill="#8884d8" />
        <Bar dataKey="avg" name="평균" fill="#82ca9d" />
        <Bar dataKey="type_avg" name={platform_name + " 평균"} fill="#8dd1e1" />
      </BarChart>
    </div>
  );
}

export default Charts;
