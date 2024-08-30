export interface Card {
  tag: string;
  items: Contents[];
}

export interface Contents {
  category: string;
  contents: Content[];
}

export interface Content {
  id: number;
  subTitle?: string;
  title: string;
  memberCount?: number;
  description: string;
  tags?: string[];
  imgFolder?: string;
  link?: { name: string; url: string }[];
}
