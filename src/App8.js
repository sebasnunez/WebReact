import React from 'react';
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};

const NonCitrus = () => {
    return (
    <div>
        <h4>Non-Citrus:</h4>
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
    </div>
    );
  };
  const Citrus = () => {
    return (
    <div>
        <h4>Citrus:</h4>
            <ul><li>Lemon</li>
            <li>Lime</li>
            <li>Orange</li>
            <li>Grapefruit</li>
        </ul>
    </div>
    );
  };
  const Vegetables = () => {
    return (
    <div>
        <h2>Vegetables:</h2>
        <ul>
            <li>Brussel Sprouts</li>
            <li>Broccoli</li>
            <li>Squash</li>
            </ul>
    </div>
    );
  };



class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
            <NonCitrus />
            <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 12</div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits />
                { /* Change code above this line */ }
                <Vegetables />
            </div>
        </div>
      );
    }
  };
  export default TypesOfFood;