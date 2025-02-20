import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

function App(props) {

  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"]
  const currentChannel = "general";

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); 
  console.log(msgStateArray);

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
      <HeaderBar />
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;