import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import ShapeThree from './components/ShapeThree';
import ShapeFour from './components/ShapeFour';
import ShapeFive from './components/ShapeFive';
import ShapeSix from './components/ShapeSix';
import { PrincipalContext } from '../../../context/Context';
import { Container } from './Styles';

const SectionOne = () => {
    const { setSectionOne } = useContext(PrincipalContext);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura de la sección 1</h2>
            <Container>
                <ShapeOne setComponent={() => setSectionOne('one')} />
                <ShapeTwo setComponent={() => setSectionOne('two')} />
                <ShapeThree setComponent={() => setSectionOne('three')} />
                <ShapeFour setComponent={() => setSectionOne('four')} />
                <ShapeFive setComponent={() => setSectionOne('five')} />
                <ShapeSix setComponent={() => setSectionOne('six')} />
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
        'three': <ShapeThree />,
        'four': <ShapeFour />,
        'five': <ShapeFive />,
        'six': <ShapeSix />,
    };
    return (
        <>
            {renderSection[sectionOne]}
        </>
    );
};
