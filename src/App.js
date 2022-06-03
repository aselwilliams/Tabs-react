import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [tabsInfo, setTabsInfo] = useState(data);
  const [selectedTab, setSelectedTab] = useState(1);

  const handleSelect = (index) => {
    setSelectedTab(index);
  };
  console.log(tabsInfo);
  console.log(selectedTab, "selected");

  return (
    <>
      <header>
        <h1>About</h1>
        <h3>A JavaScript library for building user interfaces</h3>
      </header>
      <main>
        <img
          src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80"
          alt="nature"
        />
        <section className="tabs">
          <div className='tabs__menu'>
            {tabsInfo.map((item, index) => (
            
              <div className="btn-container">
                <button
                  onClick={() => handleSelect(index)}
                  className={selectedTab===index ? 'tabs__button tabs__button--active' : 'tabs__button'}
                >
                  {item.title}
                </button>
              </div>
              
            ))
              }
          </div>
          <div >
          {tabsInfo.map((item, index) => (
           
              
              <div
                className={
                  selectedTab === index
                    ? "tabs__content--active"
                    : "tabs__content"
                }
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <ul
                  className={selectedTab !== data.length - 1 && "tabs__content"}
                >
                  {item.types &&
                    item.types.map((item, index) => <li>{item.name}</li>)}
                </ul>
              </div>
           
          ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
