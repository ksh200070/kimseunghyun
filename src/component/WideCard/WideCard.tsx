import styles from "./WideCard.module.scss";

import Tag from "../Tag/Tag";
import { Project } from "../../types/Content";

interface WideCardProps {
  project: Project;
  onClick?: () => void;
}

const WideCardComponent: React.FC<WideCardProps> = ({ project, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {project.imgFolder && <div>{/* <img src={img} alt="" /> */}</div>}
      {project.video && (
        <video
          className={styles.video}
          src={project.video}
          typeof="video/mov"
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className={styles.content}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.description}>{project.description}</span>
        {project.link && (
          <a
            className={styles.link}
            href={project.link[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link[0].name}
          </a>
        )}
      </div>
      {project.tags && (
        <div className={styles.tags}>
          {project.tags.map((tag, index) => {
            return <Tag size="sm" tagName={tag} key={index}></Tag>;
          })}
        </div>
      )}
    </div>
  );
};

export default WideCardComponent;
