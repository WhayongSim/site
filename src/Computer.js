import { FullPage, Slide } from "react-full-page";
function Computer({ open, openMenu, closeMenu, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="pageRoot">
      <div
        className="header"
        style={{
          position: "fixed",
          top: "0px",
          left: "0",
          width: "100%",
          paddingLeft: "0px",
          right: "0",
          zIndex: 10,
        }}
      >
        <div
          className="flex"
          style={{ paddingLeft: 50, cursor: "pointer" }}
          onClick={scrollToTop}
        >
          <img src="/main/computer.png" alt="" width={50} />
          <span>Computer</span>
        </div>
        <div className="menuRoot">
          {open && (
            <div
              className="menWrap"
              style={{ cursor: "pointer", background: "#ddd" }}
              onClick={closeMenu}
            >
              <span>Menu</span>
              <img
                src="/menu/menu-open.png"
                alt=""
                width={50}
                style={{ marginLeft: 15 }}
              />
            </div>
          )}
          {!open && (
            <div
              className="menWrap"
              style={{ cursor: "pointer" }}
              onClick={openMenu}
            >
              <span>Menu</span>
              <img
                src="/menu/menu-close.png"
                alt=""
                width={50}
                style={{ marginLeft: 15 }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="innerRoot" style={{ paddingTop: 140 }}>
        <FullPage>
          <Slide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 30px",
                height: "70%",
                position: "relative",
              }}
            >
              <div
                style={{ position: "absolute", bottom: "-75px", zIndex: "0" }}
              >
                <img width={66} src="/scroll_down.png" />
              </div>
              <div>
                <a
                  href="https://www.boannews.com/media/view.asp?idx=42582&kind=4"
                  target="_blank"
                >
                  <img
                    className="c1"
                    height={300}
                    src="/computer/computer-hacking.png"
                    alt=""
                  />
                </a>
              </div>
              <div style={{ marginLeft: 10 }}>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginBottom: 15,
                    marginLeft: 28,
                  }}
                >
                  {lang === "en" ? (
                    <span>Hacking & Security</span>
                  ) : (
                    <span>해킹 & 보안</span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    lineHeight: 2,
                    marginLeft: 28,
                    paddingRight: 40,
                  }}
                >
                  {lang === "en" && (
                    <div>
                      When I was a high school student, I became interested in
                      hacking and security technologies after be awarded the
                      school hacking defense competition, and I participated in
                      various hacking competitions while learning various
                      hacking technologies. In the end, I participated in the
                      DEF CON 22 CTF, the world's authoritative hacking defense
                      competition held every summer in Las Vegas, USA, with the
                      HackingForChiMac team, and made it to the finals.
                    </div>
                  )}

                  {lang === "ko" && (
                    <div>
                      고등학생 때 교내 해킹 방어 대회 입상을 계기로 해킹과 보안
                      기술에 흥미를 갖게 되어, 다양한 해킹 기술을 익히기 위해
                      각종 해킹 대회와 보안 콘퍼런스에 참가했습니다. 결국, 매년
                      여름 미국 라스베이거스에서 진행되는 세계 최대의 해킹 방어
                      대회 DEF CON 22 CTF에 HackingForChiMac 팀으로 참가하여
                      본선에 진출하는 쾌거를 이뤘습니다.
                    </div>
                  )}

                  <a
                    style={{ display: "block", marginTop: 10, color: "blue" }}
                    href="https://www.boannews.com/media/view.asp?idx=42582&kind=4"
                    target="_blank"
                  >
                    Article URL
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 30px",
                height: "70%",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: "-55px" }}>
                <img width={66} src="/scroll_up.png" />
              </div>
              <div>
                <a
                  href="https://www.boannews.com/media/view.asp?idx=39825"
                  target="_blank"
                >
                  <img
                    className="c1"
                    height={300}
                    src="/computer/computer-development.png"
                    alt=""
                  />
                </a>
              </div>
              <div style={{ marginLeft: 10 }}>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  {lang === "en" ? (
                    <span>Development & Networky</span>
                  ) : (
                    <span>개발 & 네트워크</span>
                  )}
                </div>
                <div style={{ fontSize: 20, lineHeight: 2, paddingRight: 40 }}>
                  {lang === "en" && (
                    <div>
                      Wargame sites are websites designed to improve hacking
                      skills and information security competencies, offering a
                      variety of hacking challenges to practice your hacking
                      skills without harming real systems. As an operator of the
                      international wargame site Hack-Me, I was in charge of
                      posting challenges, web development and server management.
                      After attending the Black Hat conference in Las Vegas,
                      USA, I realized the importance of community and I've
                      organized and hosted security conferences.
                    </div>
                  )}

                  {lang === "ko" && (
                    <div>
                      워게임 사이트는 해킹 기술과 정보 보안 역량을 향상하기 위해
                      설계된 웹사이트로, 다양한 해킹 과제를 제공하여 실제
                      시스템에 피해를 주지 않고 해킹 기술을 연습할 수 있습니다.
                      국제 워게임 사이트 핵미의 운영자로서 문제 출제와 웹 개발
                      및 서버 관리를 담당했습니다. 이후, 미국 라스베이거스에서
                      진행된 Black Hat 콘퍼런스를 경험하고, 커뮤니티의 중요성을
                      깨닫게 되어 보안 콘퍼런스를 직접 개최했습니다.
                    </div>
                  )}
                  <a
                    style={{ display: "block", marginTop: 10, color: "blue" }}
                    href="https://www.boannews.com/media/view.asp?idx=39825"
                    target="_blank"
                  >
                    Article URL
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </FullPage>
      </div>
    </div>
  );
}

export default Computer;
