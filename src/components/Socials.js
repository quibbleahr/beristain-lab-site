import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Title.css'

function Socials() {
    return (
        <div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="twitter" iconSize="2" roundness="50%"/>
            </div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="googleplus" iconSize="2" roundness="50%"/>
            </div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="youtube" iconSize="2" roundness="50%"/>
            </div>
        </div>
        
    );
}

export default Socials;