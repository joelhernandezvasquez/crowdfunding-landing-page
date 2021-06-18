import React from 'react';
import Hero from './Hero';
import MasterCraftBambo from './MasterCraftBambo';
import BacketStats from './BacketStats';
import AboutProject from './AboutProject';
import BackedStatsState from '../ContextApi/Backed/BackedStatsState';

const App = () => {
    return (
        <BackedStatsState>
            <Hero/>
            <MasterCraftBambo/> 
            <BacketStats/>
            <AboutProject/>
        </BackedStatsState>
    )
}

export default App;
