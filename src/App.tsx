import React /* , { useEffect }  */ from "react";
import "./App.css";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./store/reducers/ActionCreators";

import AppLoader from "./components/AppLoader";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Routes from "./Routes";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    // <div className="App">
    //   {isLoading && <h1>Идет загрузка...</h1>}
    //   {error && <h1>{error}</h1>}
    // </div>
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
