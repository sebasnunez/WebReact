import React from 'react';
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 16</div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Change code below this line */ }
                <List tasks={["walk dog", "workout"]}/>
                <h2>Tomorrow</h2>
                <List tasks={["walk dog", "workout", "Work in the job"]}/>
                { /* Change code above this line */ }
            </div>
        </div>
      );
    }
  };
  export default ToDo;