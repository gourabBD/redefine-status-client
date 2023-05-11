import React from 'react';
import IntroSection from './allSections/IntroSection';
import AllSections from './allSections/AllSections';

const Home = () => {
    return (
        <div className='min-h-screen mt-5  '>
           

           <IntroSection></IntroSection>
           
           <AllSections></AllSections>
        </div>
    );
};

export default Home;