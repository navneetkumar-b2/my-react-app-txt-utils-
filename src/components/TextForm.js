import React, { useState } from "react";
// export default function TextForm(props) {

function TextForm(props) {
  const [text, setText] = useState("");
  const [countW, setcountW] = useState(0);

  function handleOnChange(event) {
    // if (text === "Start typing... or paste text here") {
    //   setText("");
    //   // setText(event.target.value)
    // }
    // // setText("")
    // else
    setText(event.target.value);
    setcountW(countWords());
  }

  function handleUp() {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case!", "success");
  }
  function handlelo() {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  // function handleremove(){
  // // let newtext =trim(text)
  // setText(newtext)
  // }
  function handleClearall() {
    setText("");
    setcountW(0);
  }
  const handleCopy = () => {
    // Select the text field
    let textBox = document.getElementById("text-box");
    textBox.select();
    // textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  function countWords() {
    // Use a regular expression to split the string into words
    const words = text.split(/\s+/);
  
    // The length of the 'words' array is the number of words
    return words.length;
  }

  return (
    <>
    <div className="container my-4"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <div class="mb-3">
        <h1 className="my-3">{props.title}</h1>
        <textarea
          className="form-control my-3"
          id="text-box"
          value={text}
          onChange={handleOnChange}
          placeholder="Start typing... or paste text here"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
        ></textarea>
        {/* {alert("this is alerrt")} */}
      </div>
      <button
        type="button"
        class="btn btn-primary mx-3 my-2"
        onClick={handleUp}
      >
        to Upper case
      </button>
      <button
        type="button"
        class="btn btn-primary mx-4 my-2"
        onClick={handlelo}
      >
        to lower case
      </button>
      {/* <button type="button" class="btn btn-primary mx-4" onClick={handleremove}>remove extra space</button> */}
      <button
        type="button"
        class="btn btn-primary mx-4 my-2"
        onClick={handleClearall}
      >
        clear all
      </button>
      <button
        type="button"
        class="btn btn-primary mx-4 my-2"
        onClick={handleCopy}
      >
        copy text
      </button>
      <button
        type="button"
        class="btn btn-primary mx-4 my-2"
        onClick={handleExtraSpaces}
      >

        
        Remove Extra space
      </button>
    </div>
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{countW} words and {text.length} characters</p>
            <p>{0.008 * countW} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  );
}

export default TextForm;

//working
//first of all all the values w
