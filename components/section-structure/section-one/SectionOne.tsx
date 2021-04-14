import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';

import { PrincipalContext } from '../../../context/Context';
import { Container } from './Styles';

const SectionOne = () => {
    const { setSectionOne } = useContext(PrincipalContext);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Header</h2>
            <Container>
                <ShapeOne setComponent={() => setSectionOne('one')} />
                <ShapeTwo setComponent={() => setSectionOne('two')} /> 
            </Container>
        </div>
    );
}

export default SectionOne;


export const SectionOneComponent = () => {
    const { sectionOne } = useContext(PrincipalContext);

    const renderSection = {
        'one': <ShapeOne />,
        'two': <ShapeTwo />,
    };
    return (
        <>
            {renderSection[sectionOne]}
        </>
    );
};
