import { useLocation, useNavigate } from "react-router-dom";
import ContentCard from "../../../component/ContentCard/ContentCard";
import ProfileCard from "../../../component/ProfileCard/ProfileCard";
import styles from "./thirdProfile.module.scss";

export default function ThirdProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profile } = state;

  const onClickSwitchProfile = () => {
    return navigate("/profile");
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
        <section className={styles.body}>
          {/* <div>
            <ContentCard
              onClick={() => navigate("/openApi")}
              title="알기 쉬운 집수리 동영상 정보"
              contents="서울시의 저층 노후 주거지 수리시 참고할 수 있는 동영상 정보를 제공합니다."
            ></ContentCard>
          </div> */}
        </section>
      </div>
    </>
  );
}
