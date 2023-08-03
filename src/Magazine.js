function Magazine({ open, openMenu, closeMenu, data }) {
  ///console.log(data);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div className="pageRoot">
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
        <div className="flex" style={{ paddingLeft: 50, cursor: "pointer" }} onClick={scrollToTop}>
          <img src="/main/magazine.png" alt="" width={50} />
          <span>Magazine</span>
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
        className="innerRoot"
        style={{ background: "#ddd", paddingTop: 100 }}
      >
        <div className="cardWrap">
          {data.map((it) => (
            <a className="card" href={it.url} target="_blank">
              <div
                className="cardTop"
                style={{ backgroundImage: `url(${it.image_url})` }}
              ></div>
              <div className="cardBottom">
                <div className="cardTitle">{it.title}</div>
                <div className="cardDate">{it.content}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Magazine;
