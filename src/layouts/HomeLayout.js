import { Link, Outlet } from 'react-router-dom';

// New component (logo image)
function Logo() {
  return (
    <img
      src="https://t3.ftcdn.net/jpg/06/79/30/80/360_F_679308017_A6ddhtKynZVISqzM7P2JKMOyJ79OVhEg.jpg"
      alt="logo"
      style={{ width: '32px', height: '32px' }}
    />
  );
}

function HomeLayout() {
  return (
    <div>
      <header
        style={{
          height: '4rem',
          background: '#eff6ff',
          borderBottom: '1px solid #c7d2fe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem',
          color: '#0f172a',
        }}
      >
        {/* Left side: Logo + Heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Logo />
          <h2 style={{ color: '#1e3a8a', margin: 0 }}>
            Welcome to My Website
          </h2>
        </div>

        {/* Right side: Links */}
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#475569', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: '#475569', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;