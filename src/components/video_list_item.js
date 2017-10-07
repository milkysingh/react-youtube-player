import React from 'react';

const VideoListItem= (props)=> {
const imageURL=props.videoItem.snippet.thumbnails.default.url;

  
    return (
<li className='list-group-item'  onClick={e=>{
                props.handleSelectedVideo(props.videoItem);
                }}>
    <div className='video-list media'>

        <div className="media-left">
            <img src={imageURL} className="media-object" />
        </div>
        <div className="media-body">
            <div className="media-heading" >

              {props.videoItem.snippet.title}
            </div>
        </div>
    </div>
</li>
    )
}
export default VideoListItem;