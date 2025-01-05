import styles from "./Tooltip.module.scss";
import { ReactNode } from "react";

export interface TooltipProps {
  message: string;
  position: string;
  children?: ReactNode;
}
const Tooltip: React.FC<TooltipProps> = ({ message, position, children }) => {
  return (
    <div className={styles.container}>
      {children}
      <span className={`${styles.content} ${styles[position]}`}>{message}</span>
    </div>
  );
};
export default Tooltip;
