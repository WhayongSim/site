import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Computer from "./Computer";
import Fashion from "./Fashion";
import Magazine from "./Magazine";
import Info from "./Info";
import mgData from "./mg.json";
function App() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <div>
        {open && (
          <div className="sideMenu" onClick={() => setOpen(false)}>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/info">Info</Link>
            </div>
            <div>
              <Link to="/computer">Computer</Link>
            </div>
            <div>
              <Link to="/fashion">Fashion</Link>
            </div>
            <div>
              <Link to="/magazine">Magazine</Link>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: "0",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              <div>
                <img
                  src="/kor.png"
                  width={50}
                  style={{ margin: "0px 20px" }}
                  onClick={() => setLang("ko")}
                />
              </div>
              <div>
                <img
                  src="/usa.png"
                  width={50}
                  style={{ margin: "0px 20px" }}
                  onClick={() => setLang("en")}
                />
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/computer"
            element={
              <Computer
                open={open}
                openMenu={() => setOpen(true)}
                closeMenu={() => setOpen(false)}
                lang={lang}
              />
            }
          />
          <Route
            path="/info"
            element={
              <Info
                lang={lang}
                onKo={() => setLang("ko")}
                onEn={() => setLang("en")}
              />
            }
          />
          <Route
            path="/fashion/*"
            element={
              <Fashion
                open={open}
                openMenu={() => setOpen(true)}
                closeMenu={() => setOpen(false)}
              />
            }
          />
          <Route
            path="/magazine"
            element={
              <Magazine
                open={open}
                openMenu={() => setOpen(true)}
                closeMenu={() => setOpen(false)}
                data={mgData}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
