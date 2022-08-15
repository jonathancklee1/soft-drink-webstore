import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#fff",
    secondaryColor: "#E9120B",
    header: "black",
    headerText: "#51E5FF",
    mobileNav: "#000",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
