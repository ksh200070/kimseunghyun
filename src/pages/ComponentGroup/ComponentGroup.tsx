import styles from "./ComponentGroup.module.scss";
import ProjectCardComponent from "../../component/ProjectCard/ProjectCard";
import TooltipThumbnail from "../../assets/image/components/tooltip.png";
import AccordionThumbnail from "../../assets/image/components/accordion.png";
import { useNavigate } from "react-router-dom";

export default function ComponentGroup() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <button className={styles.prev} onClick={() => navigate("/")}>
          이전 페이지로 이동
        </button>
        <h1>Component List</h1>
        <div className={styles.list}>
          <ProjectCardComponent
            project={{
              id: 1,
              isDevProject: true,
              title: "Tooltip",
              description:
                "사용자가 웹 브라우저의 이미지나 텍스트에 마우스를 가져다 댔을 때, 그에 대한 설명이 말풍선 형태로 뜨는 기능",
              notes: [],
              thumbnail: TooltipThumbnail,
            }}
          ></ProjectCardComponent>
          <ProjectCardComponent
            project={{
              id: 2,
              isDevProject: true,
              title: "Accordion",
              description:
                "고정 초기 영역에 많은 정보를 보여주고 사용자가 페이지 전환 없이 상세정보를 확인하도록 돕는 UI",
              notes: [],
              thumbnail: AccordionThumbnail,
            }}
          ></ProjectCardComponent>
        </div>
      </div>
    </>
  );
}
