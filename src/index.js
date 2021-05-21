import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(<React.StrictMode>
    <App2 />
  </React.StrictMode>
    ,
    document.getElementById('challenge-node')
);
ReactDOM.render(<React.StrictMode>
    <App3 />
  </React.StrictMode>
    ,
    document.getElementById('root1')
);
ReactDOM.render(<React.StrictMode>
  <App4 />
</React.StrictMode>
  ,
  document.getElementById('root2')
);
ReactDOM.render(<React.StrictMode>
  <App5 />
</React.StrictMode>
  ,
  document.getElementById('root3')
);
ReactDOM.render(<React.StrictMode>
  <App6 />
</React.StrictMode>
  ,
  document.getElementById('root4')
);
ReactDOM.render(<React.StrictMode>
  <App7 />
</React.StrictMode>
  ,
  document.getElementById('root5')
);
ReactDOM.render(<React.StrictMode>
  <App8 />
</React.StrictMode>
  ,
  document.getElementById('root6')
);

//Ejercicio 13
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
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 13</div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                <Vegetables />
                {/* Change code above this line */}
            </div>
      </div>
    );
  }
};

// Change code below this line

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node 2'));

//Ejercicio 14

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div style = {estilo}>
          <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 14</div>
          <h1>
            My First React Component!
          </h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node 3'));

ReactDOM.render(<React.StrictMode>
  <App9 />
</React.StrictMode>
  ,
  document.getElementById('root7')
);
ReactDOM.render(<React.StrictMode>
  <App10 />
</React.StrictMode>
  ,
  document.getElementById('root8')
);
ReactDOM.render(<React.StrictMode>
  <App11 />
</React.StrictMode>
  ,
  document.getElementById('root9')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals