import { combineReducers } from 'redux';
import { reducer as structureReducer } from './structure/reducer';

export const rootReducer = combineReducers({
    structure: structureReducer
});
export type RootState = ReturnType<typeof rootReducer>;