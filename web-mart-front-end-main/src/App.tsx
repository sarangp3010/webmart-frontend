import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import store, { persistor } from "./store/store";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} limit={1} />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
