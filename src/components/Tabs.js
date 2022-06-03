import React from 'react'

function Tabs({tabsInfo, handleSelect, selectedTab}) {
  return (
    <div className="tabs__menu">
    {tabsInfo.map((item, index) => (
      <div className="btn-container">
        <button
          onClick={() => handleSelect(index)}
          className={`tabs__button ${
            selectedTab === index && "tabs__button tabs__button--active"
          }`}
        >
          {item.title}
        </button>
      </div>
    ))}
  </div>
  )
}

export default Tabs