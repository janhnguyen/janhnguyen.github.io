import React from 'react';
import '../../styling/Livestream.css'

function Livestream() {
    return (
        <div className='homepage-container'>

            <h1>Livestreaming</h1>

            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
                src="https://player.twitch.tv/?channel=doranis_&parent=janhnguyen-github-io.vercel.app"
                height="480"
                width="720"
                allowFullScreen>
            </iframe>

            <br/>

            <div className='livestream-text'>
                I stream as a hobby, mainly playing games I enjoy or just chatting. I began livestreaming in November of 2024, reaching the top 0.2% of all Twitch livestreams in terms of metrics within a few months.
            </div>

        </div>
    );
}

export default Livestream;
