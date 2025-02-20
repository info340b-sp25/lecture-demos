import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

const DEFAULT_USERS = [
  {userId: null, userName: null, userImg: '/img/null.png'}, //null user
  {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
  {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
  {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
]

function App(props) {

  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"]
  const currentChannel = "general";

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); 
  console.log(msgStateArray);

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]);
  console.log("currentUser", currentUser);

  // we want to control when setCurrentUser() is called
  // so we make a new function
  const loginUser = (userObj) => {
    // I can add validation steps or debugging here
    setCurrentUser(userObj);
  }

  /* STATE MANAGEMENT: how do we change */
  const addMessage = function(userObj, messageText, channel) {
    console.log("addmsg")
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    console.log(newMessage);
    const newArray = [...msgStateArray, newMessage];
    setMsgStateArray(newArray); //update the board & re-render
  }

  // Calculate how many messages per channel
  // to send just that info to the ChannelList
  // From: [{mesageObj},{messageObj}] ->
  //       {channel_name: number, channel_name: number}
  const channelMsgCounts = msgStateArray.reduce(
    (prevMsgCounts, currentMsgObj) =>{

      // if the channel name isn't in our count data, initialize it
      if(!prevMsgCounts[currentMsgObj.channel]){
        prevMsgCounts[currentMsgObj.channel] = 0;
      }

      // add one to the count for that channel
      prevMsgCounts[currentMsgObj.channel] += 1;
      // e.g., prevMsgCounts['general'] += 1;

      return prevMsgCounts;
    },
    {}
  );
  console.log("channelMsgCounts", channelMsgCounts);


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar 
        usersData={DEFAULT_USERS} 
        loginUser={loginUser} 
        currentUser={currentUser}
      />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList 
            channelNames={channelNames} 
            currentChannel={currentChannel} 
            channelMsgCounts={channelMsgCounts}
          />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane 
            currentChannel={currentChannel}
            msgStateArray={msgStateArray} 
            addMessage={addMessage}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;