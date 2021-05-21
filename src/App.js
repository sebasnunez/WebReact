
function App() {
var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
var JSX =<div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 1</div>
                <h1>
                    Hello JSX!
                </h1>
            </div>
            <div style = {estilo}>
            <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 2</div>
            <h1>H1</h1>
            <p>P</p>
            <ul>
                <li>Li1</li>
                <li>Li2</li>
                <li>Li3</li>
            </ul>
            </div>
            <div style = {estilo}>
            <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 3</div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
            {/*Comentario*/}
            </div>
        </div> 
  return (
    JSX
  );
}

export default App;
