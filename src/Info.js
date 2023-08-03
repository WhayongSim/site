import { Link } from "react-router-dom";
function Info({ lang }) {
  return (
    <div>
      <div
        className="infoHeader"
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "28px",
          padding: "0px 15px",
          fontWeight: 600,
        }}
      >
        <div>
          <Link to="/">Whayong Sim</Link>
        </div>
        <div style={{ fontSize: 17 }}>
          <Link style={{ marginRight: 30 }} to="/">
            Home
          </Link>
          <Link style={{ marginRight: 30 }} to="/computer">
            Computer
          </Link>
          <Link style={{ marginRight: 30 }} to="/fashion">
            Fashion
          </Link>
          <Link to="/magazine">Magazine</Link>
        </div>
      </div>
      <div
        style={{
          fontWeight: lang === "en" ? 600 : 400,
          textAlign: "right",
          paddingRight: "15px",
          fontSize: "18px",
        }}
      >
        ENG
      </div>
      <div
        style={{
          fontWeight: lang === "ko" ? 600 : 400,
          textAlign: "right",
          paddingRight: "15px",
          fontSize: "18px",
        }}
      >
        KOR
      </div>
      <div
        className="infoContent"
        style={{
          display: "flex",
          paddingTop: "80px",
          paddingLeft: "60px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginRight: "30px",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            lineHeight: "2",
            fontWeight: 600,
          }}
        >
          <div>
            {" "}
            … is an editor, director, developer from Seoul, South Korea. I have
            worked primarily as a director for fashion brands, and as the
            founder of menswear designer brand Sloven Mode, I was responsible
            for everything from website development to directing and marketing,
            exhibiting at Daegu Fashion Fair(DFF) and hosting a fashion show,
            participating in an exhibition at Ontimeshow, a Shanghai Fashion
            Week(SHFW) affiliate event, and displaying clothes at Bureau
            Seutail, a showroom located in the Marais district of Paris, France.
            I also founded and ran the casual jewelry brand Human Love, where I
            conceptualized and styled lookbooks and media content for each
            season. Most recently, I have been working as a freelance editor at
            Visla Magazine, a subculture publication, contributing articles on
            art, fashion, and lifestyle topics.
          </div>
          <div style={{ padding: "15px 0px" }}>
            For all international enquiries please get in touch with me at
            whayongsim@gmail.com
          </div>
          <div>
            <a href="https://instagram.com/systemengineering" target="_black">
              <img src="/instagram.png" width="20px" />
            </a>
          </div>
        </div>
        <div>
          <img src="/profile.jpg" width={"80%"} />
        </div>
      </div>
    </div>
  );
}

export default Info;
