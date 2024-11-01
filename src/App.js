import { Provider } from "react-redux";
import "./App.css";

import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context/AppProvider";
import appStore from "./util/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        {" "}
        <Body />
      </Provider>
    </>
  );
}

export default App;
