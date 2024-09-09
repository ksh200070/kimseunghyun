import { useLocation, useNavigate } from "react-router-dom";
import styles from "./basicProfile.module.scss";
import ProfileCard from "@component/ProfileCard/ProfileCard";
import ImgBasic from "@assets/image/basic.png";
import { useEffect, useState } from "react";
import { Profile } from "types/Profile";

export default function BasicProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile>({
    id: 1,
    name: "기본 프로필",
    img: ImgBasic,
  });

  useEffect(() => {
    const currentProfile = localStorage.getItem("profile");

    if (currentProfile) {
      setProfile(() => JSON.parse(currentProfile));
    }
  }, []);

  const onClickSwitchProfile = () => {
    return navigate("/profiles");
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.profile}>
            <ProfileCard
              size="sm"
              profile={profile}
              onClick={onClickSwitchProfile}
            ></ProfileCard>
            {/* <button>프로필 변경</button> */}
          </div>
        </section>
      </div>
    </>
  );
}
