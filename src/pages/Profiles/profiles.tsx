import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profiles.module.scss";
import ImgBasic from "@assets/image/basic.png";
import ImgTeam from "@assets/image/team.png";
import ImgIndividual from "@assets/image/individual.png";
import ProfileCardComponent from "@component/ProfileCard/ProfileCard";
import { Profile } from "types/Profile";

export default function Profiles() {
  const navigate = useNavigate();
  const profileList: Profile[] = [
    { id: 1, name: "기본 프로필", img: ImgBasic },
    { id: 2, name: "개인 프로젝트", img: ImgIndividual },
    { id: 3, name: "팀 프로젝트", img: ImgTeam },
  ];

  const onClickProfile = useCallback(
    (profile: Profile) => {
      localStorage.setItem("profile", JSON.stringify(profile));

      if (profile.id === 1) {
        navigate(`/basic`);
      } else if (profile.id === 2) {
        navigate(`/individual`);
      } else if (profile.id === 3) {
        navigate(`/team`);
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
