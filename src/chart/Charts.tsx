import React from 'react';

import novelpia from './img/novelpia.png';
import munpia from './img/munpia.png';
import kakaopage from './img/kakaopage.png';

import { PlatformType } from './dto/novel.dto';
import { AnalyzeNovelDto } from './dto/novel-analyze.dto';

import AvgBarChart from './BarCharts';

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

    author,
    is_end,
    is_plus,
    age_limit,

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
      <a href={link}>
        <h1>{title}</h1>
        {
          thumbnail !== "None"
          ?
          <img src={thumbnail} alt='썸네일' />
          :
          null
        }
        <img src={typeSrc(type)} alt='타입' />
      </a>

      <br/>

      <a href={link}>바로가기</a>

      <ul>
        <li>조회수 : {view}</li>
        <li>추천수 : {good}</li>
        <li>편수 : {book}</li>
      </ul>

      <ul>
        <li>작가 : {author}</li>
        {is_end ? <li>[완결]</li> : null}
        {is_plus ? <li>[유료]</li> : null}
        {age_limit !== 0 ? <li>[{age_limit}금]</li> : null}
      </ul>

      <ul>
        <li>분석된 소설 개수 : {total_novel_count}</li>
        <li>분석된 {platform_name} 소설 개수 : {type_novel_count}</li>
      </ul>

      <AvgBarChart data={{
        name: "소설 조회수",
        cur: view,
        avg: view_per_novel_count,
        type_avg: view_per_type_novel_count,
        }}
        platform_name={platform_name} />
      <AvgBarChart data={{
        name: "소설 추천수",
        cur: good,
        avg: good_per_novel_count,
        type_avg: good_per_type_novel_count,
      }}
        platform_name={platform_name} />
      <AvgBarChart data={{
        name: "조회수/좋아요(추천)",
        cur: view_per_good,
        avg: view_per_good_average,
        type_avg: view_per_good_platform_average
      }}
        platform_name={platform_name} />
      <AvgBarChart data={{
        name: "조회수/편수",
        cur: view_per_book,
        avg: view_per_book_average,
        type_avg: view_per_book_platform_average
      }}
        platform_name={platform_name} />
    </div>
  );
}

export default Charts;
