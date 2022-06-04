
export enum PlatformType {
  NOVELPIA = 'novelpia',
  MUNPIA = 'munpia',
  KAKAOPAGE = 'kakaopage',
}

export class NovelDto {
  id!: number;

  title!: string;

  type!: PlatformType;

  thumbnail!: string;

  link!: string;

  constructor(partial: Partial<NovelDto>) {
    Object.assign(this, partial);
  }
}

class NovelInfoDto {
  id!: number;

  view!: number;

  good!: number;

  book!: number;

  constructor(partial: Partial<NovelInfoDto>) {
    Object.assign(this, partial);
  }
}

export class SearchResponseDto {
  code!: number;
  err!: string;
}

export class AnalyzeNovelDto extends NovelDto {
  info!: NovelInfoDto;

  view_per_good!: number;
  view_per_book!: number;

  view_per_good_average!: number;
  view_per_book_average!: number;

  search_response!: SearchResponseDto;
}
