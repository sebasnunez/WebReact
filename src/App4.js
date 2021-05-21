const MyComponent = function() {
    var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
    // Change code below this line
    return (
    <div>
        <div style = {estilo}>
            <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 8</div>
            Retornando un div con texto desde una funcion
        </div>
    </div>
    )
  
  
    // Change code above this line
  }

  export default MyComponent;