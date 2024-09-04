import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fabric } from "fabric";
import styles from "./thirdProfile.module.scss";
import ProfileCard from "../../../component/ProfileCard/ProfileCard";
import IconSelectTool from "../../../assets/icon/icon_select_tool.png";
import IconPenTool from "../../../assets/icon/icon_pen_tool.png";
import IconUndoTool from "../../../assets/icon/icon_undo_tool.png";
import IconRedoTool from "../../../assets/icon/icon_redo_tool.png";

export default function ThirdProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profile } = state;
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [activeTool, setActiveTool] = useState<string>("select");

  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [history, setHistory] = useState<fabric.Object[] | undefined>([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
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

    const handlePenTool = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = "black";
    };

    switch (activeTool) {
      case "select":
        handleSelectTool();
        break;

      case "pen":
        handlePenTool();
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

  const onClickSwitchProfile = () => {
    return navigate("/profile");
  };

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

  return (
    <>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.profile}>
            <ProfileCard
              size="sm"
              profile={profile}
              onClick={onClickSwitchProfile}
            ></ProfileCard>
            {/* <button>프로필 변경</button> */}
          </div>
        </section>
        <section className={styles.body}>
          <div className={styles["canvas-container"]}>
            <div className={styles["tool-bar"]}>
              <div className={styles["action-tools"]}>
                {["select", "pen"].map((tool, i) => {
                  return (
                    <button
                      className={styles.tool}
                      onClick={() => setActiveTool(tool)}
                      disabled={activeTool === tool}
                    >
                      <img
                        src={tool === "select" ? IconSelectTool : IconPenTool}
                        alt=""
                      />
                    </button>
                  );
                })}
              </div>
              <div className={styles["revert-tools"]}>
                <button
                  className={styles.tool}
                  disabled={activeTool === "undo"}
                  onClick={() => handleUndoClick()}
                >
                  <img src={IconUndoTool} alt="" />
                </button>
                <button
                  className={styles.tool}
                  disabled={activeTool === "redo"}
                  onClick={() => handleRedoClick()}
                >
                  <img src={IconRedoTool} alt="" />
                </button>
              </div>
            </div>
            <canvas ref={canvasRef} />
          </div>
          {/* <div>
            <ContentCard
              onClick={() => navigate("/openApi")}
              title="알기 쉬운 집수리 동영상 정보"
              contents="서울시의 저층 노후 주거지 수리시 참고할 수 있는 동영상 정보를 제공합니다."
            ></ContentCard>
          </div> */}
        </section>
      </div>
    </>
  );
}
