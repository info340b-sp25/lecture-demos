export function ChannelNav(props){
    const channelNameArray = ['general', 'social', 'birds',
        'channel-4', 'birthdays'];

    // Go from Array of strings -> Array of <li>s
    const liElemArray = channelNameArray.map((channelName) => {
        return (
            <li key={channelName}>{channelName}</li>
        )
    })


    return (
        <nav className="bg-secondary text-light">
            <ul>
                {liElemArray}
            </ul>
        </nav>
    )
}