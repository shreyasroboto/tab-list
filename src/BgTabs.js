import { useEffect, useState } from "react";

const BgTabs = () => {
  const [tabs, setTabs] = useState([]);
  const [listName, setListName] = useState("");

  const chromeQuery = () => {
    const queryInfo = { currentWindow: true };

    chrome.tabs.query(queryInfo, (result) => {
      setTabs(result);
    });
  };

  useEffect(() => {
    chromeQuery();
  }, []);

  const handleTabClick = (tabId) => {
    chrome.tabs.update(tabId, { active: true });
  };

  const createList = () => {
    localStorage.setItem(listName, JSON.stringify(tabs));
    chromeQuery();
  };

  return (
    <div className="mb-8">
      <ul className="p-3 min-w-60 mb-6">
        {tabs.map((tab) => (
          <li key={tab.id} className="mb-3 flex gap-2 items-center">
            <img src={tab.favIconUrl} className="w-4 h-4 mr-2" />
            <a
              href="#"
              onClick={() => handleTabClick(tab.id)}
              className="text-sm underline line-clamp-1 text-gray-500"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md px-3 py-2 mb-1 w-full"
          placeholder="Give your list a name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => createList()}
        >
          Save list
        </button>
      </div>
    </div>
  );
};

export default BgTabs;
