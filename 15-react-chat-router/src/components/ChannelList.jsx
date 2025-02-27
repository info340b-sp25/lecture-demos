import React from 'react';

import {Link} from 'react-router-dom';

export function ChannelList(props) {
  const { channelNames, currentChannel } = props;

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
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}