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
  }

  handleSelect=(index)=>{
    this.setState({selectedTab: index})
  }

  render() {
    const {tabsInfo,selectedTab} = this.state;
    const types = ['A simple component','A stateful component','An application']
    return (
      <>
      <header>
        <h1>About</h1>
        <h3>A JavaScript library for building user interfaces</h3>
    </header>
    <main>
        <img src='https://hackernoon.com/hn-images/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg' alt="react logo" />
        <section className="tabs">
    {tabsInfo.map((tabInfo, index)=>{
      return (
        <>
        <div key={index} className="tabs__menu">
            <button onClick={()=>this.handleSelect(index)} className="tabs__button tabs__button--active" >{tabInfo.title}</button>
        </div> 
        <div className={selectedTab!==index && "tabs__content"}>
            <h2>{tabInfo.title}</h2>
            <p>{tabInfo.text}</p>
            <ul className={selectedTab!==data.length-1 && 'tabs__content'}>
              <li>{types[0]}</li>
              <li>{types[1]}</li>
              <li>{types[2]}</li>
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
