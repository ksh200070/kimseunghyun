import styles from "./Tag.module.scss";

interface TagProps {
  tagName: string;
  onClick?: () => void;
  isSelected?: boolean;
  size?: "sm" | "md";
}

const TagComponent: React.FC<TagProps> = ({
  tagName,
  onClick,
  isSelected = false,
  size = "md",
}) => {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${
        isSelected && styles.selected
      }`}
      onClick={onClick}
    >
      <span className={styles.name}>{tagName}</span>
    </div>
  );
};

export default TagComponent;
