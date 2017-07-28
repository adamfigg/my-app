import React, { Component } from 'react';
import steph from './steph-profile.png';

import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <style>@import url('https://fonts.googleapis.com/css?family=Yellowtail');</style>
                <style>@import url('https://fonts.googleapis.com/css?family=Quicksand');</style>
                <div className="rob">
                    <h1 className="about-welcome">About The Artist</h1>
                    <img className="artist-pic" src={steph} alt="Steph and Dave"></img>
                    <p className="about-text1"> Stephanie Figgat draws inspiration from her travels around the world and loves to capture the 
                        often looked over. She draws much of her inspiration from local secret destinations and 
                        the best of the tucked away European countryside.</p>
                    <h2 className="about-custom">Want something custom?</h2>
                    <p className="about-text2"> If you're interested in requesting a commissioned 
                        painting, please feel free to contact her on <a href="https://www.facebook.com/stephanie.hartfiggat">Facebook 
                        messanger</a> or email steph@carlsbadcottage.com.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;