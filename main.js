
class semilla{

    constructor(nombre, temporada, procedencia, unidadesPorPack, stock, precio){
        
        this.nombre=nombre
        this.temporada=temporada
        this.procedencia=procedencia
        this.unidadesPorPack=unidadesPorPack
        this.stock=stock
        this.precio=precio

    }

        hayStock(){

            let error = "Hay stock"
            if(this.stock == false){
                this.stock = true
            }

            else{
                console.log(error)
            }
        }

        sinStock(){

            let error = "Sin stock"
            if(this.stock == true){
                this.stock = false
            }

            else{
                console.log(error)
            }
        }

}


const deposito=[]

    let semilla1 = new semilla("tomate sungold", "primavera-verano", "produccion propia", 30, true, 650)
    let semilla2 = new semilla("pak choi", "otono-invierno", "produccion propia", 50, false, 780)
    let semilla3 = new semilla("lechuga hoja de roble", "otono-invierno", "produccion propia", 50, true, 690)
    let semilla4 = new semilla("dinosaur kale", "otono-invierno", "importada", 50, false, 720)
    let semilla5 = new semilla("tomate platense", "primavera-verano", "produccion propia", 30, true, 620)
    let semilla6 = new semilla("mostaza", "otono-invierno", "produccion propia", 50, true, 560)
    let semilla7 = new semilla("espinaca", "otono-invierno", "importada", 50, true, 720)
    let semilla8 = new semilla("brocoli", "otono-invierno", "produccion propia", 50, true, 690)


    deposito.push(semilla1, semilla2, semilla3, semilla4, semilla5, semilla6, semilla7, semilla8)


let precioMayor700 = deposito.filter(precio=>precio.precio > 700)
console.log(precioMayor700)


function cargarSemilla(){

    let nombreSemilla = prompt("Ingrese el nombre de la semilla")
    let temporadaSemilla = prompt("Ingrese la temporada de siembra correspondiente")
    let procedenciaSemilla = prompt("Ingrese la procedencia")
    let unidadesPorPack = Number(prompt("Ingrese la cantidad de unidades por pack"))
    let stock = Number(prompt("Ingrese el stock a cargar"))
    let precio = Number(prompt("Ingrese el precio"))
    let confirmacion = confirm("Esta seguro que quiere cargar esta semilla?")
    let semillaNueva = new semilla(nombreSemilla, temporadaSemilla, procedenciaSemilla, unidadesPorPack, stock, precio, confirmacion)
    console.log(semillaNueva)
    deposito.push(semillaNueva)
    console.log(deposito)  

}


let cargarArticulos = prompt("Desea cargar nuevos articulos? Escriba SI o NO").toLocaleUpperCase()
while(cargarArticulos == "SI"){
    cargarSemilla()
    cargarArticulos = prompt("Desea seguir cargando articulos? Escriba SI o NO").toLocaleUpperCase()
    
}





