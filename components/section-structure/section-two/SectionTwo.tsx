import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import ShapeThree from './components/ShapeThree';
import ShapeFour from './components/ShapeFour';
import ShapeFive from './components/ShapeFive';
import ShapeSix from './components/ShapeSix';
import { PrincipalContext } from '../../../context/Context';
import { Container } from './Styles';

const SectionTwo = () => {
    const { setSectionTwo } = useContext(PrincipalContext);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Main</h2>
            <Container>
                <ShapeOne setComponent={() => setSectionTwo('one')} />
                <ShapeTwo setComponent={() => setSectionTwo('two')} />
                <ShapeThree setComponent={() => setSectionTwo('three')} />
                <ShapeFour setComponent={() => setSectionTwo('four')} />
                <ShapeFive setComponent={() => setSectionTwo('five')} />
                <ShapeSix setComponent={() => setSectionTwo('six')} />
            </Container>
        </div>
    );
}

export default SectionTwo;



export const SectionTwoComponent = () => {
    const { sectionTwo } = useContext(PrincipalContext);

    const renderSection = {
        'one': <ShapeOne />,
        'two': <ShapeTwo />,
        'three': <ShapeThree />,
        'four': <ShapeFour />,
        'five': <ShapeFive />,
        'six': <ShapeSix />,
    };
    return (
        <>
            {renderSection[sectionTwo]}
        </>
    );
};
