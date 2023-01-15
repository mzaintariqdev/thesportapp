import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "../../redux/store";
import theme from "../../Theme";
import Layout from "../Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
