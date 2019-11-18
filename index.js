console.log('hello')
//alert('Hello khaled mahmud')

//var b = 'hello b'

//console.log(b)
//var age = prompt('what is your age?');
//document.getElementById('someText').innerHTML = age;

//const add = (a,b) => a+b;


//console.log(add(10,20))

let colors = ['red','bue','green','yellow']
let i = 0
let btn = document.getElementById('click-me')
btn.addEventListener('click',function(){
    let h1 = document.getElementById('my-h1')
    h1.innerHTML = 'This is new Text'
    h1.style.background = colors[i]
    if (i >= colors.length){
        i= 0
    }
    else{
        i++
    }


})

