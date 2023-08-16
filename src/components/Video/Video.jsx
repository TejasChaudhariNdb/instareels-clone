import React,{useRef} from 'react';
// import ReactDOM from 'react-dom';
import { useStyles } from './Style.js';

function Video(props) {

    const classes = useStyles();
    const videoRef = useRef(null);
    const handleMute = (e) => {
        e.preventDefault();
        e.target.muted = !e.target.muted;
    }

    // const handleAutoScroll = (e) => {
    //     let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
    //     console.log(next);
    //     if (next) {
    //         next.scrollIntoView({ behaviour: 'smooth' });
    //         e.target.muted = true;
    //     }
    // }

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;  // Set currentTime to 0
            videoRef.current.play();  // Start playing the video
        }
    }



    return (
        <>
            <video
                className={classes.videoStyles}
                // onEnded={handleVideoEnded}
                onClick={handleMute}
                controls
                muted='muted'
                type='video/mp4'
                autoPlay
                ref={videoRef}
            >
                <source
                    src={props.source}
                    type='video/webm'
                />
            </video>
        </>
    );
}

export default Video;
