import { useState } from "react";
import "./App.css";
import data from "./data";
import Tabs from './components/Tabs';
import TabsInfo from "./components/TabsInfo";
import Header from './components/Header'

function App() {
  const [tabsInfo, setTabsInfo] = useState(data);
  const [selectedTab, setSelectedTab] = useState(1);

  const handleSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <>
      <Header />
      <main>
        <img
          src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80"
          alt="nature"
        />
        <section className="tabs">
          <Tabs tabsInfo={tabsInfo} handleSelect={handleSelect} selectedTab={selectedTab} />
          <TabsInfo tabsInfo={tabsInfo} selectedTab={selectedTab} />
        </section>
      </main>
    </>
  );
}

export default App;
