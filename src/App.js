import { Aside, Extra, Header, Progress, Skills } from "./components";
import "./css/style.css";
import { LANG_LEVEL } from "./contexts/LanguagesContext";
import LanguagesContext from "./contexts/LanguagesContext";


function App() {
  return (
    <LanguagesContext.Provider value={LANG_LEVEL}>
      <div>
        <header>
          <Header />
        </header>
        <Progress />
        <Skills />
        <Aside />
        <Extra />
      </div>
    </LanguagesContext.Provider>
  );
}

export default App;
