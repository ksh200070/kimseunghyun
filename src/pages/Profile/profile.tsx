import styles from "./profile.module.scss";
import ImgBasic from "../../assets/image/basic.png";
import ImgStudent from "../../assets/image/student.png";
import ImgAdult from "../../assets/image/adult.png";
import ProfileCardComponent from "../../component/ProfileCard/ProfileCard";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { BasicProfile } from "../../types/Profile";

export default function Profile() {
  const navigate = useNavigate();
  const profileList: BasicProfile[] = [
    { id: 1, name: "기본 프로필", img: ImgBasic },
    { id: 2, name: "대학생", img: ImgStudent },
    { id: 3, name: "개발자", img: ImgAdult },
  ];

  const onClickProfile = useCallback(
    (profile: BasicProfile) => {
      if (profile.id === 1) {
        navigate(`/basic`, { state: { profile } });
      } else if (profile.id === 2) {
        navigate(`/student`, { state: { profile } });
      } else if (profile.id === 3) {
        navigate(`/developer`, { state: { profile } });
      }
    },
    [navigate]
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>프로필을 선택해주세요</div>
        <div className={styles["profile-list"]}>
          {profileList.map((profile, i) => {
            return (
              <ProfileCardComponent
                key={profile.id}
                profile={profile}
                onClick={() => onClickProfile(profile)}
              ></ProfileCardComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}
