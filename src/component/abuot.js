import "./about.css";
import React, { useState } from "react";

function Abuot() {
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
    color: click ? "red" : "white",
    backgroundColor: click ? "black" : "gray",
    width: "1000vh",
    height: "1000px",
    // borderColor:'black',
    // borderWidth:'2px',
    // boederStyle:'solid'
    border: "3px solid black",
    borderRadius: "20px",
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
    backgroundColor: click ? "white" : "red",
    borderRadius: "50%",
    transition: "all 0.2s ease",
    marginLeft: click ? "20px" : "0px",
  };
  const right = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    border: "3px solid black",
    //  borderRadius:'20px',
    marginLeft: "4px",
    padding: "1px",
    backgroundColor: click ? "gray" : "white",
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
    width: "280px",
    display: "flex",
    flexDirection: "row",
    marginBottom: "4px",
    justifyContent:'space-between',
    
  };
  const swright = {
    // display: "flex",
    // justifyContent: "flex-end",
    // width: "100%",
    // backgroundColor:'pink'
  };
  return (
    <>
      <div className="all" style={all}>

        {/* left side container  */}
        <h1 className="name" style={logo}>
          Well Come TO TextUtils
        </h1>
        {/* right side container  */}
        <div className="right" style={right}>
          <div className="switch" style={cont}>
            {/* buton name */}
            <div >
              
              <p style={modes}>Enable {mode} Mode</p>
            </div>
            {/* button style */}
            <div style={swright}>
              <div className="div" style={div} onClick={left}>
                <div className="indiv" style={indiv}></div>
              </div>
            </div>
          </div>
          <div className="switch" style={cont}>
            {/* buton name */}
            <div >
              
              <p style={modes}>Enable {mode} Mode</p>
            </div>
            {/* button style */}
            <div style={swright}>
              <div className="div" style={div} onClick={left}>
                <div className="indiv" style={indiv}></div>
              </div>
            </div>
          </div>
          <div className="switch" style={cont}>
            {/* buton name */}
            <div >
              
              <p style={modes}>Enable {mode} Mode</p>
            </div>
            {/* button style */}
            <div style={swright}>
              <div className="div" style={div} onClick={left}>
                <div className="indiv" style={indiv}></div>
              </div>
            </div>
          </div>
          <div className="switch" style={cont}>
            {/* buton name */}
            <div >
              
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
export default Abuot;
