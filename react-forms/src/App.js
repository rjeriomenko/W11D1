import React from 'react';
import {Route} from 'react-router-dom';
import Form from './form.js';

function App() {
  return (
    <>
    <h1>Hello world!</h1>
    <Route component={Form} />
    </>
    
  );
}

export default App;
