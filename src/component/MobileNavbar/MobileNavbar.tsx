import styles from "./MobileNavbar.module.scss";
import { motion, spring } from "framer-motion";
import IconProfile from "@assets/icon/icon_profile.png";
import IconBox from "@assets/icon/icon_box.png";
import IconBooks from "@assets/icon/icon_books.png";
import { useState } from "react";

interface MobileNavbarProps {
  onClick: (name: string) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onClick }) => {
  const menu = [
    { name: "프로필", icon: IconProfile },
    { name: "프로젝트", icon: IconBox },
    { name: "스터디", icon: IconBooks },
  ];

  const [select, setSelect] = useState<string>(menu[0].name);
  const onClickMenu = (name: string) => {
    setSelect(name);
    onClick(name);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ y: 100 }}
      animate={{
        y: 0,
        transition: {
          type: spring,
          staggerChildren: 0.07,
          delayChildren: 0.2,
        },
      }}
    >
      {menu.map((item) => (
        <div
          className={`${styles.item} ${
            select === item.name && styles.selected
          }`}
          onClick={() => onClickMenu(item.name)}
        >
          <motion.img
            className={styles.icon}
            src={item.icon}
            alt={item.name}
            initial={{ y: 40 }}
            animate={{
              y: 0,
              transition: {
                type: spring,
              },
            }}
            whileTap={{ scale: 1.2 }}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default MobileNavbar;
