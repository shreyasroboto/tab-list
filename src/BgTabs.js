import { useEffect, useState } from "react";

const BgTabs = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const queryInfo = { currentWindow: true };

    chrome.tabs.query(queryInfo, (result) => {
      setTabs(result);
    });
  }, []);

  const handleTabClick = (tabId) => {
    chrome.tabs.update(tabId, { active: true });
  };

  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <a href="#" onClick={() => handleTabClick(tab.id)}>
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BgTabs;
