App.js -- switch from simple text to comments of modules, all within a div
  - HeaderBar
  - Channel List
  - Message Pane
    - MessageItem
    - ComposeForm

Go component by component, make each in it's own file
- HeaderBar first (define in separate file), get an error, then export/import it
- Channel List, just writing out HTML, get it included, then do some styling
  - Instead of writing out list items, we can generate with an array
  - CHANNEL_NAMES = [], then map to a list of LI elements
    ```js
    elemArray = CHANNEL_NAMES.map((channelNameString) 
      => {
        const transformed = (
        );
        return transformed.
      })
    ```
  - You'll get warning about keys, fix immediately, give key that's the channel name

- Messages & Message Pane
  - MessageItem in same module, they're only used together, just make our life easier
  - image, paragraph name, then paragraph "text"
  - source images from 'img/Eagle.png', give alt next
  - Then, add styling, we want text next to image, use a flexbox (put in a div, className='d-flex')
  - Then, write some CSS, give whole thing a class of "message"
    - .message img (css)
    - bold the name in HTML
  - Then, we can make multiple messages, customize with props (userName, text)
    - Passed into component, console.log, then destructure them, then replace
    - Often, we'll define data somewhere else, then import it in (chat_log.json, fake messages to text)
    - json, we can import as if it was a module as a default import (`../data/chat_log.json`)
    - Then, just pass in "messageData" prop, it's easier
  - Then, again, switch back to using map from the chat log instead of going element by element
    - Use the timestamp as a key, it's more unique than the name
- Then, put the channelList and Message pane in a flexbox div in App.js
- ComposeForm in a separate file
  - (just copy paste from notes)
  - export it, import it; import it into message pane
