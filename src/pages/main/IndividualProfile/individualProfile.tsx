import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./individualProfile.module.scss";
import ProfileCard from "@component/ProfileCard/ProfileCard";
import WideCardComponent from "@component/WideCard/WideCard";
import PaintBoardComponent from "@component/PaintBoard/PaintBoard";
import ImgIndividual from "@assets/image/individual.png";
import { Project } from "types/Content";
import { Profile } from "types/Profile";

const projects: Project[] = [
  {
    id: 1,
    isDevProject: true,
    title: "Fabric.js를 활용한 캔버스 그림판",
    component: <PaintBoardComponent></PaintBoardComponent>,
    memberCount: 0,
    description:
      "여러가지 색상의 브러쉬, 되돌리기, 다운로드 및 저장 의 기능을 제공합니다.",
    video: "/portfolio/videos/paint.mov",
    link: [
      {
        name: "깃허브 코드 확인하러 가기",
        url: "https://github.com/ksh200070/portfolio/blob/develop/src/pages/main/IndividualProfile/individualProfile.tsx",
      },
    ],
    notes: [],
  },
  // {
  //   id: 1,
  //   title: "Fabric.js를 활용한 캔버스 그림판",
  //   isDevProject: true,
  //   description:
  //     "여러가지 색상의 브러쉬, 되돌리기, 다운로드 및 저장 의 기능을 제공합니다.",
  //   notes: [""],
  // },
];

export default function IndividualProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile>({
    id: 3,
    name: "개발자",
    img: ImgIndividual,
  });

  useEffect(() => {
    const currentProfile = localStorage.getItem("profile");

    if (currentProfile) {
      setProfile(() => JSON.parse(currentProfile));
    }
  }, []);

  const onClickSwitchProfile = () => {
    return navigate("/profiles");
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
          <div className={styles["scroll-container"]}>
            {projects.map((project, i) => {
              return (
                <div className={styles.item}>
                  <WideCardComponent project={project}></WideCardComponent>
                  <section className={styles.project}>
                    {project.component}
                  </section>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
