function App() {
    var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
    var JSX = <div>
                    <div style = {estilo}>
                        <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 5</div>
                        <div className = "myDiv">
                            <h1>Add a class to this div</h1>
                        </div>
                    </div>
                    <div style = {estilo}>
                        <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 6</div>
                        <h2>Welcome to React!</h2> <br />
                        <p>Be sure to close all tags!</p>
                        <hr />
                    </div>
                    <div style = {estilo}>
                        <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 7</div>
                        <h2>Welcome to React!</h2> <br />
                        <p>Be sure to close all tags!</p>
                        <hr />
                    </div>
                </div>
    
    return (
        JSX
    );
}


    
export default App;