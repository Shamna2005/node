// function add(num1,num2,callback){
//     err=false
//     if(num1==0){
//         err=true
//          }
//     callback(num1+num2,err)
// }
// function substract(num1,num2,callback){
//     callback(num1-num2)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function divition(num1,num2,callback){
//     callback(num1/num2)
// }
// add(10,20,(sum,err)=>{
//     if(err)
//     {
//         console.log('First number is error')
//     }
//     else{
//     console.log(sum)
//     substract(sum,1,(subs)=>{
//         console.log(subs)
//     multiply(sum,subs,(product)=>{
//         console.log(product)
//     divition(product,10,(div)=>{
//         console.log(div)
//     })
//     })
//     })
//     }
// })

const Promise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject('First number is Zero')
        }
        resolve(num1+num2)
    })
}

function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject('First number is Zero')
        }
        resolve(num1*num2)
    })
}

function divition(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject('First number is Zero')
        }
        resolve(num1/num2)
    })
}

function substract(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject('First number is Zero')
        }
        resolve(num1-num2)
    })
}
add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
 .then((product)=>{
    console.log(product)
    return divition(product,10)
 }).then((div)=>{
    console.log(div)
     return substract(sum,1)
 }).then((sub)=>{
    console.log(sub)
 })
})
 .catch((err)=>{
    console.log(err)
})