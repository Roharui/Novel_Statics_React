import { NovelDto, NovelInfoDto, SearchResponseDto } from "./novel.dto";

export class AnalyzeNovelDto extends NovelDto {
  info!: NovelInfoDto[];
  
  cur_info!: NovelInfoDto;

  growth_view!: number;
  growth_good!: number;

  serial_rate!: number;

  latest_growth_view!: number;
  latest_growth_good!: number;

  latest_serial_rate!: number;

  view_per_good!: number;
  view_per_book!: number;
  
  total_novel_count!: number;
  type_novel_count!: number;
  
  view_per_novel_count!: number;
  view_per_type_novel_count!: number;

  good_per_novel_count!: number;
  good_per_type_novel_count!: number;

  view_per_good_average!: number;
  view_per_book_average!: number;

  view_per_good_platform_average!: number;
  view_per_book_platform_average!: number;

  search_response!: SearchResponseDto;
}