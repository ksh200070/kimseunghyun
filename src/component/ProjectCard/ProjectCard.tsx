import styles from "./ProjectCard.module.scss";
import IconCode from "@assets/icon/icon_code.png";
import IconDesign from "@assets/icon/icon_uxui.png";
import TagComponent from "@component/Tag/Tag";
import { Project } from "types/Content";

interface ProjectCardProps {
  project: Project;
  // className: string;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({
  project,
  // className,
}) => {
  return (
    <div
      className={`${styles["card-container"]} ${
        project.isDevProject ? styles.dev : styles.design
      }`}
    >
      <div className={styles.header}>
        <div className={styles.flag}>
          <img
            className={styles.icon}
            src={project.isDevProject ? IconCode : IconDesign}
            alt=""
          />
          <span className={styles.text}>
            {project.isDevProject ? "Web Frontend 구현" : "UX/UI 서비스 디자인"}
          </span>
        </div>
      </div>
      <span className={styles.title}>{project.title}</span>
      <span className={styles.description}>{project.description}</span>
      <div className={styles.tags}>
        {project.tags?.map((tag, index) => (
          <TagComponent tagName={tag}></TagComponent>
        ))}
      </div>
      <div className={styles.notes}>
        {project.notes.map((note, i) => {
          return <span className={styles.note}>{note}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectCardComponent;
