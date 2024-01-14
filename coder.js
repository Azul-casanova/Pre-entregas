const Carrito = []

let ElegirProducto = prompt("Eliga el producto que quiere añadir al carrito");

const AñadirCarrito = function() {
 Carrito.push(ElegirProducto);
}

const ElegirOtroProducto = function() {
    let seguir = confirm("Desea seguir comprando?");
    if(seguir){
        ElegirProducto = prompt("Eliga el producto que quiere añadir al carrito");
        AñadirCarrito();
    }else {
    alert("Lo vamos a redireccionar para pagar");
        }
}



switch(ElegirProducto) {
    case 'Vestido floreado': AñadirCarrito();
    ElegirOtroProducto();
    break;

    case 'Remera azul': AñadirCarrito();
    ElegirOtroProducto();

    break;

    case 'Pantalon Javier Gimenez': AñadirCarrito();
    ElegirOtroProducto();
    break;

    default: alert("No tenemos ningún producto con ese nombre");
    }

