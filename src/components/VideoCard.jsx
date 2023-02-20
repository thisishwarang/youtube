import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';


export default function VideoCard({video, type}) {
    const navigate = useNavigate();
    const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
    const isList = type === 'list';
    const handleClick = () => {
        navigate(`/videos/watch/${video.id}`, {state: {video}});
    }
    return (
        <li className={isList ? 'flex gap-1 m-2' : ''} onClick={handleClick}>
            <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title}/>
            <div>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    );
}

