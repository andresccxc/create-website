import { useDispatch } from 'react-redux';
import { setShapeOne } from '../../../redux/structure/actions';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import ShapeThree from './components/ShapeThree';
import ShapeFour from './components/ShapeFour';
import ShapeFive from './components/ShapeFive';
import ShapeSix from './components/ShapeSix';
import { Container } from './Styles';

const SectionForm = () => {
    const dispatch = useDispatch();
    const changeComponent = (shape: string) => dispatch(setShapeOne({ section: 'section-one', path: shape }));

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura de la sección 1</h2>
            <Container>
                <ShapeOne setPath={() => changeComponent('ShapeOne')} />
                <ShapeTwo setPath={() => changeComponent('ShapeTwo')} />
                <ShapeThree setPath={() => changeComponent('ShapeThree')} />
                <ShapeFour setPath={() => changeComponent('ShapeFour')} />
                <ShapeFive setPath={() => changeComponent('ShapeFive')} />
                <ShapeSix setPath={() => changeComponent('ShapeSix')} />
            </Container>
        </div>
    );
}

export default SectionForm;