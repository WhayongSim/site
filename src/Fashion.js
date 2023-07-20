import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import YouTube from 'react-youtube';
import { FullPage, Slide } from 'react-full-page';
import ImageViewer from 'react-simple-image-viewer';

function FashionMain({ open, openMenu, closeMenu }) {
  return (
    <div>
      <div className="header" style={{position: 'fixed',
top: '0px',
left: '0',
width: '100%',
paddingLeft: '0px',
right: '0'}}>
        <div className="flex" style={{paddingLeft: 50}}>
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
          paddingTop: 140
        }}
      >
        <FullPage>
         <Slide>
             <Link to="/fashion/menswear" style={{ width: '100%', height: '100%', display: 'block', textAlign: 'center' }}>
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
                onReady={(e)=>{e.target.playVideo();}}
                onEnd={(e)=>{e.target.stopVideo(0);}}      
              />
            </Link>
          </Slide>
          <Slide>
            <Link to="/fashion/jewerly" style={{ width: '100%',
textAlign: 'center',
display: 'block',
width: '950px',
height: '500px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center' }}>
              <img src="/ezgif-2-44428726c99a.gif" width="100%" style={{maxWidth: 480}} />
            </Link>
          </Slide>
        </FullPage>
      </div>
    </div>
  );
}

function FashionMenswear({ open, openMenu, closeMenu }) {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
const IMGLIST = ['/fashion/menswear/01.jpg', '/fashion/menswear/02.jpg', '/fashion/menswear/03.jpg',
  '/fashion/menswear/04.jpg', '/fashion/menswear/05.jpg', '/fashion/menswear/06.jpg',
  '/fashion/menswear/07.jpg', '/fashion/menswear/08.jpg', '/fashion/menswear/09.jpg',
  '/fashion/menswear/10.jpg', '/fashion/menswear/11.jpg', '/fashion/menswear/12.jpg', '/fashion/menswear/13.jpg',
  '/fashion/menswear/14.jpg', '/fashion/menswear/15.jpg', '/fashion/menswear/16.jpg', '/fashion/menswear/17.jpg',
  '/fashion/menswear/18.jpg', '/slovenmode/IMG_6123.JPG',  '/slovenmode/IMG_6124.JPG', '/slovenmode/IMG_6125.JPG',
  '/slovenmode/IMG_6131.JPG', '/slovenmode/IMG_6134.JPG', '/slovenmode/IMG_6135.JPG',
   '/slovenmode/IMG_6148.JPG', '/slovenmode/IMG_6149.JPG', '/slovenmode/IMG_6150.JPG',
   '/slovenmode/IMG_6166.JPG', '/slovenmode/IMG_6167.JPG', '/slovenmode/IMG_6168.JPG',
   '/slovenmode/IMG_6171.JPG', '/slovenmode/IMG_6175.JPG', '/slovenmode/IMG_6176.JPG',
   '/slovenmode/IMG_6182.JPG', '/slovenmode/IMG_6184.JPG', '/slovenmode/IMG_6185.JPG',
   '/slovenmode/IMG_6186.JPG', '/slovenmode/IMG_6187.JPG', '/slovenmode/IMG_6188.JPG',
    '/slovenmode/IMG_6191.JPG', '/slovenmode/IMG_6195.JPG', '/slovenmode/IMG_6196.JPG',
    '/slovenmode/IMG_6199.JPG', '/slovenmode/IMG_6201.JPG', '/slovenmode/IMG_6202.JPG',
    '/slovenmode/IMG_6230.JPG', '/slovenmode/IMG_6231.JPG', '/slovenmode/IMG_6232.JPG',
     '/slovenmode/IMG_6235.JPG', '/slovenmode/IMG_6239.JPG', '/slovenmode/IMG_6240.jpg',
     '/slovenmode/IMG_6245.jpg', '/slovenmode/IMG_6248.JPG', '/slovenmode/IMG_6249.JPG',
      '/slovenmode/IMG_6255.JPG', '/slovenmode/IMG_6257.JPG', '/slovenmode/IMG_6258.JPG',
       '/slovenmode/IMG_6268.jpg', '/slovenmode/IMG_6270.JPG', '/slovenmode/IMG_6271.JPG',
        '/slovenmode/IMG_6279.JPG', '/slovenmode/IMG_6280.JPG', '/slovenmode/IMG_6281.JPG',
];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
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
          {IMGLIST.map((it, index)=>(
            <div className="fimage">
              <img src={it} alt="" onClick={ () => openImageViewer(index)} key={ index } />
            </div>
          ))}  
        </div>
      </div>

            {isViewerOpen && (
        <ImageViewer
          src={ IMGLIST }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}

function FashionJewely({ open, openMenu, closeMenu }) {
 const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const IMGLIST = ['/fashion/jewerly/01.jpg', '/fashion/jewerly/02.jpg', '/fashion/jewerly/03.jpg',
  '/fashion/jewerly/04.jpg', '/fashion/jewerly/05.jpg', '/fashion/jewerly/06.jpg',
  '/fashion/jewerly/07.jpg', '/fashion/jewerly/08.jpg', '/fashion/jewerly/09.jpg',
  '/fashion/jewerly/10.jpg', '/fashion/jewerly/11.jpg', '/fashion/jewerly/12.jpg', '/fashion/jewerly/13.jpg',
  '/fashion/jewerly/14.jpg', '/fashion/jewerly/15.jpg', '/fashion/jewerly/16.jpg', '/fashion/jewerly/17.jpg',
  '/fashion/jewerly/18.jpg'
];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
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
           {IMGLIST.map((it, index)=>(
            <div className="fimage">
              <img src={it} alt="" onClick={ () => openImageViewer(index)} key={ index } />
            </div>
          ))}  
        </div>
      </div>
            {isViewerOpen && (
        <ImageViewer
          src={ IMGLIST }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
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
