const VideoCard =({info})=>{
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet 

    console.log(info, 'snippet inform')
    return (
        <div className="p-2 m-2 w-52 shadow-lg">
            <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg"/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard