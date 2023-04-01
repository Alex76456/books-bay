import "./App.css";

import AppLoader from "./components/AppLoader";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Routes from "./Routes";

function App() {
  return (
    <AppLoader>
      <div className="md:container mx-auto">
        <Menu />
        <div className="min-h-[80vh]">{<Routes />}</div>
        <Footer />
      </div>
    </AppLoader>
  );
}

export default App;
