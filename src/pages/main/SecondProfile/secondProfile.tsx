import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./secondProfile.module.scss";
import Tag from "../../../component/Tag/Tag";
import { Project, Projects } from "../../../types/Content";
import ImgCard from "../../../component/ImgCard/ImgCard";
import ProfileCard from "../../../component/ProfileCard/ProfileCard";

const projects: Projects[] = [
  {
    id: 1,
    category: "개발",
    contents: [
      {
        id: 1,
        title: "Christmas Q25",
        memberCount: 7,
        description:
          "이 서비스는 12월 1일부터 25일까지 매일 하나씩 질문이 오픈되는 어드벤트 캘린더 형식의 웹 어플리케이션입니다. 사용자는 매일 제공되는 질문에 답변을 작성하며 한 해를 되돌아볼 수 있습니다. 이 과정을 통해 자신을 성찰하고, 한 해를 의미 있게 마무리할 수 있도록 돕는 서비스입니다. 각 질문은 개인의 성장, 성취, 그리고 앞으로의 목표를 생각해볼 수 있는 주제로 구성되어 있어, 연말을 의미 있고 긍정적으로 보낼 수 있도록 지원합니다.",
        tags: ["프론트(4) 백(2) pm(1)", "2개월"],
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
        title: "Chatty",
        memberCount: 5,
        description:
          "이 서비스는 Slack과 Discord의 기능을 모방한 워크스페이스 및 채널 구조의 메신저 서비스입니다. 사용자는 특정 워크스페이스에 가입해 팀이나 프로젝트 단위로 소통할 수 있으며, 워크스페이스 내에서 다양한 채널을 생성해 주제별로 대화할 수 있습니다.",
        tags: ["프론트(2) 백(2) pm(1)", "2개월"],
        imgFolder: "",
        link: [
          {
            name: "Github 주소",
            url: "https://github.com/project-web-chatty/chatty-web",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "UX/UI 서비스 디자인",
    contents: [
      {
        id: 1,
        title: "(공모전) 모바일 한국장학재단 UX/UI 개선",
        memberCount: 4,
        description: (
          <span>
            공고문에 제시된 7개의 정부 서비스 중, 실제로 사용해 보면서 사용성의
            불편함을 가장 많이 경험했던 한국장학재단 앱 서비스를 선택하여 서비스
            디자인 개선안을 발표하였습니다. <br />
            데스크 및 유저 리서치를 진행하며 최대한 많은 유저들의 경험을 듣고자
            노력하였고, 그 과정에서 다양한 사용자들의 욕구와 문제점을 심층적으로
            분석했으며, 이를 토대로 구체적인 해결책을 도출했습니다. <br /> 특히
            UX 개선에 중점을 두어 사용성을 높이는 방향으로 UI를 전면적으로
            재설계했습니다.
          </span>
        ),
        position: (
          <span>
            담당 : 데스크 및 유저 리서치 / UX.UI 전략 도출 / 가상고객 설정 및
            사용자여정지도 작성 후 UX.UI 전략 도출 / IA 재설계 / 프로토타입 시연
            영상 제작
          </span>
        ),
        tags: ["행정안전부 장관상 수상", "3개월"],
        imgFolder: "project_1",
        link: [
          {
            name: "prototype 시연 영상 보러가기",
            url: "https://www.youtube.com/watch?v=-m1cwQTNP6c&feature=youtu.be",
          },
        ],
      },
      {
        id: 2,
        title: "알바천국 앱서비스 리디자인",
        memberCount: 7,
        description: (
          <span>
            [서비스 측정과 평가] 전공 수업에서 진행한 프로젝트로, 리서치를 통해
            알바천국 모바일 서비스를 선정하였습니다. 알바천국은 알바몬보다 먼저
            출시되었지만, 점유율은 2위를 기록하고 있습니다. 알바천국의 사용성을
            점검하고 좋은 사용자 경험을 전달할 수 있는 해결책을 제시하고자
            노력하였습니다. <br /> 아이트래킹 장치를 활용하여 사용성 테스트를
            진행했고, 서비스 이용 과정에서 발생할 수 있는 오류사항을 발견하고
            분석했습니다. 이를 바탕으로 구체적인 솔루션을 도출하여, 개선된
            프로토타입을 제시하였습니다.
          </span>
        ),
        position: (
          <span>
            참여 : 리서치, UT(사용성 테스트) 자료 분석 및 인사이트 도출, IA구조
            재설계, 와이어프레임 제작, 2번째 UT진행, 피피티 자료 정리
          </span>
        ),
        tags: ["전공수업 프로젝트", "3개월"],
        imgFolder: "project_4",
      },
      {
        id: 3,
        title: "Run with pet",
        memberCount: 3,
        description: (
          <span>
            [서비스 디자인 창업] 전공 수업에서 진행한 프로젝트로, 데스크
            리서치를 통해 서비스 기획을 시작했습니다.
            <br /> 이 서비스는 바쁜 견주를 대신해 반려견과 함께 러닝할 러너를
            매칭해주는 플랫폼입니다. 견주는 필요할 때 반려견의 산책 욕구를
            손쉽게 해결할 수 있고, 러너는 반려견과 함께 즐거운 러닝을 하면서
            수익도 창출할 수 있습니다. 이처럼 양측의 니즈를 모두 충족시키는
            혁신적인 서비스를 기획하고 디자인했습니다.
          </span>
        ),
        position: (
          <span>
            담당 : 데스크 및 유저 리서치 / UX.UI 전략 도출 / 가상고객 설정 및
            사용자여정지도 작성 후 UX.UI 전략 도출 / IA 설계 / 프로토타입 제작
          </span>
        ),
        tags: ["우수상 수상", "2개월"],
        imgFolder: "project_2",
      },
    ],
  },
];

export default function SecondProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profile } = state;
  const [selectedTag, setSelectedTag] = useState<string>("개발");

  const tags = ["개발", "UX/UI 서비스 디자인"];

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
            프로젝트는 크게 개발과 비개발로 구분되며, 각 분야에서 완성도 높은
            결과물을 도출한 프로젝트들로 구성되었습니다.
            <br />
            <strong> 개발</strong> 프로젝트는 웹 프론트엔드 분야에 참여한
            프로젝트들로, 사용자 경험을 고려한 효율적이고 직관적인 웹
            애플리케이션을 구현하였습니다.
            <br />
            <strong> 비개발</strong> 프로젝트는 UX/UI 서비스 디자인을 목적으로
            진행된 프로젝트들로, 사용자 중심의 설계를 통해 서비스의 가치를
            높이는 데 주력했습니다. 아래 나열된 모든 프로젝트는 100% 성실하게
            참여한 결과물입니다.
          </div>
        </div>
        <div className={styles.profile}>
          <ProfileCard
            size="sm"
            profile={profile}
            onClick={() => navigate("/portfolio/profile")}
          ></ProfileCard>
          {/* <button>프로필 변경</button> */}
        </div>
      </section>

      <div id="tags" className={styles["tag-list"]}>
        {tags.map((tag, i) => {
          return (
            <Tag
              tagName={tag}
              key={i}
              onClick={() => handleTag(tag)}
              isSelected={selectedTag === tag}
            ></Tag>
          );
        })}
      </div>

      <section className={styles.body}>
        {
          {
            개발: projects[0].contents.map((project: Project, i) => {
              return <ImgCard project={project} key={project.id}></ImgCard>;
            }),
            "UX/UI 서비스 디자인": projects[1].contents.map(
              (project: Project, i) => {
                return <ImgCard project={project} key={project.id}></ImgCard>;
              }
            ),
          }[selectedTag]
        }
      </section>
    </div>
  );
}
