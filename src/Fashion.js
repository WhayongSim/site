import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import YouTube from 'react-youtube';
import { FullPage, Slide } from 'react-full-page';

function FashionMain({ open, openMenu, closeMenu }) {
  return (
    <div>
      <div className="header">
        <div className="flex">
          <img src="/main/fashion.png" alt="" width={50} />
          <span>Fashion</span>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 30px',
        }}
      >
        <FullPage>
         <Slide>
             <Link to="/fashion/menswear" style={{ width: '50%', textAlign: 'center' }}>
             <YouTube
                videoId={"f2GEpw8fxjs"}
                opts={{
                  width: "942",
                  height: "530",
                  playerVars: {
                    autoplay: 1, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                onEnd={(e)=>{e.target.stopVideo(0);}}      
              />
            </Link>
          </Slide>
          <Slide>
            <Link to="/fashion/jewerly" style={{ width: '50%', textAlign: 'center' }}>
              <img src="/fashion/fashion-jewerly.jpg" width="80%" />
            </Link>
          </Slide>
        </FullPage>
      </div>
    </div>
  );
}

function FashionMenswear({ open, openMenu, closeMenu }) {
const IMGLIST = ['/fashion/menswear/01.jpg', '/fashion/menswear/02.jpg', '/fashion/menswear/03.jpg',
  '/fashion/menswear/04.jpg', '/fashion/menswear/05.jpg', '/fashion/menswear/06.jpg',
  '/fashion/menswear/07.jpg', '/fashion/menswear/08.jpg', '/fashion/menswear/09.jpg',
  '/fashion/menswear/10.jpg', '/fashion/menswear/11.jpg', '/fashion/menswear/12.jpg', '/fashion/menswear/13.jpg',
  '/fashion/menswear/14.jpg', '/fashion/menswear/15.jpg', '/fashion/menswear/16.jpg', '/fashion/menswear/17.jpg',
  '/fashion/menswear/18.jpg'
];
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div className="header">
        <div className="flex">
          <img src="/main/fashion.png" alt="" width={50} />
          <span>Fashion - Menswear</span>
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
      <div className="slider">
        <div className="fimageWrap">
          {IMGLIST.map((it)=>(
            <div className="fimage">
              <img src={it} alt="" />
            </div>
          ))}  
        </div>
      </div>
    </div>
  );
}

function FashionJewely({ open, openMenu, closeMenu }) {

  const IMGLIST = ['/fashion/jewerly/01.jpg', '/fashion/jewerly/02.jpg', '/fashion/jewerly/03.jpg',
  '/fashion/jewerly/04.jpg', '/fashion/jewerly/05.jpg', '/fashion/jewerly/06.jpg',
  '/fashion/jewerly/07.jpg', '/fashion/jewerly/08.jpg', '/fashion/jewerly/09.jpg',
  '/fashion/jewerly/10.jpg', '/fashion/jewerly/11.jpg', '/fashion/jewerly/12.jpg', '/fashion/jewerly/13.jpg',
  '/fashion/jewerly/14.jpg', '/fashion/jewerly/15.jpg', '/fashion/jewerly/16.jpg', '/fashion/jewerly/17.jpg',
  '/fashion/jewerly/18.jpg'
];
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div className="header">
        <div className="flex">
          <img src="/main/fashion.png" alt="" width={50} />
          <span>Fashion - Jewelry</span>
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
      <div className="slider">
        <div className="fimageWrap">
          {IMGLIST.map((it)=>(
            <div className="fimage">
              <img src={it} alt="" />
            </div>
          ))}  
        </div>
      </div>
    </div>
  );
}

function Fashion({ open, openMenu, closeMenu }) {
  return (
    <div className="pageRoot">
      <div>
        <Routes>
          <Route
            path="/"
            element={<FashionMain open={open} openMenu={openMenu} closeMenu={closeMenu} />}
          ></Route>
          <Route
            path="menswear"
            element={<FashionMenswear open={open} openMenu={openMenu} closeMenu={closeMenu} />}
          ></Route>
          <Route
            path="jewerly"
            element={<FashionJewely open={open} openMenu={openMenu} closeMenu={closeMenu} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Fashion;
