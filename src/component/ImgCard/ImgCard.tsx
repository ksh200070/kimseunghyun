import { Project } from "../../types/Content";
import styles from "./ImgCard.module.scss";
import IconUser from "../../assets/icon/icon_user_black.svg";
import Tag from "../Tag/Tag";
import ImageGallery from "../ImageGallery/ImageGallery";

interface ImgCardProps {
  project: Project;
}

const ImgCardComponent: React.FC<ImgCardProps> = ({ project }) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["content-header"]}>
        <div className={styles["info"]}>
          {project.id}.<span className={styles.title}>{project.title}</span>
        </div>
        <div className={styles.right}>
          <div className={styles.members}>
            {Array(project.memberCount).fill(
              <img src={IconUser} className={styles["icon-user"]} alt="" />
            )}
          </div>
          <div className={styles.tags}>
            {project.tags?.map((tag: string, i: number) => {
              return <Tag key={i} tagName={tag} size="sm"></Tag>;
            })}
          </div>
        </div>
      </div>

      <div className={styles.description}>{project.description}</div>

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
      {project.imgFolder && (
        <div className={styles.imgs}>
          <ImageGallery folderName={project.imgFolder}></ImageGallery>
        </div>
      )}
      {project.position && (
        <span className={styles.position}>{project.position}</span>
      )}
    </div>
  );
};

export default ImgCardComponent;
