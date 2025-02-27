import React, {useState} from 'react';

import {Link} from 'react-router-dom';

export function ChannelList(props) {
  const { channelNames, currentChannel } = props;

  const [faveChans, setFaveChans ] = useState([])
  console.log("faveChans", faveChans)

  const handleFaveClick = (event) => {
    const buttonChanName = event.target.getAttribute("data-channel-name")
    if(faveChans.includes(buttonChanName)){
      const index = faveChans.indexOf(buttonChanName);
      if (index > -1) { // only splice array when item is found
        faveChans.splice(index, 1); // 2nd parameter means remove one item only
      }
    }else {
      console.log("adding channel", buttonChanName)
      faveChans.push(buttonChanName)
    }
    const newFaveChans = [...faveChans];
    setFaveChans(newFaveChans);
  }

  //render the links
  const liArray = channelNames.map((channelNameString) => {
    return (
      <div key={channelNameString}>
        <Link className={channelNameString == currentChannel ?
          "px-2 bg-success" :
          "px-2"
        }
          name={channelNameString}
          to={"/chat/"+channelNameString}
        >
          {channelNameString}
        </Link> 
        <button 
          Style={faveChans.includes(channelNameString)? "color:red" : "color:gray"}
          onClick={handleFaveClick}
          data-channel-name={channelNameString}
          >*</button>
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}