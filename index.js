import React from "react";
import ReactDOM from "react-dom/client";
import BgTabs from "./src/BgTabs";
import StoredTabs from "./src/storedTabs";

const AppLayout = () => {
  return (
    <div className="p-3">
      <div>
        <h2 className="text-3xl">Tab List</h2>
        <p className="text-base">Manage your tabs</p>
      </div>
      <div className="">
        <BgTabs />
        <StoredTabs />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
