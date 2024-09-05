import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  const navigate = useNavigate();

  const onClickStartBtn = () => {
    return navigate("/profile");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>INTRODUCE MYSELF</div>
        <div className={styles.body}>
          <span className={styles.description}>
            안녕하세요, 지원자 김승현입니다.
          </span>
          <span className={styles.description}>아래 버튼을 클릭해주세요!</span>
          <button className={styles["start-button"]} onClick={onClickStartBtn}>
            START
          </button>
        </div>
      </div>
    </>
  );
}
