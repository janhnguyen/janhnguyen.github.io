import React, {useState} from 'react';
import '../styling/Projects.css';
import PartyFinder from './projects/PartyFinder'
import ChatReader from './projects/TwitchChatReader'
import ProjectHome from './projects/ProjectHome'
import GodotGame from './projects/GodotGame'
import SocialMedia from './projects/SocialMedia'
import Livestream from './projects/Livestream'
import MechanicalKeyboards from "./projects/MechanicalKeyboards";

function Projects() {

    const [activeComponent, setActiveComponent] = useState('home');

    const renderContent = () => {
        switch (activeComponent) {
            case 'partyFinder':
                return <PartyFinder />;
            case 'chatReader':
                return <ChatReader />;
            case 'godotGame':
                return <GodotGame />;
            case 'socialMedia':
                return <SocialMedia />;
            case 'livestream':
                return <Livestream />;
            case 'mechKeyboards':
                return <MechanicalKeyboards />
            default:
                return <ProjectHome/>
        }
    };

    return (
        <div className='project-container'>
            <div className='project-side-nav'>
                <button className="project-side-button" onClick={() => setActiveComponent('home')}>
                    Project Home
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('partyFinder')}>
                    Party Finder
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('chatReader')}>
                    Twitch Chat Reader
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('godotGame')}>
                    Godot Game
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('socialMedia')}>
                    Social Media Website
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('livestream')}>
                    Livestreaming
                </button>
                <button className="project-side-button" onClick={() => setActiveComponent('mechKeyboards')}>
                    Mechanical Keyboards
                </button>
            </div>
            <div className='project-display'>
                <p>{renderContent()}</p>
            </div>
        </div>
    );
}

export default Projects;
