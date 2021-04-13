import { Container } from './Styles';
import { SectionOneComponent } from '../section-structure/section-one/SectionOne';
import { SectionFourComponent } from '../section-structure/section-four/SectionFour';

const FinalPage = () => {

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Resultado</h2>
            <Container className='structure-container rounded cursor-pointer'>
                <SectionOneComponent />
                <SectionFourComponent />
        
            </Container>
        </div>
    );
}

export default FinalPage;