import styles from "./profile.module.scss";
import ImgBasic from "../../assets/image/basic.png";
import ImgStudent from "../../assets/image/student.png";
import ImgAdult from "../../assets/image/adult.png";
import ProfileCardComponent from "../../component/ProfileCard/ProfileCard";

export default function Profile() {
  const profileList = [
    { id: 1, name: "기본 프로필", img: ImgBasic },
    { id: 2, name: "대학생", img: ImgStudent },
    { id: 3, name: "개발자", img: ImgAdult },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>프로필을 선택해주세요</div>
        <div className={styles["profile-list"]}>
          {profileList.map((profile) => {
            return (
              <ProfileCardComponent profile={profile}></ProfileCardComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}
