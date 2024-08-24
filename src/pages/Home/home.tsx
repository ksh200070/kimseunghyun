import styles from "./home.module.scss";

export default function home() {
  const onClickStartBtn = () => {};

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>INTRODUCE MYSELF</div>
        <div className={styles.body}>
          <span>안녕하세요, 지원자 김승현입니다.</span>
          <span>아래 버튼을 클릭해주세요!</span>
          <button className={styles["start-button"]} onClick={onClickStartBtn}>
            START
          </button>
        </div>
      </div>
    </>
  );
}
