import { useEffect, useState } from "react";

const StoredTabs = () => {
  const [storedTabs, setStoredTabs] = useState([]);
  const [updateUI, setUpdateUI] = useState(0);

  useEffect(() => {
    // get all the tabs in the local storage
    const storageTabs = Object.entries(localStorage);
    setStoredTabs(storageTabs);
  }, [updateUI]);

  const openTabs = (tabsData) => {
    const jsonTabsData = JSON.parse(tabsData);
    jsonTabsData.map((tab) => {
      chrome.tabs.create({ url: tab.url });
    });
  };

  const removeList = (listName) => {
    localStorage.removeItem(listName);
    setUpdateUI(updateUI + 1);
  };

  return (
    <div>
      <p className="text-lg">Lists / workspaces</p>
      {storedTabs.map((tab) => (
        <div className="flex gap-2 mb-3">
          <p key={tab[0]} className="text-base">
            {tab[0]}
          </p>
          <button
            className="bg-blue-400 p-2 rounded-md"
            onClick={() => openTabs(tab[1])}
          >
            Open Tabs
          </button>
          <button
            className="bg-red-400 p-2 rounded-md"
            onClick={() => removeList(tab[0])}
          >
            Delete list
          </button>
        </div>
      ))}
    </div>
  );
};

export default StoredTabs;
