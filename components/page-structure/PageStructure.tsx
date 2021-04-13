import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../../redux/structure/actions';
import { Container } from './Styles';

const Structure = ({ }) => {
    const dispatch = useDispatch()
    const { currentSection } = useSelector((state: any) => state.structure);
    const getClassName = (className) => className === currentSection.name && 'current-section';
    const changeSection = (name: string, path) => {
        dispatch(setSection({ name, path }));
    };


    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-2xl mb-5'>Estructura de la página</h1>
            <Container className='structure-container rounded cursor-pointer'>
                <div className={`section flex justify-center items-center ${getClassName('section-one')}`}
                    onClick={() => changeSection('section-one', 'SectionOne')}
                >
                    Sección 1
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-two')}`}
                    onClick={() => changeSection('section-two', 'SectionTwo')}
                >
                    Sección 2
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-three')}`}
                    onClick={() => changeSection('section-three', 'SectionThree')}
                >
                    Sección 3
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-four')}`}
                    onClick={() => changeSection('section-four', 'SectionFour')}
                >
                    Sección 4
                </div>
            </Container>
        </div>

    );
}

export default Structure;