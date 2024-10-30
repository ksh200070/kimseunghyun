import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./teamProfile.module.scss";
import { motion, spring } from "framer-motion";
import { Project } from "types/Content";
import { Profile } from "types/Profile";
import ImgTeam from "@assets/image/team.png";
import ProfileCard from "@component/ProfileCard/ProfileCard";
import ProjectCardComponent from "@component/ProjectCard/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Christmas Q25",
    isDevProject: true,
    notes: ["협업 : Github, Notion, Figma", "개발 : Html, Css, JavaScript"],
    memberCount: 7,
    description: (
      <span>
        <b>
          12월 1일부터 25일까지 매일 하나씩 질문이 열리는 어드벤트 캘린더 형식의
          웹 앱입니다.
        </b>
        사용자는 매일 질문에 답하며 한 해를 돌아보고 자신을 성찰하며, 연말을
        의미 있고 긍정적으로 마무리할 수 있도록 돕습니다.
      </span>
    ),
    imgFolder: "project_3",
    link: [
      {
        name: "Github 주소",
        url: "https://github.com/ChristmasQ25-WebTeam/Q25",
      },
    ],
  },
  {
    id: 2,
    isDevProject: true,
    notes: [
      "협업 : Github, Notion, Zira, Figma",
      "개발 : React (Scss, TypeScript)",
    ],
    title: "Chatty",
    memberCount: 5,
    description: (
      <span>
        <b>
          이 서비스는 Slack과 Discord의 기능을 모방한 워크스페이스 및 채널
          구조의 메신저 서비스입니다.
        </b>
        사용자는 특정 워크스페이스에 가입해 팀이나 프로젝트 단위로 소통할 수
        있으며, 워크스페이스 내에서 다양한 채널을 생성해 주제별로 대화할 수
        있습니다.
      </span>
    ),

    imgFolder: "",
    link: [
      {
        name: "Github 주소",
        url: "https://github.com/project-web-chatty/chatty-web",
      },
    ],
  },

  {
    id: 3,
    isDevProject: false,
    notes: [
      "협업 : Notion, Figma",
      "디자인/영상 : Figma, AfterEffect",
      "설문조사 : Google form",
    ],
    title: "(공모전) 모바일 한국장학재단 UX/UI 개선",
    memberCount: 4,
    description: (
      <span>
        7개의 정부 서비스 중, 실제로 사용해 보면서 사용성의 불편함을 가장 많이
        경험했던 한국장학재단 앱 서비스를 선택하여 서비스 디자인 개선안을
        발표하였습니다.
      </span>
    ),
    position: (
      <span>
        담당 : 데스크 및 유저 리서치 / UX.UI 전략 도출 / 가상고객 설정 및
        사용자여정지도 작성 후 UX.UI 전략 도출 / IA 재설계 / 프로토타입 시연
        영상 제작
      </span>
    ),
    tags: ["행정안전부 장관상 수상"],
    imgFolder: "project_1",
    link: [
      {
        name: "prototype 시연 영상 보러가기",
        url: "https://www.youtube.com/watch?v=-m1cwQTNP6c&feature=youtu.be",
      },
    ],
  },
  {
    id: 4,
    isDevProject: false,
    notes: [
      "협업 : Figma, Zoom",
      "디자인 : Figma",
      "유저테스트 : EyeTracking 장치",
    ],
    title: "알바천국 앱서비스 리디자인",
    memberCount: 7,
    description: (
      <span>
        알바몬보다 먼저 출시되었지만, 점유율 2위를 기록하고 있는
        <b>
          알바천국의 사용성을 점검하고 좋은 사용자 경험을 전달할 수 있는
          해결책을 제시하였습니다.
        </b>
      </span>
    ),
    position: (
      <span>
        참여 : 리서치, UT(사용성 테스트) 자료 분석 및 인사이트 도출, IA구조
        재설계, 와이어프레임 제작, 2번째 UT진행, 피피티 자료 정리
      </span>
    ),

    imgFolder: "project_4",
  },
  {
    id: 5,
    isDevProject: false,
    notes: ["협업 : Figma, Zoom", "디자인 : Figma"],
    title: "Run with pet",
    memberCount: 3,
    description: (
      <span>
        <b>
          바쁜 견주를 대신해 반려견과 함께 러닝할 러너를 매칭해주는
          플랫폼입니다.
        </b>
        견주는 필요할 때 반려견의 산책 욕구를 손쉽게 해결할 수 있고, 러너는
        반려견과 함께 즐거운 러닝을 하면서 수익도 창출할 수 있습니다.
      </span>
    ),
    position: (
      <span>
        담당 : 데스크 및 유저 리서치 / UX.UI 전략 도출 / 가상고객 설정 및
        사용자여정지도 작성 후 UX.UI 전략 도출 / IA 설계 / 프로토타입 제작
      </span>
    ),
    tags: ["교내 공모전 우수상 수상"],
    imgFolder: "project_2",
  },
];

export default function TeamProfile() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string>("개발");
  const [profile, setProfile] = useState<Profile>({
    id: 2,
    name: "대학생",
    img: ImgTeam,
  });

  useEffect(() => {
    const currentProfile = localStorage.getItem("profile");

    if (currentProfile) {
      setProfile(() => JSON.parse(currentProfile));
    }
  }, []);

  const tags = ["개발 프로젝트", "UX/UI 프로젝트"];

  const handleTag = (tag: string) => {
    setSelectedTag(() => tag);
    const scrollYValue = document.getElementById("tags")?.offsetTop;
    window.scrollTo({ top: scrollYValue, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.onboarding}>
          <span className={styles.title}>프로젝트</span>
          <div className={styles.description}>
            협업을 통해 코드를 함께 작성하고, 프로젝트 관리를 진행하는 방식을
            배울 수 있었습니다.
          </div>
        </div>
        <div className={styles.profile}>
          <ProfileCard
            size="sm"
            profile={profile}
            onClick={() => navigate("/profiles")}
          ></ProfileCard>
        </div>
      </section>

      <section className={styles.body}>
        <div id="tags" className={styles["tag-list"]}>
          <div className={`${styles.tag} ${styles.dev}`}>개발 프로젝트</div>
          <div className={`${styles.tag} ${styles.design}`}>UX/UI 프로젝트</div>
        </div>

        <motion.div
          className={styles.cards}
          initial={{ y: -40 }}
          animate={{
            y: 0,
            transition: {
              type: spring,
              staggerChildren: 0.07,
              delayChildren: 0.2,
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <ProjectCardComponent project={project}></ProjectCardComponent>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
