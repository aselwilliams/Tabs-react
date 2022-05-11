import {Component} from 'react'
import './App.css';
import data from './data'

class App extends Component{
  constructor(){
    super();
    this.state={
      tabsInfo: data, 
      selectedTab: 1,
    }
    console.log(data)
  }
  render() {
    const {tabsInfo} = this.state;
    return (
      <>
      <header>
        <h2>About</h2>
        <p>A JavaScript library for building user interfaces</p>
    </header>
    <main>
        <img src='https://namespaceit.com/uploads/post/image/1616394211.jpg' alt="react" />
        <section className="tabs">
    {tabsInfo.map((tabInfo, index)=>{
      return (
        <>
        <div key={index} className="tabs__menu">
            <button className="tabs__button tabs__button--active" data-for-tab="1">{tabInfo.title}</button>
        </div> 
        <div className="tabs__content" data-tab="1">
            <h3>{tabInfo.title}</h3>
            <p>{tabInfo.text}</p>
            <ul>
                {/* <li>{tabInfo.components[index]}</li>
                <li>{tabInfo.components[index]}</li>
                <li>{tabInfo.components[index]}</li> */}
            </ul>
        </div>
    </>
      )
    })}
    </section>
    </main>
  </>
    )
  }
}

export default App;
