import React, { useState, createContext } from 'react';


export const PrincipalContext = createContext(null);

const PrincipalProvider = ({ children }) => {

    const [section, setSection] = useState<string>('section-one');
    const [sectionOne, setSectionOne] = useState('');
    const [sectionTwo, setSectionTwo] = useState('');
    const [sectionThree, setSectionThree] = useState('');
    const [sectionFour, setSectionFour] = useState('');

    const data = {
        section, setSection, sectionOne, setSectionOne,
        sectionTwo, setSectionTwo, sectionThree, sectionFour,
        setSectionThree, setSectionFour
    };

    return (
        <PrincipalContext.Provider value={data}>
            {children}
        </PrincipalContext.Provider>
    );
}

export default PrincipalProvider;
