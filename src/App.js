import "./App.css";
import Intro from "./componest/Intro";
import NavigationBar from "./componest/Navbar";
import Trending from "./componest/Trending"
import SuperHero from "./componest/Superhiro";
import "./style/landingPage.css";

function App() {
  return (
    <di>
      {/* Intro Section */}
      <div className="myBg">
        <NavigationBar />
        <Intro />      
      </div>
      {/* End of intro */}      

      {/* Trending Section */}
      <div className="trending">
        <Trending/>
        </div>
        {/* End of Trending */}
        <div className="superhero">
        <SuperHero />
      </div>
    </di>
  );
}

export default App;
