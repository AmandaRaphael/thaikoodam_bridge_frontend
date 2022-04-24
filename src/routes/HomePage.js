import backgroundImage from "../assets/thaikkudam.jpg";
import LogoLink from "../components/navigation/LogoLink";
import NavBar from "../components/navigation/NavBar";
const HomePage = () => {

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <nav className="homeNav">
        <main>
          <LogoLink/>
          <div className="typewriter">
            <h1>Thaikkudam Bridge</h1>
          </div>
        </main>
        <NavBar/>
      </nav>
      {/* <Outlet /> */}
    </main>
  );
};

export default HomePage;
