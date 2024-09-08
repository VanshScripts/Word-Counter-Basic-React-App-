import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
  // console.log("Uppercase was clicked" + text );
  let newText = text.toUpperCase()
  setText(newText)
  }
  const handleLoClick = () => {
  // console.log("Uppercase was clicked" + text );
  let newText = text.toLowerCase()
  setText(newText)
  }
  const handleClear = () => {
  // console.log("Uppercase was clicked" + text );
  let newText = ('')
  setText(newText)
  }

  const handleOnChange = (event) => {
   setText(event.target.value)
  }
  const [text , setText] = useState('');
//  setText("New text");
  return (
    <>
    <div>
      <div className="container">
        <h1> {props.heading}</h1>
      </div>
      </div>
        <div className="container">
            <div className="form-group">
               <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div> 
               <div className="p-2">
                <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Uppercase</button>
               <button className="btn btn-primary mx-1" onClick={handleLoClick} > Convert to Lowercase</button>
               <button className="btn btn-primary mx-1" onClick={handleClear} >Clear Text</button>
                 </div>
       </div>
       <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  )

  }
