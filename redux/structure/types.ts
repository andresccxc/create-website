export enum ActionKeys {
    SET_SECTION = 'SET_SECTION',
    SET_SHAPE_ONE='SET_SHAPE_ONE',
};

export interface SetSection {
    type: ActionKeys.SET_SECTION,
    payload: any
};

export interface SetShapeOne {
    type: ActionKeys.SET_SHAPE_ONE,
    payload: any
};

export type StructureActions = SetSection | SetShapeOne;