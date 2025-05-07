Process data, then render data (do these separately, helps organization)

StateArray, load from chat Log, process from state variable instead of chat log (in App)

Make AddMessage (go through chatLog to make sure we have everything we need; 
make a newMessageObj, 
then update message Array with [...messageArray, newMessageObj];
Then, update state with newArray & new function

Start modifying form to test:
- State variable for what the user's typed in
- Controlled form: value={typedInput} onChange={handleChange}

```js
handleChange = (event) => {
  setTypedInput(event.target.value);
}
handleSubmit = (event) => {
  event.preventDefault();
  console.log('form submitted')

  //Add Message
  // Pass down function as prop to composeForm
  // destructure to get out of prop, then call function

  setTypedInput('');
```

## Header Bar user-switching
Buttons that switch between users, array that maps to a series of buttons
- event.currentTarget gives the image, not the button
- Current user is changing as we use an application, need to put it in state
- Could put in HeaderBar, but we want to know who user is everywhere, actually makes sense in App, need to show common ancestor
  - Copy null user for initial starting user, storing entire object so we don't need to do a lookup
- first step, add state variable; second step, change display based on state
  - Pass user down as a prop to headerBar, destructure in headerBar
    - Application should render correctly no matter what the state is
    - Manually change, make sure you get different content
    - Add "bg-success" to headerBar
  - Pass down to chatpane as another prop, pass down, show whatever user that's currently highlighted
    - Again, manually change state variable
- 3rd step, make sure changing state works
  - HeaderBar, change state variable, app needs to pass changeUser function as a prop (not the state setter), make a helper, take newUserObject (the goal is information isolation)
  - Go through all the rerenderings (chat Pane, headerbar)
  - Finally, change the default back
- Not that much code -- it's mostly keeping track of all the different little changes along the way
  - Testing small changes, making sure they work eases complexity

## Component Libraries
- People have built lots of react components, you can use them
- Go to npm, search "React", there's a bunch
- You can often find things (clocks, calendars), all do slightly different things. And, research (recent updates, usage, behavior, etc)

- User switcher -- could just be a drop-down menu, we could do that all ourselves, but those were in bootstrap, maybe we could use those in react
  - You can't just put bootstrap into react; they all use jquery & dom modification, but React needs to control all of that.
  - See react-bootstrap, dropdown effects that work inside react

- Back to slides
  - be careful of names -- there's malicious code very close by
  - package.json gives info, we can npm install, it'll go into node-modules
  - We'll need to import -- some use named, some use defaults, check the documentation (react bootstrap does default imports for buttons, e.g.; lots of examples here)
  - All the way down -- we get the API, what props exist, and what we can do with them (start with examples, peek through docs if you want to do something fancier)
    - add the code in, make it an image instead of "dropdown menu", then add in images instead of items (just change to Dropdown.Item elements, then put in "userButtons" instead of the example code)
  - Also has modals, navbars, etc
    - Start from "here's a widget that I want in my application", go from there
