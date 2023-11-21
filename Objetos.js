//Fundamentos
const cliente = { //Creamos el objeto
    name:"Jhordy",
    lastName:"Aguas",
    id:"1790909090",
    address:{
        city:"Quito",
        telephone:"0912345678",
        street:"Madrid"
    },
    librosSolicitados:['Don Quijote de la Mancha','El Señor de los Anillos','Harry Potter','El Principito'],
    enviarEmailDeLibrosSolicitados (){
        return `Usted a solicitado los siguientes libros: ${this.librosSolicitados.join(', ')}`
    },
    state:true
}

console.log(cliente.id); 
console.log(cliente.enviarEmailDeLibrosSolicitados());

cliente.foto ="img/foto" 
delete cliente.state 
console.log(cliente);

//Destructuración de objetos

// const {name,lastName,id,address} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${address.city}`);

// const {name,lastName,id,myAddress=cliente.address} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${myAddress.city}`);

// const {name,lastName,id,address:{city}} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${city}`);

const {name,lastName,...res} = cliente
console.log(`El ciudadano ${res.id} que ha solicitado los libros vive en ${res.address.city}`);


//Uso de This en objetos


const user = {
    name:"Brandon",
    lastName:"Sandoval",
    age:20,
    address:{
        city:"Quito",
        telephone:"0992597185",
        street:"Pueblo solo Plueblo"
    },
    Friends:['Andrew','Washington','Melani','Danilo'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log(user.sendMail());







// Metodos para trabajar con objetos

const user2 = {
    name:"Brandon",
    lastName:"Sandoval",
    age:20,
    address:{
        city:"Quito",
        telephone:"0992597185",
        street:"Pueblo solo Pueblo"
    },
    Friends:['Andrew','Washington','Melani','Danilo'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(user2))
console.log("Obtener los valores:",Object.values(user2))
console.log("Obtener las claves y valores en un array:",Object.entries(user2))


// ES6

const name ="Play Station 4"
const price = 700

const newProduct = {
    name,
    price
}

console.log(newProduct);

