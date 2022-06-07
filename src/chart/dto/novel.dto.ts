
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

  author!: string;

  is_end!: boolean;
  
  is_plus!: boolean;

  age_limit!: number;

  createdAt!: string;

  updatedAt!: string;

  constructor(partial: Partial<NovelDto>) {
    Object.assign(this, partial);
  }
}

export class NovelInfoDto {
  id!: number;

  view!: number;

  good!: number;

  book!: number;

  createdAt!: string;

  updatedAt!: string;

  constructor(partial: Partial<NovelInfoDto>) {
    Object.assign(this, partial);
  }
}

export class SearchResponseDto {
  code!: number;
  err!: string;
}
