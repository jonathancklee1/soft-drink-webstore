// import "./index.css";
import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}

export default App;
