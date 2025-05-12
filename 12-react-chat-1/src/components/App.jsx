import React from 'react';

import HeaderBar from './HeaderBar.jsx';
import ChannelNav from './ChannelNav.jsx';
import MessagePane from './MessagePane.jsx';

// <App />
  // Message Pane (*)
    // MessageItem
    // ComposeForm (maybe, we'll see)
function App(props) {
  return (
    <div className="fluid-container">
      <HeaderBar />
      <div className="row">
        <div className='col-3'>
          <ChannelNav />
        </div>
        <div className='col'>
          <MessagePane />
        </div>
      </div>
    </div>
  );
}

export default App;