import { useSelector } from 'react-redux';
import PageStructure from '../components/page-structure/PageStructure';
import FinalPage from '../components/final-page/FinalPage';
import dynamic from 'next/dynamic';
import SectionOne from '../components/section-structure/section-one/SectionOne';
import SectionTwo from '../components/section-structure/section-two/SectionTwo';

const Home = () => {
  const { currentSection: { name, path } } = useSelector((state: any) => state.structure);
  const url = `../components/section-structure/${name}/${path}`;
  const Section = dynamic(() => import(`../components/section-structure/${name}/${path}`));
  const render:any = {
    'section-one': <SectionOne />,
    'section-two': <SectionTwo />
  }

  return (
    <div className='p-20 border-black border-2 flex justify-around'>
      <PageStructure />
      <Section /> 
      {/* {render[name]} */}
      <FinalPage />
    </div>
  )
}

export default Home;
