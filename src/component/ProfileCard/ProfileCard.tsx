import styles from "./ProfileCard.module.scss";

interface ProfileProps {
  profile: {
    id: number;
    name: string;
    img: string;
  };
}

const ProfileCardComponent: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <>
      <div className={styles.profile} key={profile.id}>
        <div className={styles.img}>
          <img src={profile.img} alt="" />
        </div>
        <span className={styles.name}>{profile.name}</span>
      </div>
    </>
  );
};

export default ProfileCardComponent;
