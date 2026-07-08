import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text)
        let newText= text.toUpperCase()
        setText(newText)
    }
    const handleDoClick=()=>{
        console.log("Lowercase was clicked" + text)
        let newText= text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <h1>{props.heading}</h1>
    <div className='container'>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleOnChange} id='mybox' rows={8}></textarea>
</div>
<button disabled={text.length===0} className="btn.btn-success mx-2 my-2" onClick={handleUpClick} >Convert to uppercase</button>
<button disabled={text.length===0} className="btn.btn-success mx-2 my-2" onClick={handleDoClick} >Convert to lowercase</button>
</div>
<div className="container my-2">
  <h1>your text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
</div>
</>
  )
}
