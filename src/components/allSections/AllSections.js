import React from 'react';
import FirstSections from './FirstSections';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';

const AllSections = () => {
    return (
        <div className=''>
            <FirstSections></FirstSections>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <FifthSection></FifthSection>
            <SixthSection></SixthSection>
        </div>
    );
};

export default AllSections;