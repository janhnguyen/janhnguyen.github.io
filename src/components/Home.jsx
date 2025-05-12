import React from 'react';
import '../styling/Home.css';
import Selfie from '../assets/selfie.png'

function Home() {
    return (
        <div className='about-container'>
            <div className='about-left'>
                Hi, my name is Jason Nguyen. I'm a 4th year student studying Computer Science at SUNY University at
                Buffalo. This is a personal website I've written to display my many talents, and to give you a brief
                overview of what I am capable of.
                <br/>
                <br/>
                I am proficient in Java, Scala, Go, Python, C, C++, C#, Javascript, GDScript, and am comfortable and
                quick to pick up new languages. I am comfortable with working with Data Structures, Object Oriented
                Programming, Game Design, and Web Design.
                <br/>
                <br/>
                Some of my hobbies include working on and creating mechanical keyboards, developing small projects to automate menial tasks, and livestreaming.
            </div>
            <div className='about-right'>
                <img className='about-selfie' src={Selfie} alt='Headshot'/>
                <br/>
                <a href="/Resume.pdf">
                    Resume
                </a>
            </div>

        </div>

    );
}

export default Home;
