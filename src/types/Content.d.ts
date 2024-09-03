import { JsxElement } from "typescript";
import { ReactNode } from "react";

export interface Projects {
  id: number;
  category: string;
  contents: Content[];
}

export interface Project {
  id: number;
  subTitle?: string;
  title: string;
  memberCount?: number;
  description: ReactNode | string;
  position?: ReactNode | string;
  tags?: string[];
  imgFolder?: string;
  link?: { name: string; url: string }[];
}
