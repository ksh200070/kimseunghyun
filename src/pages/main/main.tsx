import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileCard from "../../component/ProfileCard/ProfileCard";
import styles from "./main.module.scss";
import Tag from "../../component/Tag/Tag";
import Content, { Card, Contents } from "../../types/Content";
import ImgCard from "../../component/ImgCard/ImgCard";
import ContentCardComponent from "../../component/ContentCard/ContentCard";

const awardsContents = [
  {
    tag: "수상 경력",
    items: [
      {
        category: "교외 공모전",
        contents: [
          {
            id: 1,
            title: "서비스 디자인 개선 공모전",
            memberCount: 4,
            description:
              "7개의 제시된 정부서비스 중 택 1하여 서비스디자인 개선안을 제시합니다. 직접 사용해보았을 때 많은 사용성 불편감을 느낀 한국장학재단 앱서비스를 선정하여 리서치를 통해 유저들의 욕구를 파악하고 해결책을 도출하여 UX를 향상시킬 수 있도록 UI를 개선하였습니다.",
            tags: ["행정안전부 장관상 수상", "3개월"],
            imgFolder: "project_1",
            link: [
              {
                name: "prototype 시연 영상 보러가기",
                url: "https://www.youtube.com/watch?v=-m1cwQTNP6c&feature=youtu.be",
              },
            ],
          },
        ],
      },
      {
        category: "교내 공모전",
        contents: [
          {
            id: 2,
            title: "Run with pet",
            memberCount: 3,
            description:
              "직접 사용해보았을 때 많은 사용성 불편감을 느낀 한국장학재단 앱서비스를 선정하여 리서치를 통해 유저들의 욕구를 파악하고 해결책을 도출하여 UX를 향상시킬 수 있도록 UI를 개선하였습니다. ",
            tags: ["우수상 수상", "2개월"],
            imgFolder: "project_2",
          },
        ],
      },
    ],
  },
];

const projectContents = [
  {
    tag: "프로젝트",
    items: [
      {
        category: "팀 프로젝트 (비개발)",
        contents: [
          {
            id: 1,
            title: "알바천국 앱서비스 리디자인",
            memberCount: 7,
            description:
              "기존 알바천국 앱서비스를 분석하여 더 나은 사용성을 제공할 수 있도록 ux/ui개선안을 발표함.",
            tags: ["전공수업 프로젝트", "3개월"],
          },
        ],
      },
      {
        category: "팀 프로젝트 (개발)",
        contents: [
          {
            id: 2,
            title: "Christmas Q25",
            memberCount: 7,
            description:
              "12월 1일부터 25일까지 매일 1개의 질문이 오픈되는 어드벤트캘린더의 질문버전 서비스로 한 해를 되돌아볼 수 있는 질문에 대한 답변을 작성하며 잘 마무리할 수 있도록 도와주는 웹 어플리케이션 서비스입니다.",
            tags: ["프론트(4) 백(2) pm(1)", "2개월"],
            imgFolder: "project_3",
          },
          {
            id: 2,
            title: "Chatty",
            memberCount: 5,
            description:
              "slack & discord 의 기능을 모방한 워크스페이스 & 채널 구조의 메신저 서비스",
            tags: ["프론트(2) 백(2) pm(1)", "2개월"],
            imgFolder: "",
          },
        ],
      },
    ],
  },
];
const programingContents = [
  {
    tag: "프로그래밍 관련 활동",
    items: [
      {
        category: "스터디",
        contents: [
          {
            id: 1,
            title: "러닝 스터디",
            memberCount: 7,
            description: "<Do it!  html>, <Do it! css>, <Do it! js> 교재 실습",
            tags: ["교내 스터디 프로그램", "8주"],
          },
          {
            id: 2,
            subTitle: "스터디",
            title: "개인 스터디",
            memberCount: 3,
            description:
              "직접 사용해보았을 때 많은 사용성 불편감을 느낀 한국장학재단 앱서비스를 선정하여 리서치를 통해 유저들의 욕구를 파악하고 해결책을 도출하여 UX를 향상시킬 수 있도록 UI를 개선하였습니다. ",
            tags: ["우수상 수상", "2개월"],
            imgFolder: "",
          },
        ],
      },
    ],
  },
];

export default function Main() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profile } = state;
  const [selectedTag, setSelectedTag] = useState<string>("수상 경력");
  const [displayContents, setDisplayContents] = useState<Contents[]>(
    awardsContents[0].items
  );

  const tags = ["수상 경력", "프로젝트", "프로그래밍 관련 활동"];

  const onClickSwitchProfile = () => {
    return navigate("/profile");
  };

  const onClickTag = (tag: string) => {
    setSelectedTag(() => tag);

    if (tag === "수상 경력") {
      setDisplayContents(() => awardsContents[0].items);
    } else if (tag === "프로젝트") {
      setDisplayContents(() => projectContents[0].items);
    } else {
      setDisplayContents(() => programingContents[0].items);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles["tag-list"]}>
          {tags.map((tag, i) => {
            return (
              <Tag
                tagName={tag}
                key={i}
                onClick={() => onClickTag(tag)}
                isSelected={selectedTag === tag}
              ></Tag>
            );
          })}
        </div>
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
        {
          {
            "수상 경력": displayContents.map((contents, i) => {
              return (
                <div className={styles["contents-box"]}>
                  <span className={styles.category}>{contents.category}</span>
                  <div className={styles.contents}>
                    {contents.contents.map((content, index) => (
                      <ImgCard content={content} key={index}></ImgCard>
                    ))}
                  </div>
                </div>
              );
            }),
            프로젝트: displayContents.map((contents, i) => {
              return (
                <div className={styles["contents-box"]}>
                  <span className={styles.category}>{contents.category}</span>
                  <div className={styles.contents}>
                    {contents.contents.map((content, index) => (
                      <ImgCard content={content} key={index}></ImgCard>
                    ))}
                  </div>
                </div>
              );
            }),
            "프로그래밍 관련 활동": displayContents.map((contents, i) => {
              return (
                <div className={styles["contents-box"]}>
                  <span className={styles.category}>{contents.category}</span>
                  <div className={styles["flex-contents"]}>
                    {contents.contents.map((content, index) => (
                      <ContentCardComponent
                        key={i}
                        title={content.title}
                        contents={content.description}
                        tags={content.tags}
                      ></ContentCardComponent>
                    ))}
                  </div>
                </div>
              );
            }),
          }[selectedTag]
        }
      </section>
    </div>
  );
}
