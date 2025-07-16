var read=require('readline-sync')
var value=read.question("enter first number");
var value1=read.question("enter second number");
if(value>value1)
{
    console.log("greater number is"+value)
}
else{
        console.log("greater number is"+value1)

}