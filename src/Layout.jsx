import "./App.css";

const Layout = ({ Sidebar, Main, MainNavigation }) => {
  return (
    <>
      <header class="main-menu">
        <MainNavigation />
      </header>
      <div class="container">
        <nav class="sidebar">
          <Sidebar />
        </nav>
        <main class="content">
          <Main />
        </main>
      </div>
    </>
  );
};

export default Layout;
