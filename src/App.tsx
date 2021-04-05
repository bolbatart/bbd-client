import React from "react";
import Home from "pages/Home";
import GlobalStyles from "styles/globalStyles";

import RenderRoutes from "services/router/RenderRoutes";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Layout />
      </div>
    </>
  );
}

export default App;
