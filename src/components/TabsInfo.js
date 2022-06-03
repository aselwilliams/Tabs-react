import React from 'react'

function TabsInfo() {
  return (
    <div>
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
  )
}

export default TabsInfo