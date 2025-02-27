import React from 'react';

import {useParams} from 'react-router-dom';

import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

export default function ChatPage(props) {
  const {currentUser, messageArray, addMessageFunction} = props;
 
  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"];

  const urlParamsObj = useParams();
  console.log("urlParamsObj", urlParamsObj);

  const currentChannel = urlParamsObj.whichChannel || channelNames[0];



  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList 
          channelNames={channelNames}
          currentChannel={currentChannel}
        />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          currentChannel={currentChannel}
          messageArray={messageArray}
          addMessageFunction={addMessageFunction}
        />
      </div>
    </div>
  )
}