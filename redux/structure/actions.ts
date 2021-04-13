import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from "../rootReducer";
import { ActionKeys, SetSection, StructureActions, SetShapeOne } from './types';
const { SET_SECTION, SET_SHAPE_ONE } = ActionKeys;


export const setSection = (section: any): ThunkAction<Promise<void>, RootState, {}, StructureActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, StructureActions>) => {
        dispatch(setSectionAction(section));
    }
};


export const setShapeOne = (shape: any): ThunkAction<Promise<void>, RootState, {}, StructureActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, StructureActions>) => {
        dispatch(setShapeOneAction(shape));
    }
};


export const setSectionAction = (section: any): SetSection => ({
    type: SET_SECTION,
    payload: section
});

export const setShapeOneAction = (shape: any): SetShapeOne => ({
    type: SET_SHAPE_ONE,
    payload: shape
});