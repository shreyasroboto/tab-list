import React from "react";
import ReactDOM from "react-dom/client";
import BgTabs from "./src/BgTabs";

const AppLayout = () => {
  return (
    <>
      <div className="heading">
        <h2>
          Tab<span>List</span>
        </h2>
        <p className="subtext">Manage your tabs</p>
      </div>
      <div className="app-container">
        <BgTabs />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
