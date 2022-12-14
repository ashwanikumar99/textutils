import React ,{useState}from 'react'


export default function Textform(props) {
const handleUpclick = () =>{
  console.log("Uppercase was clicked" +text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase","success : ");
}

const handleUpclick2 = () =>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowsercase","success : ");
}
const handleUpclick3 = () =>{
  let newText = text.replace(/ +/g,' ').trim();
  setText(newText);
  props.showAlert("Extra spaces have been removed","success : ");
}
const handleOnchange = (event) =>{
  console.log("on change");
  setText(event.target.value);
}
  const [text, setText] = useState('');
  //text = "new text"; // Wrong way to change the state
  //setText("new text");// Correct way to change the state    
 return (
  <>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>   
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnchange} 
  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}value = {text} id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleUpclick2}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleUpclick3}>Remove extra spaces</button>

    </div>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length-1} words   and  {text.length} characters</p>
      <h2>Text Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
