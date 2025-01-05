import { ReactNode } from "react";
import Tag from "@component/Tag/Tag";
import styles from " ./ContentCard.module.scss";

interface ContentCardProps {
  title: string;
  contents: string | ReactNode;
  onClick?: () => void;
  size?: "sm" | "md";
  tags?: string[];
}

const ContentCardComponent: React.FC<ContentCardProps> = ({
  title,
  contents,
  onClick,
  size = "md",
  tags,
}) => {
  return (
    <div
      className={`${styles["content-box"]} ${styles[size]}`}
      onClick={onClick}
    >
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.contents}>{contents}</span>
      </div>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, index) => {
            return <Tag size="sm" tagName={tag} key={index}></Tag>;
          })}
        </div>
      )}
    </div>
  );
};

export default ContentCardComponent;
