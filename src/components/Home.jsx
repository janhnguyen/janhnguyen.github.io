import React from 'react';
import '../styling/Home.css';

function Home() {
    return (
        <div>
            <div className="twitch-embed">
                <iframe
                    src="https://player.twitch.tv/?channel=doranis_&parent=janhnguyen.github.io" //replace parent with domain
                    height="480"
                    width="800"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
