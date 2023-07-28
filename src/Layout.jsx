import "./App.css";
import Main from "./Main";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

const Layout = () => {
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
