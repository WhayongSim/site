import { FullPage, Slide } from 'react-full-page';
function Computer({ open, openMenu, closeMenu }) {
  return (
    <div className="pageRoot">
      <div className="header" style={{position: 'fixed',
top: '0px',
left: '0',
width: '100%',
paddingLeft: '0px',
right: '0'}}>
        <div className="flex" style={{paddingLeft: 50}}>
          <img src="/main/computer.png" alt="" width={50} />
          <span>Computer</span>
        </div>
        <div className="menuRoot">
          {open && (
            <div
              className="menWrap"
              style={{ cursor: 'pointer', background: '#ddd' }}
              onClick={closeMenu}
            >
              <span>Menu</span>
              <img src="/menu/menu-open.png" alt="" width={50} style={{ marginLeft: 15 }} />
            </div>
          )}
          {!open && (
            <div className="menWrap" style={{ cursor: 'pointer' }} onClick={openMenu}>
              <span>Menu</span>
              <img src="/menu/menu-close.png" alt="" width={50} style={{ marginLeft: 15 }} />
            </div>
          )}
        </div>
      </div>
      <div className="innerRoot">
        <FullPage>
          <Slide>
          <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 30px',
          }}
        >
          <div>
            <img className="c1" height={500} src="/computer01.png" alt="" />
          </div>
          <div style={{ marginLeft: 10 }}>
            <div style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 15 }}>Development</div>
            <div style={{ fontSize: 20, lineHeight: 2 }}>
              위게임 사이트는 해킹 기술과 정보 보안 역량을 테스트하고 향상 시키기 위해 설계된
              웹사이트로, 다양한 해킹 과제를 제공하여 실제 시스템에 피해를 주지 않고 해킹 기술을
              연습할 수 있습니다. 국제 워게임 사이트 '핵미'에서 문제 출제와 웹 개발 및 서버 유지
              보수를 담당하며 사이트 운영에 참여했습니다.
            </div>
          </div>
        </div>
          </Slide>
          <Slide>
          <div
          style={{
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 30px',
          }}
        >
          <div>
            <img className="c1" height={500} src="/computer02.png" alt="" />
          </div>
          <div style={{ marginLeft: 10 }}>
            <div style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 15, marginLeft: 28 }}>
              Hacking
            </div>
            <div style={{ fontSize: 20, lineHeight: 2, marginLeft: 28 }}>
              고등학생 때 교내 해킹 대회 입상을 계기로 해킹과 보안 기술에 관심을 갖게 되어, 각종
              해킹 방어 대회에 참가했습니다. 그중 해커들의 올림픽이라고 불리는 DEF CON CTF에
              'HackingForChiMac' 팀으로 참가해 본선에 진출하는 쾌거를 이뤘으며, 라스베가스에 직접
              방문하여, 실력이 출중한 해커들과 교류하는 시간을 가졌습니다.
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
