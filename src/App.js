import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Computer from "./Computer";
import Fashion from "./Fashion";
import Magazine from "./Magazine";
import mgData from "./mg.json";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <div>
        {open && (
          <div className="sideMenu" onClick={() => setOpen(false)}>
            <div>
              <Link to="/">
                <img src="/home.png" alt="" width="50" />
              </Link>
            </div>
            <div>
              <Link to="/info">
                <img src="/info.png" alt="" width="50" />
              </Link>
            </div>
            <div>
              <Link to="/computer">
                <img src="/main/computer.png" alt="" width="50" />
              </Link>
            </div>
            <div>
              <Link to="/fashion">
                <img src="/main/fashion.png" alt="" width="50" />
              </Link>
            </div>
            <div>
              <Link to="/magazine">
                <img src="/main/magazine.png" alt="" width="50" />
              </Link>
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
