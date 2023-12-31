import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked -" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked -" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    };

    const handleClearClick = () => {
        console.log("Lowercase was clicked -" + text);
        let newText = "";
        setText(newText);
        props.showAlert("clear the text","success")
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };


    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            </div>

            <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split("").length} words and {text.length} characters.</p> {/* .replace(/\s/g, "") */}
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text:'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
