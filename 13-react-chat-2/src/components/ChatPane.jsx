import React, {useState} from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  console.log("rendering the ChatPane")

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG)

  //data: an array of message objects [{}, {}]
  const messageObjArray = msgStateArray
    .sort((m1, m2) => m1.timestamp - m2.timestamp); //chron order

  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messageObjArray.map((chatObj) => {
      const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
  });

  


  const addMessage = (text) => {
    const message = {
      "userId": "penguin",
      "userName": "Penguin", 
      "userImg": "/img/Penguin.png",
      "text": text,
      "channel": "general",
      "timestamp": Date.now()
    }
    const newMsgStateArray = [...msgStateArray, message]
    setMsgStateArray(newMsgStateArray)
  }

  const [messageArray, setMessageArray] = useState(['hiss']);
  // Every time "click me!" is pressed, add an "s" to the hiss message,
  // which should display below the button (instead of 'you clicked me...')
  const [numClicks, setNumClicks] = useState(0);
  console.log("rendered numClicks", numClicks);

  const handleClick = (event) => {
    setNumClicks(numClicks + 1);
    messageArray[0] += 's'
    setMessageArray(messageArray);
  }

  return (
    <>
      <div className="scrollable-pane">
        {/* button demo */}
        <div className="pt-2 my-2">
          <button onClick={handleClick} className="btn btn-success">Click me!</button>
          <p>{messageArray}</p>
        </div>
        <hr/>

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm addToMessageFunction={addMessage}/>
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
