import {useState} from 'react'
import './App.css';
import data from './data'

function App() {

  const [tabsInfo, setTabsInfo] = useState(data)
  const [selectedTab, setSelectedTab] = useState(1)

  const handleSelect=(index)=>{
    setSelectedTab(index)
  }
  console.log(tabsInfo)
  console.log(selectedTab,'selected')
  
    
  // const {title, text, types} = tabsInfo[selectedTab];
  
    return (
      <>
      <header>
        <h1>About</h1>
        <h3>A JavaScript library for building user interfaces</h3>
    </header>
    <main>
        <img src='https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80' alt="nature" />
        <section className='tabs'>
        
         
          {tabsInfo.map((item,index)=>(
            <div>
              <div className="tabs__menu">
               <div className='btn-container'>
            <button key={index} onClick={()=>handleSelect(index)} className="tabs__button tabs__button--active" >{item.title}</button>
            </div>
          </div>
   
        
        <div key={index} className={selectedTab===index ? 'tabs__content--active' : "tabs__content"}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <ul className={selectedTab!==data.length-1 && 'tabs__content'}>
              {item.types && item.types.map((item, index)=>
               <li>{item.name}</li>
              )}
            </ul>
                </div>
        </div>
         ))}
      
     
     
    </section>
    </main>
  </>
    )
  }


export default App;
// import {Component} from 'react'
// import './App.css';
// import data from './data'

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       tabsInfo: data, 
//       selectedTab: 1,
//     }
//   }

//   handleSelect=(index)=>{
//     this.setState({selectedTab: index})
//   }

//   render() {
//     const {tabsInfo,selectedTab} = this.state;
//     const types = ['A simple component','A stateful component','An application']
//     return (
//       <>
//       <header>
//         <h1>About</h1>
//         <h3>A JavaScript library for building user interfaces</h3>
//     </header>
//     <main>
//         <img src='https://hackernoon.com/hn-images/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg' alt="react logo" />
//         <section className="tabs">
//     {tabsInfo.map((tabInfo, index)=>{
//       return (
//         <>
//         <div key={index} className="tabs__menu">
//             <button onClick={()=>this.handleSelect(index)} className="tabs__button tabs__button--active" >{tabInfo.title}</button>
//         </div> 
//         <div className={selectedTab!==index && "tabs__content"}>
//             <h2>{tabInfo.title}</h2>
//             <p>{tabInfo.text}</p>
//             <ul className={selectedTab!==data.length-1 && 'tabs__content'}>
//               <li>{types[0]}</li>
//               <li>{types[1]}</li>
//               <li>{types[2]}</li>
//             </ul>
 
//         </div>
        
//       </>
//       )
//     })}
//     </section>
//     </main>
//   </>
//     )
//   }
// }

// export default App;
