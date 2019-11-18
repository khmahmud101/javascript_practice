const arr = [1,2,3]

let [a,b,c] = arr;
console.log(a)
console.log(c)
console.log(b)



const obj = {
    name:'Twincle Cats',
    email: 'cats.twincle@gmail.com'
}
let {name,email} = obj
console.log(name)
console.log(email)

function print({name,email}){
    console.log('Hello '+ name + ' Email:'+email);
}

print({email,name})