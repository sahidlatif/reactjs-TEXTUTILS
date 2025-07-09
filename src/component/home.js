// import "./about.css";
import React, { useState } from "react";
import Navbar from "./navbar";


function Home() {


  const [click, setclick] = useState();


  const [mode, setmode] = useState("dark");



  const left = () => {
    setclick(!click);
    setmode(click ? "dark" : "light");
  };





  const all = {
    display: "flex",
    flexDirection: "row",
  };




  const logo = {
    color: click ? "white" : "black",
    backgroundColor: click ? "black" : "white",
    width: "1000vh",
    // height: "1000px",
    fontSize: "40px",
    // textAlign:'center',
    // borderColor:'black',
    // borderWidth:'2px',
    // boederStyle:'solid'
    // border: "3px solid black",
    // borderRadius: "20px",
  };




  const div = {
    backgroundColor: click ? "blue" : "#fff",
    borderWidth: "2px",
    borderColor: "white",
    height: "20px",
    width: "40px",
    borderRadius: "40px",

    cursor: "pointer",
  };




  const indiv = {
    height: "20px",
    width: "20px",
    backgroundColor: click ? "white" : "black",
    borderRadius: "50%",
    transition: "all 0.2s ease",
    marginLeft: click ? "20px" : "0px",
  };




  const right = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    // border: "3px solid black",
    //  borderRadius:'20px',
    marginLeft: "4px",
    padding: "1px",
    backgroundColor: click ? "gray" : "white",
    width:'100%'
  };





  const modes = {
    fontSize: "15px",
    paddingRight: "20px",
    color: click ? "white" : "black",
  };





  const cont = {
    backgroundColor: click ? "dimgray" : "green",

    //  borderRadius:'20px',
    border: "1px solid black",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: "4px",
    justifyContent: "space-between",
  };





  const swright = {
    // display: "flex",
    // justifyContent: "flex-end",
    // width: "100%",
    // backgroundColor:'pink'
  };




  const [text, setText] = useState("");
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
  
  
  
  const cleartext = () => {
  setText("")
  };
  
  
  
  const copytext = () => {
    navigator.clipboard.writeText(text);
  };
  

  const handlechange = (event) => {
    console.log("TEXTAREA UPDATE");
    setText(event.target.value);
  };





  const textarea = {
    width: "100%",
    textWrap: "wrap",
    fontSize:'20px',
    backgroundColor:click? "black":"",
    color:click? "white" :"black"
  };





  const textp = {
    width: "100%",
   marginTop:'5px',
    borderBottom:click? "2px solid white":"2px solid black",
    fontSize:'19px'
  };




  const button={
    height:'40px',
    borderRadius:'10px',
    fontSize:'20px',
    margin:'10px',
    border:click? "2px solid white":'',
    backgroundColor:click?"black":"",
    color:click? "white":""
  }




  return (
    <>
   <Navbar/>
    
      <div className="all" style={all}>


        
        {/* left side container  */}

        <div className="name" style={logo}>


          <h1 style={{ textAlign: "center", marginTop: "10px" }}>
            {" "}
            Well Come TO TextUtils
          </h1>

          {/* <h5>Enter the Text</h5> */}


          <div className="mb-2">



            <label htmlFor="mybox" className="form-label">
              Example textarea
            </label>


            <textarea
              // className="form-control"
              style={textarea}
              value={text}
              onChange={handlechange}
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>


            <button style={button} onClick={handleupper}>
              upper case
            </button>

            <button style={button} onClick={handlelower}>
              lower case
            </button>



            <button style={button} onClick={cleartext}>
              Clear Text
            </button>


            <button style={button} onClick={copytext}>
              Copy Text
            </button>



          </div>
          <div className="container">

            {/* <p>your summay is</p> */}

            <p>preview :</p>

            <p style={textp}>{text}</p>

            <p style={textp}>{0.008 * text.split("").length} per minutes read</p>

            <p style={textp}> {text.length} Chracter AND {text.split(" ").filter((space)=>{return space.length!==0 }).length} word   </p>

            

          </div>
        </div>









        {/* right side container  */}
        <div className="right" style={right}>


          <div className="switch" style={cont}>
            {/* buton name */}
            <div>
              <p style={modes}>Enable {mode} Mode</p>
            </div>


            {/* button style */}
            <div style={swright}>
              <div className="div" style={div} onClick={left}>
                <div className="indiv" style={indiv}></div>
              </div>
            </div>

          </div>




        </div>
      </div>
    </>
  );
}
export default Home;
