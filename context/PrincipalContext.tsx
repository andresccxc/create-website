import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const PrincipalContext = createContext(null);

const PrincipalProvider = ({ children }) => {

    const [section, setSection] = useState<string>('section-one');
    const [sectionOne, setSectionOne] = useState('');
    const [sectionTwo, setSectionTwo] = useState('');
    const [sectionThree, setSectionThree] = useState('');
    const [sectionFour, setSectionFour] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('http://localhost:3000/api/data');
            setData(data);
        }
        getData();
    }, []);

    const value = {
        section, data, setSection, sectionOne, setSectionOne,
        sectionTwo, setSectionTwo, sectionThree, sectionFour,
        setSectionThree, setSectionFour
    };

    return (
        <PrincipalContext.Provider value={value}>
            {children}
        </PrincipalContext.Provider>
    );
}

export default PrincipalProvider;
