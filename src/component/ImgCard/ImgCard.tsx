import { Content } from "../../types/Content";
import styles from "./ImgCard.module.scss";
import IconUser from "../../assets/icon/icon_user_black.svg";
import Tag from "../Tag/Tag";
import ImageGallery from "../ImageGallery/ImageGallery";

interface ImgCardProps {
  content: Content;
}

const ImgCardComponent: React.FC<ImgCardProps> = ({ content }) => {
  return (
    <div className={styles["content"]} key={content.id}>
      <div className={styles["content-header"]}>
        <div className={styles["info"]}>
          <span className={styles.title}>{content.title}</span>
          <div className={styles.members}>
            {Array(content.memberCount).fill(
              <img src={IconUser} className={styles["icon-user"]} alt="" />
            )}
          </div>
        </div>
        <div className={styles.tags}>
          {content.tags?.map((tag: string, i: number) => {
            return <Tag key={i} tagName={tag} size="sm"></Tag>;
          })}
        </div>
      </div>
      <div className={styles.description}>{content.description}</div>

      {content.imgFolder && (
        <div className={styles.imgs}>
          <ImageGallery folderName={content.imgFolder}></ImageGallery>
        </div>
      )}
      {content.link && (
        <a
          className={styles.link}
          href={content.link[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.link[0].name}
        </a>
      )}
    </div>
  );
};

export default ImgCardComponent;
