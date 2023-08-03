import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import YouTube from "react-youtube";
import { FullPage, Slide } from "react-full-page";
import ImageViewer from "react-simple-image-viewer";

function FashionMain({ open, openMenu, closeMenu }) {
  return (
    <div>
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
        <div className="flex" style={{ paddingLeft: 50 }}>
          <img src="/main/fashion.png" alt="" width={50} />
          <span>Fashion</span>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 30px",
          paddingTop: 140,
        }}
      >
        <FullPage>
          <Slide>
            <div style={{ height: "100%" }}>
              <Link
                to="/fashion/menswear"
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "block",
                  width: "950px",
                  height: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src="/slovenmode-logo.jpg"
                  width="100%"
                  style={{ maxWidth: 480 }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-95px",
                    zIndex: "0",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <img width={66} src="/scroll_down.png" />
                </div>
              </Link>
            </div>
          </Slide>
          <Slide>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-58px",
                  zIndex: "0",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <img width={66} src="/scroll_up.png" />
              </div>
              <Link
                to="/fashion/jewerly"
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "block",
                  width: "950px",
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/ezgif-2-44428726c99a.gif"
                  width="100%"
                  style={{ maxWidth: 480 }}
                />
              </Link>
            </div>
          </Slide>
        </FullPage>
      </div>
    </div>
  );
}

function FashionMenswear({ open, openMenu, closeMenu }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const IMGLIST = [
    "/fashion/menswear/01.jpg",
    "/fashion/menswear/02.jpg",
    "/fashion/menswear/03.jpg",
    "/fashion/menswear/04.jpg",
    "/fashion/menswear/05.jpg",
    "/fashion/menswear/06.jpg",
    "/fashion/menswear/07.jpg",
    "/fashion/menswear/08.jpg",
    "/fashion/menswear/09.jpg",
    "/fashion/menswear/10.jpg",
    "/fashion/menswear/11.jpg",
    "/fashion/menswear/12.jpg",
    "/fashion/menswear/13.jpg",
    "/fashion/menswear/14.jpg",
    "/fashion/menswear/15.jpg",
    "/fashion/menswear/16.jpg",
    "/fashion/menswear/17.jpg",
    "/fashion/menswear/18.jpg",
    "/fashion/menswear/019.JPG",
    "/fashion/menswear/020.JPG",
    "/fashion/menswear/021.JPG",
    "/fashion/menswear/022.JPG",
    "/fashion/menswear/023.JPG",
    "/fashion/menswear/024.JPG",
    "/fashion/menswear/025.JPG",
    "/fashion/menswear/026.JPG",
    "/fashion/menswear/027.JPG",
    "/fashion/menswear/028.JPG",
    "/fashion/menswear/029.JPG",
    "/fashion/menswear/030.JPG",
    "/fashion/menswear/031.JPG",
    "/fashion/menswear/032.JPG",
    "/fashion/menswear/033.JPG",
    "/fashion/menswear/034.jpg",
    "/fashion/menswear/035.JPG",
    "/fashion/menswear/036.JPG",
    "/fashion/menswear/037.jpg",
    "/fashion/menswear/038.JPG",
    "/fashion/menswear/039.JPG",
    "/fashion/menswear/040.jpg",
    "/fashion/menswear/041.JPG",
    "/fashion/menswear/042.JPG",
    "/fashion/menswear/043.JPG",
    "/fashion/menswear/044.JPG",
    "/fashion/menswear/045.JPG",
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
        width: "100%",
      }}
    >
      <div
        className="header"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          paddingLeft: "0px",
          right: "0px",
          zIndex: "10",
        }}
      >
        <div className="flex" style={{ paddingLeft: 50 }}>
          <img src="/main/fashion.png" alt="" width={50} />
          <span>Fashion - Menswear</span>
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
      <div className="slider" style={{ marginTop: 100 }}>
        <div className="fimageWrap">
          {IMGLIST.map((it, index) => (
            <div className="fimage">
              <img
                src={it}
                alt=""
                onClick={() => openImageViewer(index)}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={IMGLIST}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

function FashionJewely({ open, openMenu, closeMenu }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const IMGLIST = [
    "/fashion/jewerly/01.jpg",
    "/fashion/jewerly/02.jpg",
    "/fashion/jewerly/03.jpg",
    "/fashion/jewerly/04.jpg",
    "/fashion/jewerly/05.jpg",
    "/fashion/jewerly/06.jpg",
    "/fashion/jewerly/07.jpg",
    "/fashion/jewerly/08.jpg",
    "/fashion/jewerly/09.jpg",
    "/fashion/jewerly/10.jpg",
    "/fashion/jewerly/11.jpg",
    "/fashion/jewerly/12.jpg",
    "/fashion/jewerly/13.jpg",
    "/fashion/jewerly/14.jpg",
    "/fashion/jewerly/15.jpg",
    "/fashion/jewerly/16.jpg",
    "/fashion/jewerly/17.jpg",
    "/fashion/jewerly/18.jpg",
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
        width: "100%",
      }}
    >
      <div
        className="header"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          paddingLeft: "0px",
          right: "0px",
          zIndex: "10",
        }}
      >
        <div className="flex" style={{ paddingLeft: 50 }}>
          <img src="/jewelry.png" alt="" width={50} />
          <span>Fashion - Jewelry</span>
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
      <div className="slider" style={{ marginTop: 100 }}>
        <div className="fimageWrap">
          {IMGLIST.map((it, index) => (
            <div className="fimage">
              <img
                src={it}
                alt=""
                onClick={() => openImageViewer(index)}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={IMGLIST}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
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
            element={
              <FashionMain
                open={open}
                openMenu={openMenu}
                closeMenu={closeMenu}
              />
            }
          ></Route>
          <Route
            path="menswear"
            element={
              <FashionMenswear
                open={open}
                openMenu={openMenu}
                closeMenu={closeMenu}
              />
            }
          ></Route>
          <Route
            path="jewerly"
            element={
              <FashionJewely
                open={open}
                openMenu={openMenu}
                closeMenu={closeMenu}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Fashion;
