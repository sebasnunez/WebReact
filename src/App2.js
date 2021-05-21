function App() {
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
var JSX = <div>
                <div style = {estilo}>
                    <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 4</div>
                    <h1>Hello World</h1>
                    <p>Lets render this to the DOM</p>
                </div>
            </div>

return (
    JSX
  );
}

export default App;