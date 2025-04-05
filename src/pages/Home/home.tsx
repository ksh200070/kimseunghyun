import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import Tooltip from "@component/Tooltip/Tooltip";
import IconHome from "@assets/icon/icon_home.png";
import IconDownArrow from "@assets/icon/icon_down_arrow_white.png";
import IconInfo from "@assets/icon/icon_info_white.png";
import PaintBoardComponent from "@component/PaintBoard/PaintBoard";

export default function Home() {
  const navigate = useNavigate();

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
            안녕하세요.
            <br />웹 프론트엔드 개발자 &nbsp;
            <strong>김승현</strong>입니다.
            <br />
            UX/UI를 고려한 사용성 향상에 관심이 많고 <br />
            어제보다 오늘 더 성장하기 위해 열심히 달려나가고 있습니다.
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
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        HTML, SCSS, TypeScript / Angular.js
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[퇴사 사유]</div>
                      <div className={styles.description}>학업 </div>
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
                      {/* <div className={styles.name}>[활동 내용]</div> */}
                      <div className={styles.description}>
                        사내에서 사용될 예정인 Admin 사이트를 구축하였고 실제
                        운영사이트의 유지보수를 담당하였습니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        HTML, SCSS, TypeScript / Angular.js
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[퇴사 사유]</div>
                      <div className={styles.description}>기간 만료</div>
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
            {/* 연합 IT 동아리 */}
            <div className={styles.card}>
              <div className={styles.label}>
                <h2>연합 IT 동아리</h2>
                <div className={styles.info}>
                  <span className={styles.date}>2022.03 - 2023.01</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>(팀) ChristmasQ25</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2022.07 - 2022.12</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.name}>[프로젝트 개요]</div>
                      <div className={styles.description}>
                        어드벤트 캘린더의 웹사이트 버전으로, 12월 1일부터
                        25일까지 매일 오픈되는 질문에 답변을 작성하며 한 해를
                        돌아볼 수 있도록 합니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[팀 구성]</div>
                      <div className={styles.description}>
                        PM(1), Front-end(4), Back-end(2)
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        HTML, CSS, JavaScript / Vue.js
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <hr />

            {/* 그 외 */}
            <div className={styles.card}>
              <div className={styles.label}>
                <h2>
                  그 외
                  <Tooltip
                    position="right"
                    message="소속되지않고 직접 외부프로젝트를 찾아보고 참여한 프로젝트들입니다."
                  >
                    <img
                      className={`${styles["icon-info"]}`}
                      src={IconInfo}
                      alt=""
                    />
                  </Tooltip>
                </h2>
                <div className={styles.info}>
                  <span className={styles.date}></span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>(팀) Chatty</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2024.08 - 2024.10</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.name}>[프로젝트 개요]</div>
                      <div className={styles.description}>
                        웹소켓 및 메시지 브로커 기술 스택을 활용하여 슬랙과
                        디스코드 등의 웹 메신저 기능을 모방한 웹 서비스를
                        만들고자 시작한 프로젝트입니다. 워크 스페이스 생성 및
                        관리, 채널 생성, 채널 내 그룹 채팅, 프로필 관리 등의
                        서비스 구현을 본 프로젝트의 주 목표로 하였습니다
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[팀 구성]</div>
                      <div className={styles.description}>
                        PM(1), Front-end(1), Back-end(2)
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        TypeScript / React.js / TailwindCSS
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[참여 내용]</div>
                      <ul className={styles.description}>
                        <li>axios를 활용한 API 연동</li>
                        <li>refreshToken을 통해 로그인 연장 구현</li>
                        <li>socket을 활용하여 실시간 채팅 구현</li>
                        <li>무한스크롤 및 마지막 읽은 요소 표시 기능 추가</li>
                      </ul>
                    </div>
                  </section>
                </div>

                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>(개인) Blog</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2024.10 - 2024.11</span>
                      <span className={styles.role}> | Frontend Developer</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.name}>[프로젝트 개요]</div>
                      <div className={styles.description}>
                        Next.js에 대해 학습하고 Frontend부터 Backend까지 풀스택
                        개발에 대한 역량을 기르고자 진행한 프로젝트입니다.
                        회원가입 및 (소셜)로그인, 글 작성 및 관리, 마이페이지
                        등의 기능을 제공하는 블로그 서비스입니다.
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        Next.js / MongoDB / Vercel(배포)
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.name}>[참여 내용]</div>
                      <ul className={styles.description}>
                        <li>Next.js 14 App 라우팅 방식 활용</li>
                        <li>next-auth 라이브러리 사용하여 소셜로그인 구현</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Experience */}
        <div className={`${styles.study} ${styles.experience}`}>
          <h1>Study Experience</h1>
          <div className={styles.group}>
            <div className={styles.card}>
              <div className={styles.label}>
                <h2>연합 IT 동아리</h2>
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
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>
                        HTML, CSS, JavaScript
                      </div>
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
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>Node.js</div>
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
                        <ul>
                          <li>
                            매주 주어진 주제에 대해 발표하며 토론하는 방식으로
                            진행하였습니다.
                          </li>
                          <li>
                            스터디를 통해 자바스크립트의 핵심 원리와 고급
                            기능들을 이해하고 복잡한 개념을 쉽게 설명할 수 있는
                            힘을 기르고자 하였습니다.
                          </li>
                        </ul>
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
                        <ul>
                          <li>
                            매주 주어진 주제에 대해 발표하며 토론하는 방식으로
                            진행하였습니다.
                          </li>
                          <li>
                            타입스크립트의 세부적인 기능을 이해하고 적절한
                            쓰임을 위해 참여하였습니다.
                          </li>
                        </ul>
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
                      <div className={styles.name}>[기술 스택]</div>
                      <div className={styles.description}>JavaScript</div>
                    </div>
                  </section>
                </div>
                <div className={styles.content}>
                  <section className={styles.label}>
                    <h2>&lt;예제로 배우는 시스템 디자인&gt; 도서 스터디</h2>
                    <div className={styles.info}>
                      <span className={styles.date}>2025.01 - 현재</span>
                    </div>
                  </section>
                  <section className={styles.details}>
                    <div className={styles.detail}>
                      <div className={styles.description}>
                        소프트웨어 설계의 다양한 원칙과 기법을 배우고, 이를
                        실무에 적용하는 것을 목표로 합니다. 매주 정해진 범위를
                        읽고, 학습한 내용을 토론하며 기록으로 남깁니다.
                      </div>
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
