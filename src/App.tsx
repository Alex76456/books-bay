import "./App.css";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Routes from "./Routes";

function App() {
  return (
    <div className="md:container mx-auto">
      <Menu />
      <div className="min-h-[80vh]">{<Routes />}</div>
      <Footer />
    </div>
  );
}

export default App;
