import React from "react";
import Home from "pages/Home";
import GlobalStyles from "styles/globalStyles";

import RenderRoutes from "services/router/RenderRoutes";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <RenderRoutes />
      </div>
    </>
  );
}

export default App;
