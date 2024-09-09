import { Profile } from "../../types/Profile";
import styles from "./ProfileCard.module.scss";

interface ProfileProps {
  profile: Profile;
  onClick: () => void;
  size?: "sm" | "md";
}

const ProfileCardComponent: React.FC<ProfileProps> = ({
  profile,
  onClick,
  size = "md",
}) => {
  return (
    <div
      className={`${styles.profile} ${styles[size]}`}
      key={profile.id}
      onClick={onClick}
    >
      <div className={styles.img}>
        <img src={profile.img} alt="" />
      </div>
      <span className={styles.name}>{profile.name}</span>
    </div>
  );
};

export default ProfileCardComponent;
