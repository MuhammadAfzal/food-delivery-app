import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestuarantsList from "./components/RestuarantsList";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestuarantsList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);