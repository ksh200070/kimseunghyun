import styles from "./home.module.scss";

import ImgDiary from "@assets/image/diary.png";
import ImgDaangn from "@assets/image/daangn.png";
import ImgBrowserMockup from "@assets/image/chrome-mac-light.png";
import IconHome from "@assets/icon/icon_home.png";
import IconDownArrow from "@assets/icon/icon_down_arrow_white.png";
import PaintBoardComponent from "@component/PaintBoard/PaintBoard";

import Imgchristmasq0 from "@assets/image/christmas/0.png";
import Imgchristmasq1 from "@assets/image/christmas/1.png";
import Imgchristmasq2 from "@assets/image/christmas/2.png";
import Imgchristmasq3 from "@assets/image/christmas/3.png";
import Imgchristmasq4 from "@assets/image/christmas/4.png";
import Imgchristmasq5 from "@assets/image/christmas/5.png";
import Imgchristmasq6 from "@assets/image/christmas/6.png";

import ImgChatty1 from "@assets/image/chatty/1.gif";
import ImgChatty2 from "@assets/image/chatty/2.png";
import ImgChatty3 from "@assets/image/chatty/3.png";
import ImgChatty4 from "@assets/image/chatty/4.png";

export default function Home() {
  const christmasImgs = [
    Imgchristmasq0,
    Imgchristmasq1,
    Imgchristmasq2,
    Imgchristmasq3,
    Imgchristmasq4,
    Imgchristmasq5,
    Imgchristmasq6,
  ];
  const chattyImgs = [ImgChatty1, ImgChatty2, ImgChatty3, ImgChatty4];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <img className={styles.icon} src={IconHome} alt="home icon" />
            KSH
          </div>
        </div>
        <div className={styles.body}>
          <PaintBoardComponent></PaintBoardComponent>
          <div className={styles.description}>
            {/* 안녕하세요. <br /> */}
            작은 디테일도 놓치지 않는 꼼꼼함과 <br />한 번 몰입하면 끝까지
            파고드는 집중력을 가진
            <br /> 웹 프론트엔드 개발자 김승현입니다. <br />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={`${styles["down-arrow-button"]}`}>
            <img
              className={`${styles["icon-down-arrow"]}`}
              src={IconDownArrow}
              alt=""
            />
          </button>
        </div>
      </div>

      <section className={`${styles["experience-section"]}`}>
        {/* Work Experience */}
        <div className={`${styles.work} ${styles.experience}`}>
          <h1>Work Experience</h1>
          <div className={styles.group}>
            <div className={styles.card}>
              <div className={`${styles.label} ${styles.category}`}>
                <h2>(주)유룸</h2>
                <div className={styles.info}>
                  <span className={styles.date}>2023.03 - 2024.02</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>정규직</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2023.10 - 2024.02</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      {/* <div className={styles.name}>[활동 내용]</div> */}
                      <div className={styles.description}>
                        사이트의 유지보수를 주로 담당하였고 백엔드 개발자와
                        협업하여 웹소켓을 활용한 실시간 채팅기능을
                        개발하였습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: HTML, SCSS, TypeScript / Angular.js</li>
                        <li>퇴사 사유: 학업</li>
                      </ul>
                    </div>
                  </section>
                </div>

                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>인턴십</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2023.03 - 2023.08</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        사내에서 사용될 예정인 Admin 사이트를 구축하였고 실제
                        운영사이트의 유지보수를 담당하였습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: HTML, SCSS, TypeScript / Angular.js</li>
                        <li>퇴사 사유: 계약 만료</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project */}
        <div className={`${styles.project} ${styles.experience}`}>
          <h1>Project Experience</h1>

          <div className={styles.group}>
            {/* project 1:  당근마켓 클론*/}
            <div className={styles.card}>
              {/* title*/}
              <div className={styles.label}>
                <h2>당근마켓 클론</h2>
                <div className={styles.info}>
                  <span className={styles.date}>
                    개인 프로젝트 / 2025.04 (1 DAY)
                  </span>
                </div>
              </div>

              {/* contents */}
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        반응형 웹과 스타일링 연습을 위한 당근마켓 클론코딩
                        작업물
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>퍼블리싱 작업</li>
                        <li>기술 스택: HTML, CSS, JavaScript</li>
                        <li>
                          자료 링크: &nbsp;
                          <span className={styles.links}>
                            <a
                              target="_blank"
                              href="https://ksh200070.github.io/style-practice/"
                            >
                              URL(배포사이트)
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/ksh200070/style-practice"
                            >
                              GitHub(코드 확인용)
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className={`${styles.detail} ${styles.img}`}>
                      <img
                        className={`${styles["mockup-bg"]}`}
                        src={ImgBrowserMockup}
                        alt="thumbnail image"
                      />

                      <span className={styles.title}>당근마켓 클론 사이트</span>
                      <a
                        target="_blank"
                        className={styles.url}
                        href="https://ksh200070.github.io/style-practice/"
                      >
                        https://ksh200070.github.io/style-practice
                      </a>
                      <div className={`${styles["scroll-area"]}`}>
                        <img
                          className={`${styles["img-web"]}`}
                          src={ImgDaangn}
                          alt="thumbnail image"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* project 2 : Diary*/}
            <div className={styles.card}>
              {/* title */}
              <div className={styles.label}>
                <h2>Diary</h2>
                <div className={styles.info}>
                  <span className={styles.date}>
                    개인 프로젝트 / 2024.11 - 2024.12
                  </span>
                </div>
              </div>

              {/* contents */}
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        글 작성, 수정, 삭제, 조회 기능을 포함한 기본적인 블로그
                        서비스입니다. 프론트엔드 개발만 다루면서 구현의 폭이
                        제한된다고 느껴, CRUD API 기능을 포함한 서비스 구축을
                        통해 풀스택 개발 역량을 향상하고자 시작한
                        프로젝트입니다.
                      </div>
                    </div>

                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: Next.js, MongoDB, Vercel</li>
                        <li>Next.js 14 App 라우팅 방식 활용</li>
                        <li>next-auth 라이브러리 사용하여 소셜로그인 구현</li>
                        <li>
                          자료 링크: &nbsp;
                          <span className={styles.links}>
                            <a
                              target="_blank"
                              href="https://diary-theta-orcin.vercel.app"
                            >
                              URL(배포사이트)
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/ksh200070/diary"
                            >
                              GitHub(코드 확인용)
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className={`${styles.detail} ${styles.img}`}>
                      <img
                        className={`${styles["mockup-bg"]}`}
                        src={ImgBrowserMockup}
                        alt="thumbnail image"
                      />

                      <span className={styles.title}>Diary: 블로그</span>
                      <a
                        target="_blank"
                        className={styles.url}
                        href="https://diary-theta-orcin.vercel.app"
                      >
                        https://diary-theta-orcin.vercel.app
                      </a>
                      <div className={`${styles["scroll-area"]}`}>
                        <img
                          className={`${styles["img-web"]}`}
                          src={ImgDiary}
                          alt="thumbnail image"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* project 3 : chatty */}
            <div className={styles.card}>
              {/* title */}
              <div className={styles.label}>
                <h2>Chatty</h2>
                <div className={styles.info}>
                  <span className={styles.date}>
                    4인 팀 프로젝트 / 2024.08 - 2024.10
                  </span>
                </div>
              </div>

              {/* contents */}
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        웹 메신저 서비스로, 워크스페이스 관리와 채널 내 그룹
                        채팅 등 주요 기능을 포함한 프로젝트
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>팀원: PM(1), Front-end(1), Back-end(2) </li>
                        <li>기술 스택: TailwindCSS, TypeScript, React.js </li>
                        <li>
                          참여 내용: api 연동, 로그인 연장, 실시간 채팅,
                          무한스크롤
                        </li>
                        <li>
                          자료 링크: &nbsp;
                          <span className={styles.links}>
                            <a
                              target="_blank "
                              href="https://github.com/project-web-chatty"
                            >
                              GitHub(프로젝트 소개)
                            </a>
                            <a
                              target="_blank "
                              href="https://github.com/project-web-chatty/chatty-web"
                            >
                              GitHub(코드 확인용)
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className={`${styles.detail} ${styles.img} `}>
                      <img
                        className={`${styles["mockup-bg"]}`}
                        src={ImgBrowserMockup}
                        alt="thumbnail image"
                      />

                      <span className={styles.title}>Web Chatty</span>
                      <a target="_blank" className={styles.url} href="-">
                        -
                      </a>
                      <div
                        className={`${styles["scroll-area"]} ${styles["chatty-imgs"]}`}
                      >
                        {chattyImgs.map((src, i) => (
                          <img
                            className={`${styles["img-web"]}`}
                            src={src}
                            alt={`thumbnail image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* project 4: christmas q25 */}
            <div className={`${styles.card} ${styles["margin-top"]}`}>
              {/* title */}
              <div className={styles.label}>
                <h2>ChristmasQ25</h2>
                <div className={styles.info}>
                  <span className={styles.date}>
                    7인 팀 프로젝트 / 2022.07 - 2022.12
                  </span>
                </div>
              </div>

              {/* contents */}
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        12 월 1 일부터 25 일간 매일 자정 오픈되는 질문에, 답변을
                        작성하며 한 해를 돌아볼 수 있도록 도와주는 웹
                        애플리케이션 서비스
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>프론트엔드 개발 참여</li>
                        <li>기술 스택: HTML, CSS, JavaScript, Vue.js</li>
                        <li>
                          자료 링크: &nbsp;
                          <span className={styles.links}>
                            <a
                              target="_blank"
                              href="https://waterjin.notion.site/CHRISTMAS-Q25-1-25-a3aeb3ca65814721bc5c4e040219b18a"
                            >
                              URL(노션 소개)
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/ksh200070/11.18"
                            >
                              GitHub(코드)
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className={`${styles.detail} ${styles.img}`}>
                      <div
                        className={`${styles["scroll-area"]} ${styles["horizon"]}`}
                      >
                        {christmasImgs.map((src, i) => (
                          <img
                            key={i}
                            className={`${styles["img-mobile"]}`}
                            src={src}
                            alt={`thumbnail image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        ㄴ{/* Study Experience */}
        <div className={`${styles.study} ${styles.experience}`}>
          <h1>Study Experience</h1>
          <div className={styles.group}>
            <div className={styles.card}>
              <div className={styles.label}>
                <h2>개발 IT 동아리</h2>
                <div className={styles.info}>
                  <span className={styles.date}>2022.03 - 2023.01</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>(2기) 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2022.03 - 2022.05</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        사전 강의에 따른 수행 과제를 발표하고 팀원들과 피드백을
                        통해 토의를 진행하였습니다. 개별적으로 리디북스 웹사이트
                        클론코딩 실습을 하였습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: HTML, CSS, JavaScript</li>
                      </ul>
                    </div>
                  </section>
                </div>

                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>(3기) 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2022.09 - 2022.11</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        사전 강의에 따른 수행 과제를 발표하고 팀원들과 피드백을
                        통해 토의를 진행하였습니다. 스터디장으로써 팀원 모두 잘
                        마무리할 수 있도록 응원과 격려를 통해 스터디를
                        주도하였습니다. 배달의 민족 앱서비스를 참고하며 관계형
                        데이터베이스 구축 및 API 작성 실습을 진행하였습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: Node.js</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <hr />

            {/* 그 외 */}
            <div className={styles.card}>
              <div className={styles.label}>
                <h2>그 외</h2>
                <div className={styles.info}>
                  <span className={styles.date}>2024.03 - 현재</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2> &lt;모던 자바스크립트 딥다이브&gt; 도서 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2024.03 - 2024.06</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        매주 주어진 주제에 대해 발표하며 토론하는 방식으로
                        진행하였습니다. <br /> 스터디를 통해 자바스크립트의 핵심
                        원리와 고급 기능들을 이해하고 복잡한 개념을 쉽게 설명할
                        수 있는 힘을 기르고자 하였습니다.
                      </div>
                    </div>
                  </section>
                </div>

                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2> &lt;쉽게 배우는 타입스크립트&gt; 도서 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2024.07 - 2024.08</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        타입스크립트의 세부적인 기능을 이해하고 적절한 쓰임을
                        위해 참여하였고, 매주 주어진 주제에 대해 발표하며
                        토론하는 방식으로 진행하였습니다.
                      </div>
                    </div>
                  </section>
                </div>

                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>알고리즘 인증 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2024.08 - 현재</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        Discord를 활용하여 매일 알고리즘 문제풀이를 인증합니다.
                        React를 활용한 프론트엔드 개발에만 치우치는 것을
                        방지하고 폭넓은 컴퓨팅적 사고를 기르고자 참여하고
                        있습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <ul className={styles.description}>
                        <li>기술 스택: JavaScript</li>
                        <li>
                          자료 링크: &nbsp;
                          <span className={styles.links}>
                            <a
                              target="_blank"
                              href="https://github.com/ksh200070/Programmers"
                            >
                              GitHub(코드 확인)
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
