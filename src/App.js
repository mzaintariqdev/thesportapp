import { ThemeProvider } from "styled-components";
import Layout from "./Layout";

import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
