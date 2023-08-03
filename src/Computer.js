import { FullPage, Slide } from "react-full-page";
function Computer({ open, openMenu, closeMenu }) {
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
        }}
      >
        <div className="flex" style={{ paddingLeft: 50 }}>
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
              }}
            >
              <div>
                <img src='/scroll_down.png' />
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
                  Hacking & Security
                </div>
                <div
                  style={{
                    fontSize: 20,
                    lineHeight: 2,
                    marginLeft: 28,
                    paddingRight: 15,
                  }}
                >
                  When I was a high school student, I became interested in
                  hacking and security technologies after be awarded the school
                  hacking defense competition, and I participated in various
                  hacking competitions while learning various hacking
                  technologies. In the end, I participated in the DEF CON 22
                  CTF, the world's authoritative hacking defense competition
                  held every summer in Las Vegas, USA, with the HackingForChiMac
                  team, and made it to the finals.
                  <a
                    style={{ display: "block", marginTop: 10, color: 'blue' }}
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
              }}
            >
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
                  Development & Network
                </div>
                <div style={{ fontSize: 20, lineHeight: 2, paddingRight: 15 }}>
                  Wargame sites are websites designed to improve hacking skills
                  and information security competencies, offering a variety of
                  hacking challenges to practice your hacking skills without
                  harming real systems. As an operator of the international
                  wargame site Hack-Me, I was in charge of posting challenges,
                  web development and server management, and I've organized and
                  hosted security conferences.
                  <a
                    style={{ display: "block", marginTop: 10, color: 'blue' }}
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
