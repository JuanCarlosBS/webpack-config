import React from 'react';
import ReactDOM from 'react-dom';

const hi = "Hello World";

ReactDOM.render(
    (<div>{hi}</div>),
    document.querySelector('#app')
)
  
console.log('Funcionou tudo junto!')