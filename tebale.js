var y=require("readline-sync")
const num=y.questionInt("Enter the number")
for(let i=1;i<=10;i++){
    console.log(num,"*",i,"=",i*num)
}