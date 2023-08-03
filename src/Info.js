import { Link } from "react-router-dom";
function Info() {
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
        <div>Whayong Sim</div>
        <div style={{ fontSize: 17 }}>
          <Link style={{marginRight: 30}} to="/">Home</Link>
          <Link style={{marginRight: 30}} to="/computer">Computer</Link>
          <Link style={{marginRight: 30}} to="/fashion">Fashion</Link>
          <Link to="/magazine">Magazine</Link>
        </div>
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
            대한민국 서울을 기반으로 개발자, 디렉터, 에디터로
            활동하고 있습니다. 주로 패션 브랜드의 디렉터로 일하면서 남성복
            디자이너 브랜드 슬로븐 모드(Sloven Mode)의 설립자로서 웹사이트
            개발부터 디렉팅과 마케팅 등의 업무를 맡아 대구패션페어(DFF) 전시회에
            참가하여 패션쇼를 진행했으며, 상하이 패션위크(SHFW) 연계 행사인
            온타임쇼(Ontimeshow) 전시회에 참가하고, 프랑스 파리 마레 지구에
            위치하는 쇼룸 뷔르 스타일(Bureau Seutail)에 옷을 전시했습니다. 또한,
            캐주얼 주얼리 브랜드 휴먼 러브(Human Love)를 설립하여 매 시즌 룩북과
            미디어 콘텐츠를 기획하여 콘셉트와 스타일링을 직접 구현했습니다.
            최근에는 서브컬쳐를 다루는 비즐라 매거진(Visla Magazine)에서
            에디터로 예술, 패션, 라이프 스타일 관련 주제로 기사 원고를 기고하고
            있습니다.
          </div>
          <div style={{ padding: "15px 0px" }}>
            모든 문의 사항은 whayongsim@gmail.com 이메일로 연락주시기 바랍니다.
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
