const Home = () => {
  return (
    <div style={{ padding: '2rem', color: '#0f172a', background: '#ffffff' }}>
      <h1 style={{ color: '#1e3a8a' }}>Home</h1>

      <p style={{ color: '#334155', lineHeight: '1.6' }}>
        Welcome to the Home page! This is a simple React application using React Router
        to navigate between different pages like Home, About, and Contact.
      </p>

      <p style={{ color: '#334155', lineHeight: '1.6' }}>
        You can explore the navigation bar above to switch between pages. This layout
        demonstrates a reusable structure with a header, navigation links, and dynamic
        content rendering using <b>Outlet</b>.
      </p>
    </div>
  );
};

export default Home;