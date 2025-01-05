import styles from "./ProfileCard.module.scss";

interface CardDetailModalProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
}

const CardDetailModal: React.FC<CardDetailModalProps> = ({
  onClick,
  size = "md",
}) => {
  return (
    <div className={`${styles.profile} ${styles[size]}`} onClick={onClick}>
      <div className={styles.img}>
        <img src={""} alt="" />
      </div>

      <span className={styles.name}>{}</span>
    </div>
  );
};

export default CardDetailModal;
