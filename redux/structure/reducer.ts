import { ActionKeys, StructureActions } from './types';
const { SET_SECTION, SET_SHAPE_ONE } = ActionKeys;

interface StructureState {
    sectionOnePath: any;
    currentSection: string;
};

const initialState: StructureState = {
    sectionOnePath: '',
    currentSection: ''
};

export const reducer = (state: StructureState = initialState, { type, payload }: StructureActions): StructureState => {
    switch (type) {
        case SET_SECTION:
            return {
                ...state,
                currentSection: payload
            };
        case SET_SHAPE_ONE:
            return {
                ...state,
                sectionOnePath: payload
            };
        default: return state;
    }
};