import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-a4kycm52h3jl5qxl.us.auth0.com"
    clientId="lLQ5q36lSvuvsRs2kuFXd9oqBOgqC3TN"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/dashboard/",
      appState: { returnTo: "/dashboard" },
    }}
  >
    <Provider store={store}>
      <App />
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Provider>
  </Auth0Provider>
);
