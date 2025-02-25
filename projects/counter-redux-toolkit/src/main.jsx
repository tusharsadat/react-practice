import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // Import the Provider component
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap the App component with the Provider component */}
      <App />
    </Provider>{" "}
    {/* Close the Provider component */}
  </StrictMode>
);
