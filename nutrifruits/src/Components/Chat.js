import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "./InfoBar/InfoBar";

import TextContainer from "./TextContainer/TextContainer";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import { Launcher } from "react-chat-window";

import { withRouter } from "react-router-dom";

let socket;

const Chat = ({ location }) => {
  console.log("location test:", location);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const ENDPOINT = 'http://localhost:3030';
  const ENDPOINT = "https://ecommerce-app-test.herokuapp.com/";

  // useEffect(
  //   () => {
  //     // les data que l'utilisateur a entré dans les queries
  //     // une methode du package queryString
  //     // const data = queryString.parse(location.search);
  //     const { room, name } = queryString.parse(location.search);

  //     socket = io(ENDPOINT);

  //     setName(name);
  //     setRoom(room);

  //     socket.emit("join", { name, room }, () => {});

  //     return () => {
  //       socket.emit("disconnect");
  //       socket.off();
  //     };
  //   }, //la suite indique quand le useEffect prendra effet donc
  //   // quand les valeurs de endpoint et location.search changeront
  //   [ENDPOINT, location.search]
  // );

  // useEffect(
  //   () => {
  //     //ajoute tous les nouveaux messages dans le tableau des messages
  //     socket.on("message", (message) => {
  //       setMessages([...messages, message]);
  //     });

  //     socket.on("roomData", ({ users }) => {
  //       setUsers(users);
  //     });
  //   },
  //   //indique 'seulement comme le tableaux messages change'
  //   [messages]
  // );

  // //fonction pour envoyer des messages
  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   if (message) {
  //     socket.emit("sendMessage", message, () => setMessage(""));
  //   }
  // };

  // const _onMessageWasSent = (message) => {
  //   setMessages([...messages, message]);
  // };

  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: "react-chat-window",
          imageUrl:
            "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
        }}
        // onMessageWasSent={_onMessageWasSent(message)}
        // messages={messages}
        showEmoji
      />
    </div>

    // <div className="outerContainer">
    //   <div className="container">
    //     <InfoBar room={room} />
    //     <Messages messages={messages} name={name} />
    //     <Input
    //       message={message}
    //       setMessage={setMessage}
    //       sendMessage={sendMessage}
    //     />
    //   </div>
    //   <TextContainer users={users} />
    // </div>

    // <div className='outerContainer'>
    //   <div className='container'>
    //     <InfoBar />
    //     <input
    //       value={messages}
    //       onChange={(event) => setMessage(event.target.value)}
    //       // envoi avec la touche entrée
    //       onKeyPress={(event)=> event.key ==='Enter' ? sendMessage(event) : null}
    //     />
    //   </div>
    // </div>
  );
};

export default Chat;
