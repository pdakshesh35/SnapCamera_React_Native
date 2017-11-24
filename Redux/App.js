import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import LibraryList from './component/LibraryList';


const App =() => {

    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <LibraryList/>
        </Provider>
    );

};

export default App;