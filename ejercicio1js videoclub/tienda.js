function crearProducto(nombre,precio,categoria){
    return{
        nombre:nombre,
        precio:precio,
        categoria:categoria
    };
    }
class Tienda{
    constructor(nombre,ciudad){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.productos=[];
    }
    agregarProductos(producto){
        this.productos.push(producto);
        console.log(`producto ${producto.nombre} agregado`);
    }
    mostrarProductos(){
        if(this.productos.length===0){
            console.log("No hay productos");
        }else{this.productos.forEach(producto=>{
            console.log( `producto: ${producto.nombre} 
                            precio: ${producto.precio} 
                            categoria: ${producto.categoria}`)
        });}
        }

        buscarProductos(productoBuscado){
            const productoEncontrado= this.productos.find(producto=>producto.nombre.toLowerCase()===productoBuscado.toLowerCase());
            
            if(productoEncontrado){
                console.log(`El producto ${productoEncontrado.nombre} está en el inventario`);
                return productoEncontrado;
            }else{ console.log(`producto no encontrado`);
                return null;
            }
        }
        filtrarporCategoria(categoriaBuscada){
            const categoriaEncontrada =this.productos.filter(producto=>categoriaBuscada.toLowerCase()===producto.categoria.toLowerCase());
           
            if(categoriaEncontrada.length===0){
                console.log(`La categoria buscada ${categoriaBuscada} no está en la tienda`);
                
            }else{
                console.log("dentro de esta categoria tenemos los siguientes productos: ")
                categoriaEncontrada.forEach(producto=>{console.log(`producto: ${producto.nombre}`)
            });
            return categoriaEncontrada;
            }
        }
            listarNombres() {
                const nombres = this.productos.map(producto=>producto.nombre);
            console.log(nombres);
            return nombres;
            }

            calcularPrecioTotal(acumulador,producto){
                const total= this.productos.reduce((acumulador,producto)=>acumulador+producto.precio,0);
                console.log(`la suma de tods los productos es de ${total} euros`);
                return total;
            }
        }
    
const P1=crearProducto("ordenador",400,"informática");
const P2=crearProducto("gafas",150,"óptica");
const MiTienda=new Tienda("Optica","Valencia");
MiTienda.agregarProductos(P1);
MiTienda.agregarProductos(P2);
MiTienda.buscarProductos("gafas");
MiTienda.mostrarProductos();
MiTienda.listarNombres();