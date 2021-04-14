import React, { useContext } from 'react';
import Head from 'next/head';
import PageStructure from '../components/page-structure/PageStructure';
import FinalPage from '../components/final-page/FinalPage';
import SectionOne from '../components/section-structure/section-one/SectionOne';
import SectionTwo from '../components/section-structure/section-two/SectionTwo';
import SectionThree from '../components/section-structure/section-three/SectionThree';
import SectionFour from '../components/section-structure/section-four/SectionFour';
import { PrincipalContext } from '../context/Context';

const renderSection: any = {
  'section-one': <SectionOne />,
  'section-two': <SectionTwo />,
  'section-three': <SectionThree />,
  'section-four': <SectionFour />
}


const Home = () => {
  const { section } = useContext(PrincipalContext);

  return (
    <div className='p-10 flex justify-around'>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" crossOrigin="anonymous" />
      </Head>
      <PageStructure />
      {renderSection[section]}
      <FinalPage />
    </div>
  )
}

export default Home;
