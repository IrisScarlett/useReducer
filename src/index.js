// import React from 'react';
// import ReactDOM from 'react-dom';
// import { MemoHook } from './components/06-memos/MemoHook';
// // import { FormWithCustoomHook } from './components/02-useEffect/FormWithCustomHook';
// // import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// // import { FocusScreen } from './components/04-useRef/FocusScreen';
// // import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// // import { Layout } from './components/05-useLayoutEffect/Layout';
// // import { Memorize } from './components/06-memos/Memorize';
// // import { SimpleForm } from './components/02-useEffect/SimpleForm';
// // import { CounterApp } from './components/01-useState/CounterApp';
// // import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// // import { HookApp } from './HookApp';


// ReactDOM.render(
  
//     <MemoHook />,
//   document.getElementById('root')
// );

//Despues

import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FormWithCustoomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';


const container = document.getElementById('root');

const root =  createRoot(container);

root.render(
    <BrowserRouter>
    <MainApp />
    </BrowserRouter>
    
);

