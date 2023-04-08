import './App.css';
import {useState} from "react";
/*
const dishes= [ 
  "Banana Ketchup Sandwich",
  "Pizza Cherios",
  "Fries Ice Cream",
  "Ham and Cheese Banana",
  "Spaghetti Gummy Bear"
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Fantasticly Wonderful Kitchen</h1>
      </header>  
    </div>
  );
}
*/


 /* const [emotion, setEmotion] = useState("happy");
  const [secondary,setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  },[emotion]);

  useEffect(()=>{
    console.log(`It's ${secondary} right now!`)
  },[secondary]);
*/
 /* return (
    <div className ="App">
      <h1>Current Emotion is {emotion} </h1>
      <button onClick={()=> setEmotion("sad")}>Sad</button>
      <button onClick={()=> setEmotion("excited")}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={()=> setSecondary("grateful")}>Grateful</button>
    </div>
  )*/
/*
  const[checked, setChecked] = useReducer((checked) => !checked, false);
  return(
    <div className="App">
      <input type="checkbox" 
        value={checked} 
        onChange={() =>
        setChecked((checked) => !checked)}></input>
      <label>{checked ? "checked" : "not checked"}</label>
    </div>)*/
  // const textTitle = useRef();
  // const hexColor = useRef();
function useInput(initValue){
  const [value, setValue] = useState(initValue);
  return [
    {
      value, 
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initValue) 
  ];
}

function App(){ 
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit =(e) =>{
    e.preventDefault();
    // const title=textTitle.current.value;
    // const color = hexColor.current.value;
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
    // textTitle.current.value="";
    // hexColor.current.value="";
  };
  return(
    <form onSubmit={submit}>
      <input 
        // ref={textTitle} 
       // value={title}
        {...titleProps}
        //onChange={(event) => setTitle(event.target.value)}
        type="text" 
        placeholder="color title ..."
      />
      <input 
        // ref={hexColor} 
        //value={color}
        //onChange={(event) => setColor(event.target.value)}
        {...colorProps}
        type="color" />
      <button>ADD</button>
    </form>
  );

}


export default App;
