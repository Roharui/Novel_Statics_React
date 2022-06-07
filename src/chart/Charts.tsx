import React from 'react';

import novelpia from './img/novelpia.png';
import munpia from './img/munpia.png';
import kakaopage from './img/kakaopage.png';

import { PlatformType } from './dto/novel.dto';
import { AnalyzeNovelDto } from './dto/novel-analyze.dto';

import AvgBarChart from './AvgBarCharts';
import GrowthLineChart from './LineCharts';
import GrowthBarChart from './BarCharts';

function platformInfo(type: PlatformType){
  switch(type) {
    case PlatformType.NOVELPIA:
      return {
        img: novelpia,
        name: "노벨피아"
      };
    case PlatformType.MUNPIA:
      return {
        img: munpia,
        name: "문피아"
      };
    case PlatformType.KAKAOPAGE:
      return {
        img: kakaopage,
        name: "카카오페이지"
      };
  }
}

function parseDate(date: string): string {
  const d = new Date(date);
  
  const year = d.getFullYear()
  const mm = d.getMonth() + 1; // getMonth() is zero-based
  const dd = d.getDate();

  return `${year}-${mm}-${dd}`;
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
    cur_info,

    growth_view,
    growth_good,
  
    serial_rate,

    latest_growth_view,
    latest_growth_good,
  
    latest_serial_rate,

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

    createdAt,
  
  } = result;

  const {
    view,
    good,
    book,
    createdAt: lastupdateTime
  } = cur_info;

  const {
    img: platform_img,
    name: platform_name
  } = platformInfo(type)

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
        <img src={platform_img} alt='타입' />
      </a>

      <br/>

      <a href={link}>바로가기</a>

      {!is_plus ? <h3>무료작품은 평균 통계에 포함되지 않습니다.</h3> : null }

      <ul>
        <li>조회수 : {view}</li>
        <li>추천수 : {good}</li>
        <li>편수 : {book}</li>
        {serial_rate ? <li>연참율 : {serial_rate}</li> : null}
        {latest_serial_rate ? <li>최신 연참율 : {latest_serial_rate}</li> : null}
      </ul>

      <ul>
        <li>작가 : {author}</li>
        {is_end ? <li>[완결]</li> : null}
        <li>[{is_plus ? "유료" : "무료"}]</li>
        {age_limit !== 0 ? <li>[{age_limit}금]</li> : null}
      </ul>

      <ul>
        <li>분석된 소설 개수 : {total_novel_count}</li>
        <li>분석된 {platform_name} 소설 개수 : {type_novel_count}</li>
        <li>분석 시작일 : {parseDate(createdAt)}</li>
        <li>최신 분석일 : {parseDate(lastupdateTime)}</li>
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
      
      <GrowthLineChart data={info} />

      {
        growth_view && growth_good
        ?
        <GrowthBarChart data={{
          name: "성장률",
          growth_view,
          growth_good,
        }} />
        :
        null
      }

      {
        latest_growth_view && latest_growth_good
        ?
        <GrowthBarChart data={{
          name: "최신 성장률",
          growth_view: latest_growth_view,
          growth_good: latest_growth_good,
        }} />
        :
        null
      }
    </div>
  );
}

export default Charts;
