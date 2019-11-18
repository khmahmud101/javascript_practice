 let name = 'Twincle Cats'
 let email = 'khaled1991@gmail.com'
 
 const Cat ={
     name,
     email,

     print(){
         console.log(this.name, this.email)
     }

 }

 Cat.print();
 console.dir(Cat);

 