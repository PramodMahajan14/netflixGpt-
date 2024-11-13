import { Provider } from "react-redux";
import "./App.css";

import Body from "./components/Body";

import appStore from "./util/appStore";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
