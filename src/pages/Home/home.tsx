import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import Tooltip from "@component/Tooltip/Tooltip";
import Accordion from "../../component/Accordion/Accordion";

export default function Home() {
  const navigate = useNavigate();
  // const accordionState = useState([]);

  const onClickStartBtn = () => {
    return navigate("/profiles");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>INTRODUCE MYSELF</span>
          <Tooltip
            message="직접 구현한 UI 컴포넌트 모음 페이지입니다."
            position="left"
          >
            <button
              className={styles["goto-component-group"]}
              onClick={() => navigate("/ComponentGroup")}
            >
              Go to see the component implementation results
            </button>
          </Tooltip>
        </div>
        <div className={styles.body}>
          <span className={styles.description}>
            안녕하세요, 지원자 김승현입니다.
          </span>
          <span className={styles.description}>아래 버튼을 클릭해주세요!</span>
          <Tooltip message="안녕하세요!" position="bottom">
            <button
              className={styles["start-button"]}
              onClick={onClickStartBtn}
            >
              START
            </button>
          </Tooltip>

          {/* <AccordionProvider> */}
          <Accordion>{/* <AccordionItems></AccordionItems> */}</Accordion>
          {/* </AccordionProvider> */}
        </div>
      </div>
    </>
  );
}
