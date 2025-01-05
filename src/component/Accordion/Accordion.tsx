import { ReactNode, useState } from "react";
import styles from "./Accordion.module.scss";
import { AccordionProvider, useAccordion } from "../../providers/accordion";
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionHeader from "./AccordionHeader/AccordionHeader";

export interface AccordionListProps {
  children?: ReactNode;
}
const AccordionList: React.FC<AccordionListProps> = ({ children }) => {
  const accordionState = useState([]);

  const { expandedIndex, clickExpand } = useAccordion();
  const testData = [
    {
      id: 1,
      title: "개인 프로젝트는 무엇인가요?",
      content:
        "1인으로 단독 작업한 결과물을 의미합니다. 시각적인 결과가 있는 작은 컴포넌트부터 다양한 사이트까지 여러 프로젝트가 담겨있습니다.",
    },
    {
      id: 2,
      title: "UI 태그가 붙어있는 것들은 어떤 의미인가요?",
      content:
        "UI 컴포넌트를 라이브러리 사용없이 직접 구현한 요소들에 대해서 붙여놓았습니다.",
    },
    {
      id: 3,
      title: "간단한 소개 부탁드려요",
      content:
        "웹 프론트엔드에 대해서 공부하고 있습니다. 결과물을 시각적으로 확인하며 작업하는게 재미있기도 했고 변화해나가는 모습에 성취감을 느낄 수 있어서 선택하게 되었습니다.",
    },
  ];

  return (
    <AccordionProvider>
      <div className={styles.container}>
        {testData.map((item) => (
          <>
            <AccordionHeader id={item.id} title={item.title}></AccordionHeader>

            {expandedIndex?.includes(item.id) && (
              <AccordionBody content={item.content}></AccordionBody>
            )}
          </>
        ))}
      </div>
    </AccordionProvider>
  );
};

export default AccordionList;
