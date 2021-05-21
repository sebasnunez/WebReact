import React from 'react';
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};

const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 15</div>
                <h3>What date is it?</h3>
                { /* Change code below this line */ }
                <CurrentDate  date={Date()}/>
                { /* Change code above this line */ }
            </div>
        </div>
      );
    }
  };
  export default Calendar;