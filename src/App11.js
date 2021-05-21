var estilo = {display: 'grid',justifyItems: 'center',borderWidth: 5, borderColor: 'gray', borderStyle: 'solid', width: '100%', height: 'auto'};
const ShoppingCart = (props) => {
    return (
      <div>
            <div style = {estilo}>
                <div style = {{fontSize: 50, fontStyle: 'bold', color: 'blue'}}>Ejercicio 17</div>
                <h1>Shopping Cart Component</h1>
            {props.items}
            </div>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = { items: 0}
  export default ShoppingCart;