import {createStore} from 'redux';
import { icecreamReducer } from './icecreamReducer';

export const icecreamStore = createStore(icecreamReducer);