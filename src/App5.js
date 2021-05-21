import React from 'react';
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
class MyComponent extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    render() {
      // Change code below this line
  
    return(
        <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 9</div>
                <h1>Hello React!</h1>
            </div>
        </div>
    )
  
      // Change code above this line
    }
  };

export default MyComponent;