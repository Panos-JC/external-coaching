import { useState } from "react";
import "./App.css";
import Panel from "./Panel";

const data = [
  {
    title: 'Title 1',
    content: 'content 1'
  },
  {
    title: 'Title 2',
    content: 'content 2'
  },
  {
    title: 'Title 3',
    content: 'content 3'
  },
]

function App() {
  // const [open, setOpen] = useState(true); //destructuring
  // const [open2, setOpen2] = useState(false);
  const [active, setActive] = useState(1);



  return <>
    {data.map(({title, content}, index) => 
    <Panel
      title = {title}
      content = {content}
      open={active === index}
      onClick={() => setActive(index)}
    />)}
    {/* <div className="panel">
      <h2>Title</h2>
      {active === 1 ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> : <button onClick={() => setActive(1)}>Show</button>}
    </div>
    <div className="panel">
      <h2>Title</h2>
      {active === 2 ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> : <button onClick={() => setActive(2)}>Show</button>}
    </div>
    <div className="panel">
      <h2>Title</h2>
      {active === 3 ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> : <button onClick={() => setActive(3)}>Show</button>}
    </div> */}
  </>
}

export default App;


// function App() {
//   const [activeTab, setActiveTab] = useState(); // Initial state

//   const tab_content = ["Panos", "Giorgos", "Anastasia", "Nick"]; // Tabs content

//   return <>
//     <div className="tabs">
//       {
//         [0, 1, 2, 3].map( //to array einai tropos na ektelestei h map 4 fores
//           (tab) => <div className="tab" onClick={() => setActiveTab(tab)}>Tab {tab + 1}</div>
//         )
//       }
//     </div>

//     <div className="content">
//       {activeTab >= 0 && activeTab <= 3 ? <p>Active Tab: Tab {activeTab + 1} <br/>
//       Content: {tab_content[activeTab]}</p> : <p>Choose a tab</p>}
//     </div>
//   </>
// }

// export default App;

