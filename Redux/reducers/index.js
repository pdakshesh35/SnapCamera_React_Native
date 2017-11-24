import {combineReducers} from 'redux';
import LibraryList from './LibraryList';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    libraries : LibraryList,
    seletedLibraryId : SelectionReducer
});