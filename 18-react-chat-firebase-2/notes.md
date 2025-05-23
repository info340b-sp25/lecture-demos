# Authentication
  - textbook is helpful

- Realtime database (not firestore)
  - (us-central is fine)
  - security rules -- by default, everything's locked, we'll start in "test" mode, everything's allowed for the next month
  - reenable later!!

- Keep the database tab open
  - Think of it as a giant json object in the cloud
  - we can add key/value pairs to our database (firstName, lastName) from the web console

- Get a reference to the database
  - `import { getDatabase } from 'firebase/database'`
  - don't worry about calling multiple times, it's just getting a URL
  - log it
  - `ref` gets us a location for a specific piece of the database
    - `ref(database, "key_interested_in")` -- do 'message'
    - nested objects with slashes "people/sarah/firstName" instead of dot syntax

## Writing Data
- import { ref, set as firebaseSet } from 'firebase/database'
- get a reference to where the data is
- get new data values
- firebaseSet(ref, newValue)

- We have "push", also, pushing into an object instead of replacing it
  - this avoids race conditions -- indicies might not refer to the right thing. That's why everything's an object
  - import { getDatabase, ref, push as firebasePush } from 'firebase/database';
  - firebasePush(taskRef, {description:'First things first'} ) //add one task

## Listeners
- Event listeners are doable -- onValue(ref, callback)
  - callback takes `snapshot` as an argument, the latests snapshot of the data value at the listening location
  - convert into an object with .val()
- register listener in effect hook for managing the database
  - cleanup function needs to remove listener (otherwise you've got a memory leak switching routes)
  - onValue() returns a unregisterFunction
- demo with AllMessagesRef, callback gets snapshot.val()
  - then Object.keys(snapshot.val())
  - map to get the value at each key
  - set React state

- Design complexity shows up with 1) what state, 2) stored where

# Authentication
- Firebase Console -> build -> authentication
- we can choose a few providers (email/password, we check and allow)
- Turn off additional security when testing (settings -> user actions -> remove email enum protection)
- Can't store generic data, just username/password
- firebaseui-web library helps with login form
  - there's bindings to work with react, but never updated with current react version, basically abandoned; (see slides workarounds)

- <StyledFirebaseAuth /> takes two props
  - firebaseAuth={} 
    - `import {getAuth} from 'firebase/auth'`
    - `authenticator = getAuth()
  - uiConfig={configObj}
    - complicated, textbook has a nice starter spot (copy paste from there)
    - Providers are a bunch of specific numbers (import in)
    - other options are ease (popups let us keep state)
    - callback -- when the user signed in, don't do anything special (you could have an initial data form, redirect to a different page, etc)
- make up an email for testing (a@a.com), easy passwords (terriblepassword)

- Similar to database, similar concept -- useListener for when users sign-in (update currentUser)
  - `onAuthStateChanged` from "firebase/auth"
    - takes auth (from getAuth), callback takes (firebaseUser)
      - if user's defined, someone logged in; if it's null, someone logged out
      - Add more fields to firebaseUserObb that you get back so setCurrentUser works
      - you can check if currentUser is null, show the login page if so
    - when the state of user's authentication changes, fire this event
  - it's a sideEffect, set up in an effect hook

# Storing Images
- We need to use "storage" for firebase. Now requires a credit card :(
- You can store images as strings in the RTDB
- You should use something better than this for "real projects"
