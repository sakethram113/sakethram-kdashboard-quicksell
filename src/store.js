import {configureStore} from '@reduxjs/toolkit';
import { dataReducer as DataReducer, selectDataReducer as SelectDataReducer } from './Reducers/DataReducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;