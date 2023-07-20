import { Link } from 'react-router-dom';

function Main() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }} className="vertical-center">
      <div>
        <img src="/main/me.jpg" alt="" style={{ height: '550px' }} />
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
      >
        <Link to="/computer">
          <img src="/main/computer.png" alt="" width={90} />
          <div style={{ fontWeight: 'bold', fontSize: 23 }}>Computer</div>
        </Link>
        <Link to="/fashion" style={{ margin: '0px 100px' }}>
          <img src="/main/fashion.png" alt="" width={90} />
          <div style={{ fontWeight: 'bold', fontSize: 23 }}>Fashion</div>
        </Link>
        <Link to="/magazine">
          <img src="/main/magazine.png" alt="" width={90} />
          <div style={{ fontWeight: 'bold', fontSize: 23 }}>Magazine</div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
