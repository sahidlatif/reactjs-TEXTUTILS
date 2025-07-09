import React, { useState } from "react";
import Navbar from "./navbar";

export default function About(props) {
  const [massege, setmassege] = useState("");     // Current input
  const [display, setdisplay] = useState([]);     // List of messages

  //🔹 Send message to backend and update UI
  const send = () => {
    if (massege.trim() !== "") {
      fetch("http://localhost/learnPHP/savemsg.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: massege })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === "success") {
            setdisplay([...display, massege]); // add to UI immediately
            setmassege("");
          } else {
            alert("Failed to send: " + data.message);
          }
        })
        .catch(error => {
          console.error("Error sending message:", error);
        });
    }
  };

  // 🔹 Fetch all saved messages from backend
  const recive = () => {
    fetch("http://localhost/learnPHP/getmassege.php")
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          // Extract messages from response
          const messages = data.messages.map(item => item.message);
          setdisplay(messages);
        } else {
          alert("Failed to receive: " + data.message);
        }
      })
      .catch(err => console.error("Error receiving messages:", err));
  };

  const clear=()=>{
setdisplay([])
  }
  return (
    <>
      <div>
        <Navbar />

        <div style={{ border: '2px solid black', width: '100%', padding: '10px', height: '70%' }}>
          <p>Your messages:</p>
          <div>
            {display.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                  marginBottom: '10px'
                }}
              >
                <p
                  style={{
                    width: '70%',
                    borderRadius: '30px',
                    padding: '10px',
                    backgroundColor: 'lightgreen'
                  }}
                >
                  {msg}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ border: '2px solid black', width: '100%', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Enter your message:</p>
            <button
              style={{
                backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                margin: 3
              }}
              onClick={send}
            >
              Send
            </button>
          </div>
          <textarea
            style={{ width: '100%', marginBottom: '10px' }}
            rows={4}
            value={massege}
            onChange={(e) => setmassege(e.target.value)}
          />
        </div>
      </div>

      {/* 🔘 Button to receive messages manually */}
     <div style={{display:'flex'}}>
     <div >
        <button
          style={{
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            padding: '10px',
            borderRadius: '20px',
            margin: 10
          }}
          onClick={recive}
        >
          your database
        </button>
      </div>
      <div>
        <button
          style={{
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            padding: '10px',
            borderRadius: '20px',
            margin: 10
          }}
          onClick={clear}
        >
          CLEAR CHAT
        </button>
      </div>
     </div>
    </>
  );
}
