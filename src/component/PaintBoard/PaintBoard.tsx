import { useEffect, useRef, useState } from "react";
import styles from "./PaintBoard.module.scss";
import { fabric } from "fabric";

import IconSelectTool from "../../assets/icon/icon_select_tool.png";
import IconBrushTool from "../../assets/icon/icon_brush_tool.png";
import IconUndoTool from "../../assets/icon/icon_undo_tool.png";
import IconRedoTool from "../../assets/icon/icon_redo_tool.png";
import IconDownloadTool from "../../assets/icon/icon_download_tool.png";

const colorPalette = [
  { color: "red", hexCode: "#f02304" },
  { color: "orange", hexCode: "#ff8000" },
  { color: "yellow", hexCode: "#ffe70f" },
  { color: "green", hexCode: "#17e132" },
  { color: "mint", hexCode: "#00fffb" },
  { color: "blue", hexCode: "#000dff" },
  { color: "black", hexCode: "#000" },
  { color: "pink", hexCode: "#ff1d8e" },
];

const PaintBoardComponent = ({}) => {
  const [browserWidth, setBrowserWidth] = useState<number>(0);
  const resizeTimer = useRef<any>(null);

  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [activeTool, setActiveTool] = useState<string>("select");

  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [history, setHistory] = useState<fabric.Object[] | undefined>([]);
  const canvasRef = useRef(null);

  const [brushColor, setBrushColor] = useState<{
    color: string;
    hexCode: string;
  }>(colorPalette[0]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimer.current !== null) return;
      resizeTimer.current = setTimeout(() => {
        resizeTimer.current = null;
        setBrowserWidth(window.innerWidth);
      }, 200);
    };
    window.addEventListener("resize", handleResize);
    console.log(browserWidth);

    if (!canvas) return;

    if (browserWidth < 768) {
      canvas.setWidth(browserWidth);
    } else {
      canvas.setWidth(360);
    }

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [browserWidth]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 360,
      height: 200,
      backgroundColor: "white",
    });

    setCanvas(() => newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !canvas) return;

    const handleSelectTool = () => {
      canvas.isDrawingMode = false;
    };

    const handleBrushTool = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = brushColor.hexCode;
    };

    switch (activeTool) {
      case "select":
        handleSelectTool();
        break;

      case "brush":
        handleBrushTool();
        break;
    }

    const saveHistory = () => {
      if (!isLocked) setHistory([]);

      setIsLocked(false);
    };

    if (canvas) {
      canvas.on("object:added", saveHistory);
      canvas.on("object:modified", saveHistory);
      canvas.on("object:removed", saveHistory);
    }
  }, [canvas, activeTool, isLocked]);

  useEffect(() => {
    if (!canvas) return;

    canvas.freeDrawingBrush.color = brushColor.hexCode;
  }, [brushColor]);

  const handleUndoClick = () => {
    if (canvas && canvas._objects.length > 0) {
      const poppedObject = canvas._objects.pop();

      setHistory((prev: fabric.Object[] | undefined) => {
        if (!prev) return poppedObject ? [poppedObject] : [];

        return poppedObject ? [...prev, poppedObject] : prev;
      });
      canvas.renderAll();
    }
  };

  const handleRedoClick = () => {
    if (canvas && history && history.length > 0) {
      setIsLocked(true);
      canvas.add(history[history.length - 1]);
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
    }
  };

  const handleExportPng = () => {
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");

      a.href = url;
      a.download = "sh_protfolio_free_drawing.png";
      a.click();
    }
  };

  const handleColorPalette = (selectedColor: {
    color: string;
    hexCode: string;
  }) => {
    setBrushColor(selectedColor);
  };
  return (
    <>
      {" "}
      <div className={styles["canvas-container"]}>
        <div className={styles["tool-bar"]}>
          <div className={styles["action-tools"]}>
            {["select", "brush"].map((tool, i) => {
              return (
                <button
                  className={styles.tool}
                  onClick={() => setActiveTool(tool)}
                  disabled={activeTool === tool}
                >
                  <img
                    className={styles.icon}
                    src={tool === "select" ? IconSelectTool : IconBrushTool}
                    alt=""
                  />
                </button>
              );
            })}
            {activeTool === "brush" && (
              <div className={styles.palette}>
                {colorPalette.map((color, i) => {
                  return (
                    <div
                      className={`${styles.color} ${
                        brushColor.color === color.color && styles.selected
                      }`}
                      style={{ backgroundColor: color.hexCode }}
                      onClick={() => handleColorPalette(color)}
                    ></div>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles["revert-tools"]}>
            <button className={styles.tool} onClick={() => handleUndoClick()}>
              <img className={styles.icon} src={IconUndoTool} alt="" />
            </button>
            <button className={styles.tool} onClick={() => handleRedoClick()}>
              <img className={styles.icon} src={IconRedoTool} alt="" />
            </button>

            <div className={styles.devider}></div>

            <button
              className={`${styles["download-button"]}`}
              onClick={() => handleExportPng()}
            >
              <img
                className={`${styles.download} ${styles.icon}`}
                src={IconDownloadTool}
                alt=""
              />
            </button>
          </div>
        </div>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default PaintBoardComponent;
