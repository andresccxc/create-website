import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { Container } from './Styles';


const FinalPage = () => {
    const { sectionOnePath: { section, path } } = useSelector((state: any) => state.structure);
    const SectionOne = dynamic(() => import(`../section-structure/${section}/components/${path}`));
 
    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Resultado</h2>
            <Container className='structure-container rounded cursor-pointer'>
                <SectionOne />
            </Container>
        </div>
    );
}

export default FinalPage;