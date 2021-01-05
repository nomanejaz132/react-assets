import React from 'react'
import ReactPlayer from "react-player";

function ReactVideoPlayer() {
    return (
        <div>
            <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=ckmh6FvHidQ"
                onReady={() => console.log("ON Ready")}
            />
        </div>
    )
}

export default ReactVideoPlayer
