import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props){
    console.log(INITIAL_CHAT_LOG)

    // What I want is to take the array objects
    //   [ {"userId": "penguin", ...}, ...]
    // And I want an array of <MessageItem>s

    const messageElemArray = INITIAL_CHAT_LOG.map((chatObj) =>{
        return (
            <MessageItem 
                key={chatObj.timestamp + chatObj.userId} 
                messageData={chatObj}
            />
        )
    })

    return(
        <div>
            {messageElemArray}
        </div>
    )
}

function MessageItem(props){
    const {messageData} = props;
    console.log("messageData is", messageData)
    const {text, userName, userImg } = messageData;

    const handleClick = (event) => {
        console.log("clicked on user " + userName + "!!");
    }

    return(
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
