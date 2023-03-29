console.log('introduction NodeJs')


let fs = require('fs') ;
//console.log(fs)

fs.readdir('./',(err,files)=> {
if (err) console.log(err)
else
console.log(files)
}
)

const uuid =require('uuid')
let users =[
    {
        name:'Seif',
        lastname :'Thamer',
        id:uuid.v4(),

    },
    {
        name:'Anas',
        lastname :'Shili',
        id:uuid.v4(),

    }
];
console.log(users[1])





let myFunction = require('./myFunction')
console.log(myFunction)
console.log('my sum function', myFunction.sum(17,12))
console.log('my minus function', myFunction.minus(17,13))
