import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

// "user stories": 5 points
// GOAL: As a user, I want to be able to switch between different profiles that
// I'm logged into by pressing icons in the upper-right, so that I can send
// messages as the profile that I'm logged into

// Implementation
// 1. Make a state variable that tracks which profile I'm logged into 
//    (will need a default).
//     WHERE SHOULD THIS STATE VARIALBE GO!!!! ChatPane and HeaderBar both need it
//    *we'll probably put this in App.jsx* 🎉
// 2. Change the HeaderBar to switch between profiles with a button press 🎉
// 3. Change my ComposeForm to send messages as the profile I'm logged into
//    (this would also involve changing our "addMessage" function) 🎉
// 4. (bonus): change the ChatPane to show what profile I'm logged in as.
//    (alt): change the headerBar to have a green border around the "logged-in" profile

function App(props) {

  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"]
  const currentChannel = "general";

  const DEFAULT_USERS = [
    {userId: null, userName: null, userImg: '/img/null.png'}, //null user
    {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
    {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
    {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
  ]

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]);

  console.log("currentUser", currentUser);
  const changeCurrentUser = (newUser) => {
    setCurrentUser(newUser);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar changeCurrentUser={changeCurrentUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentUser={currentUser} currentChannel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default App;