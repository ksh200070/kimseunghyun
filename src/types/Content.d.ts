import { JsxElement } from "typescript";
import { ReactNode } from "react";

export interface Projects {
  id: number;
  category: string;
  contents: Project[];
}

export interface Project {
  id: number;
  isDevProject: boolean = true;
  title: string;
  description: ReactNode | string;
  notes: string[];

  subTitle?: string;
  memberCount?: number;
  position?: ReactNode | string;
  tags?: string[];
  imgFolder?: string;
  video?: string;
  link?: { name: string; url: string }[];
  component?: ReactNode;
}
