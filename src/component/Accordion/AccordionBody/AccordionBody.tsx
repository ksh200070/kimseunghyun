import styles from "./AccordionBody.module.scss";

export interface AccordionBodyrops {
  content: string;
}
const AccordionBody: React.FC<AccordionBodyrops> = ({ content }) => {
  return <div className={styles.content}>{content}</div>;
};

export default AccordionBody;
