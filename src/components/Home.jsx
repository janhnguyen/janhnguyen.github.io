import React from 'react';
import '../styling/Home.css';

function Home() {
    return (
        <div>
            <div className="twitch-embed">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    src="https://player.twitch.tv/?channel=doranis_&parent=janhnguyen-github-io.vercel.app" //replace parent with domain
                    height="480"
                    width="800"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
