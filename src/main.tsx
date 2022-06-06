import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home";
import { TasksProvider } from "./hooks/useTasks";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
