import React, { useState } from 'react';



export default function Textform(props) {

  // let inputText = document.getElementById('myTextArea').value;
  // console.log(inputText);

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed into uppercase", "success")
  }

  const handleLowerClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed into lowercase", "success")
  }

  const handleClearClick = () =>{
    console.log("clear clicked");
    let cleartext = "";
    setText(cleartext);
  }
  const handleOnChange = (event) => {
    console.log("On changed");
    setText(event.target.value)
    // console.log(event.target.value)
  }
  const [text, setText] = useState('');
  // text = "enter your text2";  //wrong way to set the text
  // setText ( "enter your text2");  //correct way to set the text
  return (
    <>
      <div className='container' style={{color: props.darkMode==='dark'?'white':'dark'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="forEachm-control container" style={{ color: props.darkMode==='dark'?'white':'dark',backgroundColor: props.darkMode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="myTextArea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary" onClick={handleLowerClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear all text</button>
      </div>
      {/* my-1 gives upper margin to the div  */}
      <div className="container my-3" style={{color: props.darkMode==='dark'?'white':'dark'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>you can read all these words in {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  )
}
