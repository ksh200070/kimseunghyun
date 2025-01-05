import styles from "./AccordionHeader.module.scss";
import IconDownArrow from "../../../assets/icon/icon_down_arrow.png";
import { useAccordion } from "../../../providers/accordion";

export interface AccordionHeaderProps {
  id: number;
  title: string;
}
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ id, title }) => {
  const { expandedIndex, clickExpand } = useAccordion();

  return (
    <div className={styles.header} onClick={() => clickExpand(id)}>
      <span className={styles.title}>{title}</span>
      <button>
        <img
          src={IconDownArrow}
          alt="icon-down-arrow"
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default AccordionHeader;
