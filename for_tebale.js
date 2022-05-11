const r=require("readline-sync")
var num=r.questionInt("Enter the number ")
for(i=2;i<=num;i++){
    for(b=1;b<=10;b++){
        console.log(i,"*",b,"=",i*b)
    }
    console.log()
}
