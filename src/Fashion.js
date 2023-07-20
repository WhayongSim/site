import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
        <Link to="/fashion/menswear" style={{ width: '50%', textAlign: 'center' }}>
          <img src="/fashion/fashion-menswear.jpg" width="80%" />
        </Link>
        <Link to="/fashion/jewerly" style={{ width: '50%', textAlign: 'center' }}>
          <img src="/fashion/fashion-jewerly.jpg" width="80%" />
        </Link>
      </div>
    </div>
  );
}

function FashionMenswear({ open, openMenu, closeMenu }) {

  const IMGLIST = ['/fashion/menswear/01.jpg', '/fashion/menswear/02.jpg', '/fashion/menswear/03.jpg', '/fashion/menswear/04.jpg', '/fashion/menswear/05.jpg', '/fashion/menswear/06.jpg'];
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
          {data.map((it)=>(
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
      <div className="slider slider2">
        <Slider {...settings}>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/01.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/02.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/03.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/04.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/05.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/06.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/07.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/08.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/09.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/10.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/11.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/12.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/13.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/14.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/15.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/16.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/17.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="center">
              <img src="/fashion/jewerly/18.jpg" alt="" />
            </div>
          </div>
        </Slider>
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
