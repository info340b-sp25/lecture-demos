export default function ChannelNav(props) {
    const channelNameArray = ['general', 'social', 'memes', 'birds',
        'birthdays', 'random'];

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