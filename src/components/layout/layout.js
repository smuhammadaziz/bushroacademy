const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container"></div>
        <nav>
          <ul></ul>
        </nav>
      </header>

      {children}

      <footer></footer>
    </>
  );
};

export default Layout;
