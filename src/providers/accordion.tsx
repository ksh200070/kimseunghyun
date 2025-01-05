import { createContext, useCallback, useContext, useState } from "react";

type Data = {
  expandedIndex: number[];
  clickExpand: (index: number) => void;
};

export const AccordionContext = createContext<Data>({} as Data);

export function AccordionProvider({ children }: { children: React.ReactNode }) {
  const [expandedIndex, setExpandedIndex] = useState<number[]>([]);

  const clickExpand = useCallback(
    (index: number) => {
      console.log(index, expandedIndex);

      setExpandedIndex((array: number[]) => {
        if (array.includes(index)) {
          return array.filter((v) => v !== index);
        } else {
          array.push(index);
          return array;
        }
      });
    },
    [expandedIndex]
  );

  return (
    <AccordionContext.Provider
      value={{
        expandedIndex,
        clickExpand,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

// 컨텍스트 사용
export function useAccordion() {
  return useContext(AccordionContext);
}
