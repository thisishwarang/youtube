import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';


export default function VideoCard({video}) {
    const navigate = useNavigate();
    const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
    const handleClick = () => {
        navigate(`/videos/watch/${video.id}`, {state: {video}});
    }
    return (
        <li onClick={handleClick}>
            <img className='w-full' src={thumbnails.medium.url} alt={title}/>
            <div>
                <p className='font-semibold my-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    );
}

