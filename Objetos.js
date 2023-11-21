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

