import React from 'react';
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 10</div>
                <h1>I am the parent</h1>
                { /* Change code below this line */ }
                <ChildComponent />
                { /* Change code above this line */ }
            </div>

          
        </div>
      );
    }
  };

  export default ParentComponent;