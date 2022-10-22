import Router from "./Shared/Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme/theme"

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
