import './App.css';
import {useState} from 'react'
 
function App() {
  return (
    <div className="App">
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>


      <TextExpander 
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}


const TextExpander=(
  {
    collapsedNumWords=10,
    expandButtonText="Show more",
    collapsedButtonText="Show less",
    buttonColor="#1f09cd",
    expanded="false",
    className,
    children
  }
)=>{
    const [isExpanded,setIsExpanded]=useState(false)
    const displayText=isExpanded?children:children.split(" ").slice(0, collapsedNumWords).join(" ")+"..."
    const buttonStyle={
      background:"none",
      border:"none",
      font:"inherit",
      cursor:"pointer",
      marginLeft:"6px",
      color:buttonColor
    }

    return(
      <div className={className}>
        <span>{displayText}</span>
        <button onClick={()=>setIsExpanded((exp)=>!exp)} style={buttonStyle}>
          {isExpanded ? collapsedButtonText: expandButtonText}
        </button>
      </div>
    )

}

export default App;
