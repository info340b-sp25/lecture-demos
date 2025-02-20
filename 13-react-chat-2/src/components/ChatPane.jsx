import React, {useState} from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  const {currentChannel} = props;

  const [numClicks, setNumClicks] = useState(0);
  //let numClicks = 0;
  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG);
  

  console.log("rendering the ChatPane")

  //data: an array of message objects [{}, {}]
  const messageObjArray = msgStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //reverse chron order
    .filter((msgObj) => msgObj.channel == currentChannel); // filter for only current channel

  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messageObjArray.map((chatObj) => {
      const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
  });

  if(messageItemArray.length == 0){
    messageItemArray[0] = (
      <p>No Messages Found!</p>
    )
  }

  const addMessage = (text) => {
    const message = {
      "userId": "penguin",
      "userName": "Penguin",
      "userImg": "/img/Penguin.png",
      "text": text,
      "timestamp": Date.now(),
      "channel": "general"
    }

    const newMsgStateArray = [...msgStateArray, message];
    setMsgStateArray(newMsgStateArray);
  }

  const handleClick = (event) => {
    console.log("you clicked me");
    //numClicks += 1;
    setNumClicks(numClicks + 1);
    addMessage("That was button click number " + numClicks);
    console.log("numClicks now: " + numClicks);
  }

  return (
    <>
      <div className="scrollable-pane">
        {/* button demo */}
        <div className="pt-2 my-2">
          <button className="btn btn-success" 
                  onClick={handleClick}>
            Click me!
          </button>
          <p>You clicked me {numClicks} times</p>
        </div>
        <hr/>

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm addToMessagesSomehow={addMessage}/>
    </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
