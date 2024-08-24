import styles from "./profile.module.scss";
import ImgBasic from "../../assets/image/basic.png";
import ImgStudent from "../../assets/image/student.png";
import ImgAdult from "../../assets/image/adult.png";

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>프로필을 선택해주세요</div>
        <div className={styles["profile-list"]}>
          <div className={styles.profile}>
            <div className={styles.img}>
              <img src={ImgBasic} alt="" />
            </div>
            <span className={styles.name}>기본 프로필</span>
          </div>
          <div className={styles.profile}>
            <div className={styles.img}>
              <img src={ImgStudent} alt="" />
            </div>
            <span className={styles.name}>대학생</span>
          </div>
          <div className={styles.profile}>
            <div className={styles.img}>
              <img src={ImgAdult} alt="" />
            </div>
            <span className={styles.name}>개발자</span>
          </div>
        </div>
      </div>
    </>
  );
}
