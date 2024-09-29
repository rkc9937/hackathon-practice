import React from 'react';
import LabelBottomNavigation from './Landing_Subcomponents/LabelBottomNavigation.jsx';
import MainContent from './Landing_Subcomponents/MainContent.jsx';
import ButtonAppBar from './Landing_Subcomponents/ButtonAppBar.jsx';
// import Landing from './Landing';
// import Sender from './Sender';

function Landing(){
    return(
        <article>
            <div>
                <ButtonAppBar />
            </div>

           <div>
                <MainContent />
           </div>

           <div className='Footer'>
                <LabelBottomNavigation />
           </div>
        </article>
    )
}
export default Landing;