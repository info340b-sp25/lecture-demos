import INITIAL_CHAT_LOG from '../data/chat_log.json' 

export default function MessagePane(props) {

    // What I want is to take the Array of message object
    // {'user-id':..., 'message':...}
    // and turn those into an array of MessageItem

    const messageElemArray = INITIAL_CHAT_LOG.map((chatObj) => {
        return (
            <MessageItem
                key={chatObj.timestamp + chatObj.userId}
                messageData={chatObj}
            />
        )
    })

    return (
        <div>
            {messageElemArray}
        </div>
    )
}

function MessageItem(props) {
    const {messageData} = props;
    // const data = props.messageData;

    // "userId": "penguin",
    //   "userName": "Penguin",
    //   "userImg": "/img/Penguin.png",
    //   "text": "It's so cold out today!",
    //   "timestamp": 1320161040000,
    //   "channel": "general"
    const {text, userName, userImg} = messageData;

    const handleClick = (event) => {
        console.log("clicked on user", userName);
    }

    return (
        <div className="message d-flex mb-3">
            <div className="me-2">
                <img onClick={handleClick} src={userImg} />
            </div>
            <div>
                <p className="user-name">{userName}</p>
                <p>{text}</p>
            </div>
        </div>
    )

}