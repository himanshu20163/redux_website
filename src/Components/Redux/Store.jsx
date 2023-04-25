import {legacy_createStore} from 'redux';
import myreducer from './Myreducer';

const mystore = legacy_createStore(myreducer);
export default mystore;