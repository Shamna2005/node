const Promise=require('promise')

function getName(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('shamna')
    },3000)
})
}
function getRoll(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('10')
        },2000)
    })
}
// Promise.all([getName(),getRoll()]).then((result)=>{
//     console.log(result)
// })
async function getUser()
{
    let name=await getName()
    console.log(name)
    let roll=await getRoll()
    console.log(roll)
}
getUser()
