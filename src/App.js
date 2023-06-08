import { Aside, Extra, Header, Projects, Skills } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Projects />
      </div>
      <Skills />
      <Aside />
      <Extra />
    </div>
  );
}

export default App;
