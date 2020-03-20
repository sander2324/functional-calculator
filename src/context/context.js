import { createContext } from 'react';

import initialState from './initial';

const InputContext = createContext(initialState);

export default InputContext;
