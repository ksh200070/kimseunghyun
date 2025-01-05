import MobileNavbar from "@component/MobileNavbar/MobileNavbar";
import Tag from "@component/Tag/Tag";
import { useState } from "react";
import styles from "./mobile.module.scss";
import ImgProfile from "@assets/image/profile.png";

export default function Mobile() {
  const [selectedMenu, setSelectedMenu] = useState<string>("프로필");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>{selectedMenu}</span>
          <Tag tagName="Mobile 버전" size="sm"></Tag>
        </div>
        <div className={styles.body}>
          {selectedMenu === "프로필" && (
            <div className={`${styles["profile-page"]}`}>
              <div className={`${styles["profile-basic"]}`}>
                <img src={ImgProfile} alt="" />
                <span className={styles.name}>김승현</span>
                <span className={styles.info}>
                  2000년(23살) / 010.8517.4813 / ksh20007@naver.com
                </span>
              </div>

              <div className={`${styles["profile-detail"]}`}>
                <Tag tagName="학력" size="sm"></Tag>
                <div></div>
              </div>
            </div>
          )}
          {selectedMenu === "프로젝트" && <></>}
          {selectedMenu === "스터디" && <></>}
        </div>
        <MobileNavbar onClick={(name) => setSelectedMenu(name)}></MobileNavbar>
      </div>
    </>
  );
}
