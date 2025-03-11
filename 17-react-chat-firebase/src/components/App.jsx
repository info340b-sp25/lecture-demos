import React, {useEffect, useState} from 'react';

import {getDatabase, 
  ref as firebaseRef, 
  set as firebaseSet,
  push as firebasePush,
  onValue} from 'firebase/database'

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

  const dbRef = getDatabase();

  const test_value_ref = firebaseRef(dbRef, "test_value")
  firebaseSet(test_value_ref, "This is test data")

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads!
  useEffect(() => {
    // RUN ONCE TO get some messages in my db
    // for each message, add it to the database:
    // const dbRef = getDatabase();
    // const allMessagesRef = firebaseRef(dbRef, "allMessages")
    // INITIAL_CHAT_LOG.forEach((message) => {
    //   firebasePush(allMessagesRef, message)
    // })

    const dbRef = getDatabase();
    const allMessagesRef = firebaseRef(dbRef, "allMessages");

    // this is like addEventListener(...)
    const unregisterAllMsgFn = onValue(allMessagesRef, (snapshot) => {
      console.log('all messages data changed')
      const dataObj = snapshot.val();
      console.log('dataObj', dataObj);

      // update the messageStateArray
      // Turn the dataObj into an array
      const newMsgArray = Object.keys(dataObj).map((keyString) => {
        return dataObj[keyString]
      })
      
      setMessageStateArray(newMsgArray);
    })


    //log in a default user
    changeUser(DEFAULT_USERS[1])

    //cleanup function for when component is removed
    function cleanup() {
      unregisterAllMsgFn(); //unregister the database listenr
    }
    
    return cleanup;
  }, []) //array is list of variables that will cause this to rerun if changed

  const changeUser = (userObj) => {
    console.log("changing user to", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/'); //go to chat after login
    }
  }

  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }
    const dbRef = getDatabase();
    const allMessagesRef = firebaseRef(dbRef, "allMessages")
    firebasePush(allMessagesRef, newMessageObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="/about" element={ <Static.AboutPage /> } />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:chanName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              addMessageFunction={addMessage}
              />
          } />
        </Route>
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  const {currentUser} = props;

  //...determine if user is logged in
  if(currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;