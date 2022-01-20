import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import './Watch.scss';

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                <span className="text">Home</span>
            </div>
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="video"
                autoplay
                progress
                controls
            />
        </div>
    );
};

export default Watch;

