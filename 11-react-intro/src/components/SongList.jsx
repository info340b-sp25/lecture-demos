function SongItem(props){
    const {artist, title} = props;
    return (
        <li>{artist} - {title}</li>
    )
}

export function SongList(props){
    const songArray= [
        {artist: "Taylor Swift", title: "Cruel Summer"},
        {artist: "David Bowie", title: "Starman"},
        {artist: "Kendrick Lamar", title: "Not Like Us"}
    ]

    const songItemArray = songArray.map( (songInfo) => {
        const {artist, title} = songInfo;
        return (
            <SongItem artist={artist} title={title} />
        )
    })

    return (
        <ul>{songItemArray}</ul>
    )
}