import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Title.css'

function Socials() {
    return (
        <div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="twitter" iconSize="5" roundness="50%"/>
            </div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="googleplus" iconSize="5" roundness="50%"/>
            </div>
            <div className="socials">
               <SocialMediaIconsReact className= "icons" icon="youtube" iconSize="5" roundness="50%"/>
            </div>
        </div>
        
    );
//   return (
//     <MDBContainer>
//       <MDBBtn size="lg" tag="a" floating social="tw">
//         <MDBIcon fab icon="twitter" />
//       </MDBBtn>
//       <MDBBtn size="lg" tag="a" floating social="gplus">
//         <MDBIcon fab icon="google-plus-g" />
//       </MDBBtn>
//       <MDBBtn size="lg" tag="a" floating social="ins">
//         <MDBIcon fab icon="instagram" />
//       </MDBBtn>
//       <MDBBtn size="lg" tag="a" floating social="yt">
//         <MDBIcon fab icon="youtube" />
//       </MDBBtn>
//     </MDBContainer>
//   );
}

export default Socials;