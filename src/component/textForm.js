import React, { useState } from "react";

export default function TextForm(props) {
  const handleupper = () => {
    console.log(text);
    let a = text.toUpperCase();
    setText(a);
  };
  const handlelower = () => {
    console.log(text);
    let a = text.toLowerCase();
    setText(a);
  };
  const handlechange = (event) => {
    console.log("TEXTAREA UPDATE");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handlechange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
         <button className="btn btn-primary" onClick={handleupper}>
        upper case
      </button>
      <button className="btn btn-primary" onClick={handlelower}>
        lower case
      </button>
      </div>
     <div className="container">
      <h1>your summay is</h1>
      <h2>preview :</h2>
      <p>{text}</p>
      <p>{0.008 * text.split("").length }</p>
      <p>your text length is {text.length} </p>
      <p> your word is {text.split(" ").length} </p>
     
     </div>
    </>
  );
}

// import React, { useState } from 'react';

// export default function TextForm(props) {
//   const [text, setText] = useState(''); // ✅ Initialize with empty string instead of undefined

//   const handleUpper = () => {
//     console.log(text);
//     let a = text.toUpperCase();
//     setText(a);
//   };

//   const handleChange = (event) => {
//     console.log('TEXTAREA UPDATE');
//     setText(event.target.value);
//   };

//   return (
//     <>
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlTextarea1" className="form-label">
//           Example textarea
//         </label>
//         <textarea
//           className="form-control"
//           value={text}
//           onChange={handleChange}
//           id="exampleFormControlTextarea1"
//           rows="8"
//         ></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleUpper}>
//         Convert to UPPERCASE
//       </button>
//     </>
//   );
// }
