import React from "react";
//Components Imports --------------------------------------------------------
import Header from "./components/Header/Header";
import MainView from "./components/MainView/MainView";
//Material-UI-----------------------------------------------------------------
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//Redux-----------------------------------------------------------------
import { Provider } from "react-redux";
import store from "./store";
//Css-----------------------------------------------------------------
import "./App.css";

//Material-Theme-----------------------------------------------------------------
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d4e157",
    },
    secondary: {
      main: "#ef6c00",
    },
  },
});

//Component-----------------------------------------------------------------------
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header></Header>
          <div style={{ marginTop: "60px" }}>
            <MainView></MainView>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
